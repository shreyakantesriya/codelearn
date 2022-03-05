const express = require("express");
const router = new express.Router();
const MensRanking = require("../modules/mens")


router.post("/mens",async(req,res)=>{
    try {
        const addMensRecodes = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addMensRecodes.save();
        res.status(201).send(insertMens);
    } catch(error) {
        res.status(400).send(error);
    }
});

// read the data
router.get("/mens",async(req,res)=>{
    try {
       const getMens = await MensRanking.find({}).sort({});
        res.status(201).send(getMens);
    } catch(error) {
        res.status(400).send(error);
    }
});

// read the indivitiol data
router.get("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id
       const getMen = await MensRanking.findById({_id});
        res.status(201).send(getMen);
    } catch(error) {
        res.status(400).send(error);
    }
});

// update the indivitiol data
router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id
       const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true
        });
        res.status(201).send(getMen);
    } catch(error) {
        res.status(500).send(error);
    }
});
// delete the data
router.delete("/mens/:id",async(req,res)=>{
    try {
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(201).send(getMen);
    } catch(error) {
        res.status(500).send(error);
    }
});

module.exports = router;
const mongoose = require("mongoose");

// conection cretion and creatin a new db
mongoose.connect("mongodb://localhost:27017/SKC", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conecttion is successFul"))
    .catch((err) => console.log(err));

// what is schima
// A mongoose schema a deine the structure of the document,
// default values, validatiors,,etc..

const employListSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type:String,
        // lowercase:true
        // uppercase:true
        trim:true
    },
    work: String,
    moNo:{ 
      type:Number,
      validate(val){
          if(val<=0){
            throw new Error('nagetiv number not include')
          }
      }
    },
    active: Boolean,
    joineDate: {
        type: Date,
        default: Date.now
    }
})

// A mongoose modle is a wrapper on the mongoose Schema
// A mongoose schema defined the structure of the document,
// default values,validatiors,etc, whereas a mongoose model provides an interface to the database for creating,qurying,updating,updating,deleting,records,etc.
const Employlist = mongoose.model("Employlist", employListSchema);

// creat a document or insret
const creatDocument = async () => {
    try {


        const list = new Employlist({
            id: 49,
            name: "        SH  rey          ",
            work: "Web devlopment",
            moNo: 9978014603,
            active: true
        })
        const list1 = new Employlist({
            id: 99,
            name: "Banshal",
            work: "softeware devlopment",
            moNo: 9978014603,
            active: true
        })
        const list2 = new Employlist({
            id: 97,
            name: "Janvi",
            work: "UI/UX",
            moNo: 9978014609,
            active: true
        })
        const list3 = new Employlist({
            id: 99,
            name: "Bhanau",
            work: "Mangement",
            moNo: 9978014803,
            active: true
        })
        const result = await Employlist.insertMany([list])
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
creatDocument()
const readDocument = async () =>{
    try{

        const result = await Employlist
        // .find({id:{$gte:49}});
        // .find({$or:[{work:"UI/UX"},{active:true}]})
        .find({active:true})
        // .countDocuments()
        // .sort("name : 1")
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// readDocument();

// update the document
const updateDocument = async (_id)=>{
    try{

        const result =  await Employlist.findByIdAndUpdate({_id},{
            $set: {
                work: "Web Devlopment",
                name:"Shrey"
            }
        },
            {
                useFindAndModify:false
            });
        // console.log(result);
    }catch(err){
        console.log(err);
    }
    
}

// updateDocument("6082ed475589ee1d20892121")     ;

// delete the document

const deleteDocument= async (_id) =>{
    try{
       const result = await Employlist.findByIdAndDelete({_id});
       console.log(result);
    }catch(err){
        // console.log(err);
    }
}

// deleteDocument("6082cc30fb3a711d48ba5e67");

























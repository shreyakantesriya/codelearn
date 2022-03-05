const quction = (name) => {

    return function (topic) {
        if (name === "shreya") {
            console.log(`Hi ${name} what is ${topic}?`);
        }
        else if (name === "sourabh") {
            console.log(`Hi ${name} what is ${topic}?`);
        }

        else {

            console.log('welcome to compney');
        }
    }
}
quction("shreya")("OOPS consepts")
quction("sourabh")("real time example of sql qury")

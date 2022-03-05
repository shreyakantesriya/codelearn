const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords="";
let randomWords = ""
let showwords = ['php','java','nodejs','laravel','React','html','css','monoges','sql','c#','c++','AI','Ml','Mants','Social Science','mysql','Hex','quter','angular','pyhton'];


const createWords = ()=>{
        let retNum = Math.round(Math.random()*showwords.length); 
        // console.log(retNum);
        let newTempWord = showwords[retNum];
        // console.log(newTempWord.split(""));
        return newTempWord;
}

const scrmbleWords = (arr) =>{
    for(let i = arr.length-1;i>=0;i--)
    {
        let temp = arr[i]
        console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

btn.addEventListener('click',function(){
    if(!play){
        play = true
        btn.innerHTML = "Guess"
        guess.classList.toggle('hidden')
        newWords = createWords();
        randomWords  = scrmbleWords(newWords.split("").join());
        // console.log(randomWords.join());
        msg.innerHTML = `Guess the word : ${randomWords}`;
    }
    else{
        let tempWords = guess.value;
        if(tempWords===newWords){
            // console.log("correct");
            play = false;
            msg.innerHTML = `It is correct. It is  ${newWords}`
            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden')
            guess.value = "";
        }
        else{
            console.log('worng');
            msg.innerHTML = `plz try Again ${randomWords}`
        }
    }
   
})
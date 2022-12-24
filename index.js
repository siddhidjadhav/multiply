const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
const toh=document.getElementById("tohide")
const questionE1=document.getElementById("question");


questionE1.innerText=`What is ${num1} multiply by ${num2}?`

const inputE1=document.getElementById("input")
const i2=document.getElementById("error")

const formE1=document.getElementById("form")
const scoreE1=document.getElementById("score")
const resetE1=document.getElementById("btn")
const correctAns=num1*num2;

let score=  JSON.parse(localStorage.getItem("score"));
let e1=JSON.parse(localStorage.getItem("e1"));

if(!score)
{
    score=0;
}
if(!e1)
{
    e1="";
}

scoreE1.innerText=`score: ${score}`
i2.innerText=`${e1}`
formE1.addEventListener("submit",()=>{
    const userAns=+inputE1.value;
    
    if(inputE1.value==="")
    {
        e1="Please enter a valid number"
        updateLocalstorage()

    }
    else{
        if(userAns==correctAns)
        {
            score++;
            e1="Correct Answer!"
            updateLocalstorage()
            

        }
        else{
            score--;
            e1="Wrong Answer"
            updateLocalstorage()
        }
    }
})

function updateLocalstorage()
{
    localStorage.setItem("score",JSON.stringify(score) )
    localStorage.setItem("e1",JSON.stringify(e1))
    toh.style.visibility="visible"
}

function updatereset()
{
    score=0;
    e1="";
    localStorage.setItem("score",JSON.stringify(score) )
    localStorage.setItem("e1",JSON.stringify(e1))
     scoreE1.innerText=`score: ${score}`
     i2.innerText=`${e1}`
     toh.style.visibility="hidden"

}

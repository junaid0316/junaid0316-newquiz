window.onload=function(){
    show(0)
}
var questions=[{
    id: 1,
    question: "How many soccer players should each team have on the field at the start of each match?",
    answer: 11,
    options: [
        10,
        11,
        15,
        12
    ]
},
{
    id: 2,
    question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
    answer: "Six",
    options: [
        "Six",
        "Seven",
        "Five",
        "Eleven"
    ]
},
{
    id: 3,
    question: "Which Williams sister has won more Grand Slam titles?",
    answer: "Serena",
    options: [
        "Sara",
        "Serena",
        "Angela",
        "Julie"
    ]
},
{
    id: 4,
    question: "Which racer holds the record for the most Grand Prix wins?",
    answer: "Michael Schumacher",
    options: [
        "Jordi el",
        "Nino polla",
        "Michael Schmachar",
        "Roman reigns"
    ]
},
{
    id: 5,
    question: "What country won the very first FIFA World Cup in 1930?",
    answer: "Uruguay",
    options: [
        "America",
        "Uruguay",
        "Bosnia",
        "Philphines"
    ]
},
]
var questioncount = 0;
function next(){
    questioncount++
    show(questioncount)
}
function show(e){
    var ques = document.getElementById("questions")
    ques.innerHTML= '<h3 class="que">'+ questions[e].question + '</h3>' +
    '<ul class="list">'+ 
    '<li class="option">'+questions[e].options[0]+'</li>'+
    '<li class="option">'+questions[e].options[1]+'</li>'+
    '<li class="option">'+questions[e].options[2]+'</li>'+
    '<li class="option">'+questions[e].options[3]+'</li>'
    +'</ul>' 
    Active()                                      
}
score=0
function Active(){
    let opt=document.querySelectorAll("li.option")

    for(let i=0;i<opt.length;i++){
        opt[i].onclick=function(){
            for(let j=0;j<opt.length;j++){
                if(opt[j].classList.contains("active")){
                    opt[j].classList.remove("active")
                }
            }
            opt[i].classList.add("active")
            if(opt[j].classList.contains("active").checked == questions[i].answer){
                score++
            }
        }
    }
}
function index2(){
    window.open("index2.html")

}
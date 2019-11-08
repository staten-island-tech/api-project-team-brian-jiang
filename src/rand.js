//Replace the user input name with the questions 
let user_input = toString(document.getElementById('user_input'));

const q1 = str.concat('What year did', user_input, 'release?');
const q2 = str.concat('What company created', user_input, '?');
const q3 = str.concat('What is a platform', user_input,'is released on');
const q4 = str.concat('What is the main protagonist of', user_input,'?');
const q5 = str.concat('Does', user_input, 'the game have a DLC?');
const q6 = str.concat('What setting does', user_input, 'take place?');
const q7 = 'What is the name of this character?:';
const q8 = 'Is this project worth anything Whalen xd?';

//Randomize the Questions
let questions = [q1, q2, q3, q4, q5, q6, q7, q8];

let randomizer = (questions) => {  //Fisher-Yates setup
    for (let i = questions.length - 1; i > 0; i--){
        const newPos = Math.floor(Math.random() * (i + 1));
        let temp = questions[i];
        questions[i] = questions[newPos];
        questions[newPos] = temp;
    }
    return questions
}
//console.log(randomizer(questions)); and it works

//Generate answers 
function YesOrNo(){
    if(el){
        /*Checks if its a yes or no question and it will generate 2 buttons*/
        
        const yesbtn = document.createElement("button");
        yesbtn.innerHTML = "Yes"; 
        document.getElementById('c1').appendChild(yesbtn);
        const nobtn = document.createElement("button");
        yesbtn.innerHTML = "No";
        document.getElementById('c2').appendChild(nobtn);

        let answer = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/game/${result.results[0].id}/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&format=json`);

        //compare answers
        //issue right or wrong

    }else{
        
        /*If its is not a yes or no question, it will generate 4 buttons*/
        //compare answers
        //issue right or wrong

    }
}

//Note: Compare answers with API values and Issue alerts on right or wrong maybe could be on seperate JS files
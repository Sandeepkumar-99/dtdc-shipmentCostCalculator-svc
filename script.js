//regular Service
var normalLocalRate = document.getElementById("normalLocalRate");
var normalTsApRate = document.getElementById("normalTsApRate");
var normalMetroRate = document.getElementById("normalMetroRate");
var normalNonMetroRate = document.getElementById("normalNonMetroRate");

//Plus service
var plusLocalRate = document.getElementById("plusLocalRate");
var plusTsApRate = document.getElementById("plusTsApRate");
var plusMetroRate = document.getElementById("plusMetroRate");
var plusNonMetroRate = document.getElementById("plusNonMetroRate");

//Cargo Service
var cargoLocalRate = document.getElementById("cargoLocalRate");
var cargoTsApRate = document.getElementById("cargoTsApRate");
var cargoMetroRate = document.getElementById("cargoMetroRate");
var cargoNonMetroRate = document.getElementById("cargoNonMetroRate");

//results
var normalResult = document.getElementById("normalResult");
var plusResult = document.getElementById("plusResult");
var cargoResult = document.getElementById("cargoResult");

//Calculate buttons
var normalCalculate = document.getElementById("normalCalculate");
var plusCalculate = document.getElementById("plusCalculate");
var cargoCalculate = document.getElementById("cargoCalculate");
var resetBtn = document.getElementById("reset");

//resets
const normalReset = document.getElementById("normalReset"); 
const plusReset = document.getElementById("plusReset");
const cargoReset = document.getElementById("cargoReset");


//Arrays
const regularArray = [normalLocalRate, normalTsApRate, normalMetroRate, normalNonMetroRate, normalCalculate, normalReset, normalResult];
const plusArray = [plusLocalRate, plusTsApRate, plusMetroRate, plusNonMetroRate, plusCalculate, plusReset, plusResult];
const cargoArray = [cargoLocalRate, cargoTsApRate, cargoMetroRate, cargoNonMetroRate, cargoCalculate, cargoReset, cargoResult];


normalCalculate.addEventListener('click', normalService);
plusCalculate.addEventListener('click', plusService);
cargoCalculate.addEventListener('click', cargoService);

//reset EventListener
normalReset.addEventListener('click', () => reset(regularArray));
plusReset.addEventListener('click', () => reset(plusArray));
cargoReset.addEventListener('click', () => reset(cargoArray));

function normalService(){
    let localWeight = parseFloat(normalLocalRate.value);
    let tsApWeight = parseFloat(normalTsApRate.value);
    let metroWeight = parseFloat(normalMetroRate.value);
    let nonMetroWeight = parseFloat(normalNonMetroRate.value);
    let result = 0;
    if(localWeight>0){
        result = (localWeight>250)?((localWeight/500)*40)+25:55;
        disable(regularArray,0);
        resultOutPut(result, regularArray);
    }else if(tsApWeight>0){
        result = (tsApWeight>250)?((tsApWeight/500)*55)+40:80;
        disable(regularArray,1);
        resultOutPut(result, regularArray);
    }else if(metroWeight>0){
        result = (metroWeight>250)?((metroWeight/500)*100)+55:135;
        disable(regularArray,2);
        resultOutPut(result, regularArray);
    }else if(nonMetroWeight>0){
        result = (nonMetroWeight>250)?((nonMetroWeight/500)*115)+60:160;
        disable(regularArray,3);
        resultOutPut(result, regularArray);
    }else{
        alert("Please enter a weight");
    }
}

function plusService(){
    let localWeight = parseFloat(plusLocalRate.value);
    let tsApWeight = parseFloat(plusTsApRate.value);
    let metroWeight = parseFloat(plusMetroRate.value);
    let nonMetroWeight = parseFloat(plusNonMetroRate.value);
    let result = 0;
    if(localWeight>0){
        result= ((localWeight/500)*50)+75;
        disable(plusArray,0);
        resultOutPut(result, plusArray);
    }else if(tsApWeight>0){
        result= ((tsApWeight/500)*135)+105;
        disable(plusArray,1);
        resultOutPut(result, plusArray);
    }else if(metroWeight>0){
        result= ((metroWeight/500)*180)+120;
        disable(plusArray,2);
        resultOutPut(result, plusArray);
    }else if(nonMetroWeight>0){
        result= ((nonMetroWeight/500)*210)+130;
        disable(plusArray,3);
        resultOutPut(result, plusArray);
    }else{
        alert("Please enter a weight");
    }
}

function cargoService(){
    let localWeight = parseFloat(cargoLocalRate.value);
    let tsApWeight = parseFloat(cargoTsApRate.value);
    let metroWeight = parseFloat(cargoMetroRate.value);
    let nonMetroWeight = parseFloat(cargoNonMetroRate.value);
    let result = 0;
    if(localWeight>0){
        result= ((localWeight/1000)*60);
        disable(cargoArray,0);
        resultOutPut(result, cargoArray);
    }else if(tsApWeight>0){
        result= ((tsApWeight/1000)*100);
        disable(cargoArray,1);
        resultOutPut(result, cargoArray);
    }else if(metroWeight>0){
        result= ((nonMetroWeight/1000)*175);
        disable(cargoArray,2);
        resultOutPut(result, cargoArray);
    }else if(nonMetroWeight>0){
        result= ((nonMetroWeight/1000)*200);
        disable(cargoArray,3);
        resultOutPut(result, cargoArray);
    }else{
        alert("Please enter a weight");
    }
}

function reset(arr){
    let i = 0;
    while(i<=3){
        arr[i].value="";
        arr[i].disabled=false;
        i++
    }
    arr[4].disabled=false;
    arr[5].disabled=true;
    arr[6].innerText = "Total Cost: Rs."
    arr[6].style.display="none";    
}

function disable(arr,elem){
    let i = 0
    while(i<=3){
        arr[i].disabled=true;

        i++
    }
    arr[4].disabled = true;
    arr[5].disabled = false;
}

function resultOutPut(sum, arr){
    console.log("Result: ", sum);
    arr[6].innerText+=" "+sum;
    arr[6].style.display="block";
}
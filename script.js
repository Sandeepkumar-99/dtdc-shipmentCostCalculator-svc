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

function normalService(){
    let localWeight = parseFloat(normalLocalRate.value);
    let tsApWeight = parseFloat(normalTsApRate.value);
    let metroWeight = parseFloat(normalMetroRate.value);
    let nonMetroWeight = parseFloat(normalNonMetroRate.value);
    let result = 0;
    console.log(" outside if localWeight"+localWeight);

    if(localWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((localWeight/250)*25)+45;
        console.log("result"+result);
        normalTsApRate.disabled = true;
        normalMetroRate.disabled = true;
        normalNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        normalCalculate.disabled = true;
    }
    if(tsApWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((tsApWeight/250)*30)+70;
        console.log("result"+result);
        document.getElementById("normalLocalRate").disabled = true;
        normalMetroRate.disabled = true;
        normalNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        normalCalculate.disabled = false;
    }
    if(metroWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((metroWeight/250)*50)+125;
        console.log("result"+result);
        document.getElementById("normalLocalRate").disabled = true;
        normalTsApRate.disabled = true;
        normalNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        normalCalculate.disabled = false;
        
    }
    if(nonMetroWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((nonMetroWeight/250)*70)+130;
        console.log("result"+result);
        document.getElementById("normalLocalRate").disabled = true;
        normalMetroRate.disabled = true;
        normalTsApRate.disabled = true;
        resetBtn.disabled = false;
        normalCalculate.disabled = false;
    }
    console.log(result)
    normalResult.innerText+=result
    normalResult.style.display="block";
}

function plusService(){
    let localWeight = parseFloat(plusLocalRate.value);
    let tsApWeight = parseFloat(plusTsApRate.value);
    let metroWeight = parseFloat(plusMetroRate.value);
    let nonMetroWeight = parseFloat(plusNonMetroRate.value);
    let result = 0;
    console.log("Outside if localWeight"+localWeight);
    if(localWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((localWeight/500)*50)+75;
        console.log("result"+result);
        plusTsApRate.disabled = true;
        plusMetroRate.disabled = true;
        plusNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        plusCalculate.disabled = true;
    }
    if(tsApWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((tsApWeight/500)*135)+105;
        console.log("result"+result);
        plusLocalRate.disabled = true;
        plusMetroRate.disabled = true;
        plusNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        plusCalculate.disabled = false;
    }
    if(metroWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((metroWeight/500)*180)+120;
        console.log("result"+result);
        plusLocalRate.disabled = true;
        plusTsApRate.disabled = true;
        plusNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        plusCalculate.disabled = false;
    }
    if(nonMetroWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((nonMetroWeight/500)*210)+130;
        console.log("result"+result);
        plusLocalRate.disabled = true;
        plusTsApRate.disabled = true;
        plusMetroRate.disabled = true;
        resetBtn.disabled = false;
        plusCalculate.disabled = false;
    }
    plusResult.innerText+=result
    plusResult.style.display="block";
}

function cargoService(){
    let localWeight = parseFloat(cargoLocalRate.value);
    let tsApWeight = parseFloat(cargoTsApRate.value);
    let metroWeight = parseFloat(cargoMetroRate.value);
    let nonMetroWeight = parseFloat(cargoNonMetroRate.value);
    let result = 0;
    console.log("Outside if localWeight"+localWeight);
    if(localWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((localWeight/1000)*60);
        console.log("result"+result);
        cargoTsApRate.disabled = true;
        cargoMetroRate.disabled = true;
        cargoNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        cargoCalculate.disabled = true;
    }
    if(tsApWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((tsApWeight/1000)*100);
        console.log("result"+result);
        cargoLocalRate.disabled = true;
        cargoMetroRate.disabled = true;
        cargoNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        cargoCalculate.disabled = false;
    }
    if(metroWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((nonMetroWeight/1000)*175);
        console.log("result"+result);
        cargoLocalRate.disabled = true;
        cargoTsApRate.disabled = true;
        cargoNonMetroRate.disabled = true;
        resetBtn.disabled = false;
        cargoCalculate.disabled = false;
        
    }
    if(nonMetroWeight>=0){
        console.log(" inside if localWeight"+localWeight);
        result= ((nonMetroWeight/1000)*200);
        console.log("result"+result);
        cargoLocalRate.disabled = true;
        cargoTsApRate.disabled = true;
        cargoMetroRate.disabled = true;
        resetBtn.disabled = false;
        cargoCalculate.disabled = false;
    }
    cargoResult.innerText+=result
    cargoResult.style.display="block";
}

function reset(){
    console.log("reset");
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = false;
        input.value="";
    });
    const para = document.querySelectorAll('p');
    para.forEach(para => {
        para.innerText="Total Rate:";
        para.style.display="none";

    });
    const calculateButtons = document.querySelectorAll('button');
    calculateButtons.forEach(button => {
        button.disabled = false;
    });
    const resetButtons = document.querySelectorAll('#reset');
    resetButtons.forEach(button => {
        button.disabled = true;
    });
}
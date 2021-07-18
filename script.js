/*********************************************PART 1************************************************************/
//STEP 1: 
//make a variable named button
//access the Result button using DOM 
var button = document.querySelector("button");

//STEP 2:
//call out the button variable and attach .addEventListener("click", function(){})
//in the function(), create:
//=> a variable named weight and access the <input> id for weight to get the value using DOM  (text input)
//=> a variable named heightinCM and access the <input> id for height to get the value using DOM (text input)
//=> a variable named male and access the <input> id for male using DOM (radio button)
//=> a variable named female and access the <input> id for female using DOM (radio button)
//=> a variable named teenager and access the <input> id for the teenager using DOM (radio button)
//=> a variable named youngAdult and access the <input> id for the young adult using DOM (radio button)
//=> a variable named adult and access the <input> id for the adult using DOM (radio button)
//=> a variable named elderly and access the <input> id for the elderly using DOM (radio button)
//=> a variable named basal and do not declare any value for it (we will use it for the BMR formula later on)
//=> a variable named heightinMeter and make the value to be heightinCM divided by 100
//=> a variable named kJtoKcal and make the value to be 4.184 
button.addEventListener("click", function () {
    var weight = document.querySelector("#weight").value;
    var heightinCM = document.querySelector("#height").value;
    var basal; //result BMR
    var dailyIntake; //overall intake

    // data validation [for advanced]
    var weightMessage= document.querySelector("#weightMessage")
    var heightMessage= document.querySelector("#heightMessage") 

    if (weight == 0 && heightinCM == 0) {

        weightMessage.style = "color: red;"
        heightMessage.style = "color: red;"

        return
    }

    if (weight == 0) {

        heightMessage.style = "display: none;"
        weightMessage.style = "color: red;"
        
        return
    }

    if (heightinCM == 0) {

        weightMessage.style = "display: none;"
        heightMessage.style = "color: red;"
        
        return
    }


    // after all has been input
    heightMessage.style = "display: none;"
    weightMessage.style = "display: none;"

    var male = document.querySelector("#male");
    var female = document.querySelector("#female");
    var teenager = document.querySelector("#teenager"); //age 10-17
    var youngAdult = document.querySelector("#youngAdult"); //age 18-29
    var adult = document.querySelector("#adult"); //age 30-59
    var elderly = document.querySelector("#elderly"); //age 60 and above
    var basal; //result BMR
    var heightinMeter = heightinCM / 100;
    const kJtoKcal = 4.184;

   // calculate BMR (refer to the project guideline at Part 1)
   if (male.checked && teenager.checked) {
    basal = Math.round(((69.4 * weight) + (322.2 * heightinMeter) + 2392) / kJtoKcal);
    console.log(basal);
} else if (male.checked && youngAdult.checked) {
    basal = Math.round(((64.4 * weight) - (113 * heightinMeter) + 3000) / kJtoKcal);
    console.log(basal);
}
else if (male.checked && adult.checked) {
    basal = Math.round(((47.2 * weight) + (66.9 * heightinMeter) + 3769) / kJtoKcal);
    console.log(basal);
}
else if (male.checked && elderly.checked) {
    basal = Math.round(((36.8 * weight) + (4719.5 * heightinMeter) - 4481) / kJtoKcal);
    console.log(basal);
}
else if (female.checked && teenager.checked) {
    basal = Math.round(((30.9 * weight) + (2016.6 * heightinMeter) + 907) / kJtoKcal);
    console.log(basal);
}
else if (female.checked && youngAdult.checked) {
    basal = Math.round(((55.6 * weight) + (1397.4 * heightinMeter) + 146) / kJtoKcal);
    console.log(basal);
}
else if (female.checked && adult.checked) {
    basal = Math.round(((36.4 * weight) - (104.6 * heightinMeter) + 3619) / kJtoKcal);
    console.log(basal);
}
else {
    basal = Math.round(((38.5 * weight) + (2665.2 * heightinMeter) - 1264) / kJtoKcal);
    console.log(basal);
}
    
    // calculate Activity :Sedentary, Lightly Active, Moderately Active, Very Active
    var sedentary = document.querySelector(".sedentary");
    var light = document.querySelector(".light");
    var moderate = document.querySelector(".moderate");
    var active = document.querySelector(".active");
    var choice = document.querySelector(".choice");

      /*********************************************PART 2************************************************************/
    //STEP 1:
    //After the conditional statement that can get the result of the basal, create:
    //=> a variable named choice and access the <option> class for choice using DOM
    //=> a variable named sedentary and access the <option> class for sedentary using DOM
    //=> a variable named light and access the <option> class for light using DOM
    //=> a variable named moderate and access the <option> class for moderate  using DOM
    //=> a variable named active and access the <option> class for active using DOM
    //=> a variable named dailyIntake and do not declare any value for it (we will use it for the formula later on)
    //=> a variable named resultMessage and access the <div> id for the result message using DOM
    //=> a variable named calorie and access the <div> id for calorie using DOM
    //=> a variable named final and make the value to be document.querySelector("#Final");

    if(choice.selected){
        dailyIntake = 0; 
        //later they need to put the validation to prevent the loss and gain from be calculated
        loss.textContent = Math.round(dailyIntake); //can also put this if no validation
        gain.textContent = Math.round(dailyIntake); //can also put this if no validation
    }
    else if (sedentary.selected) {
        dailyIntake = basal*1.2;
    }
    else if(light.selected){
        dailyIntake = basal*1.375;
    }
    else if(moderate.selected){
        dailyIntake = basal*1.55;
    }
    else if(active.selected){
        dailyIntake = basal*1.725;
    }

    var calorie = document.querySelector("#calorie");
    var loss = document.querySelector("#loss");
    var gain = document.querySelector("#gain");
    var hideLoss = document.querySelector(".hideLoss")

     /***************ADVANCED - FOR WEIGHT LOSS AND GAIN********************/
    var lossweight = Math.round(dailyIntake-500);
    var gainweight = Math.round(dailyIntake+750);

    if(lossweight<1600 && male.checked){
        gain.textContent = gainweight;
        hideLoss.style.display="none";
    }
    else if(lossweight<1200 && female.checked)
    {
        gain.textContent = gainweight;
        hideLoss.style.display="none";
    }
    else if(lossweight<1600 && male.checked && teenager.checked){
        gain.textContent = gainweight;
        hideLoss.style.display="none";
    }
    else if(lossweight<1400 && female.checked && teenager.checked){
        gain.textContent = gainweight;
        hideLoss.style.display="none";
    }
    else{
        loss.textContent = lossweight;
        gain.textContent = gainweight;
        hideLoss.style.display ="block";
    }

    //STEP 3:
    //round off the daily intake calorie
    calorie.textContent = Math.round(dailyIntake);

    //STEP 4:
    //customize the output style of the daily intake result
    var final = document.querySelector("#Final");
    final.style = "max-width: 25rem; margin: auto; border: 6px solid orange; width: 50%; margin-top: 45px; background-color:#fff176; border-radius: 20px; color:#ff6d00; margin-bottom: 30px";
})


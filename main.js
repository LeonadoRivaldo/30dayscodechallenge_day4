console.log("yeah loaded!");
var afLevels = {
    EER:{
        m:[1.00,1.11,1.25,1.48],
        w:[1.00,1.12,1.27,1.45]
    },
    TEE:{
        m:[1.00,1.12,1.29,1.59],
        w:[1.00,1.16,1.27,1.44]   
    }
};

//functions
var $query = function(q){
    return document.querySelector(q);
}

var EERFunction = function(sex, age, height, weight, afLevel){
    var modif = sex === 'm' ? 662 : 354;
    var ageModif = sex === 'm' ? 9.53 : 6.9;
    var weightModif = sex === 'm' ? 15.91 : 9.36;
    var heightModif = sex === 'm' ? 539.6 : 726;
    var af = afLevels.EER[sex][afLevel]; 

    return modif - (ageModif * age) + af + (weightModif * weight ) + (heightModif * height);
    //662 – (9,53 x idade [anos]) + AF x (15,91 x peso [kg]) + (539,6 x altura [m])
    //354 – (6,91 x idade [anos]) + AF x (9,36 x peso [kg]) + (726 x altura [m])
}

var TEEFunction = function(sex, age, height, weight, afLevel){
    var modif = sex === 'm' ? 1.086 : 448;
    var ageModif = sex === 'm' ? 10.1 : 7.95;
    var weightModif = sex === 'm' ? 13.7 : 11.4;
    var heightModif = sex === 'm' ? 416 : 619;
    var af = afLevels.TEE[sex][afLevel]; 

    return modif - (ageModif * age) + af + (weightModif * weight ) + (heightModif * height);
    //1.086 – (10,1 x idade [anos]) + AF x (13,7 x peso [kg]) + (416 x altura [m])
    //448 – (7,95 x idade [anos]) + AF x (11,4 x peso [kg]) + (619 x altura [m])
}




var BEEFunction = function(sex, age, height, weight, afLevel){
    var modif = sex === 'm' ? 204 : 255;
    var ageModif = sex === 'm' ? 4 : 2.35;
    var weightModif = sex === 'm' ? 450.5 : 361.6;
    var heightModif = sex === 'm' ? 11.69 : 9.39;
    var af = afLevels.TEE[sex][afLevel]; 

    return modif - (ageModif * age) + (weightModif * weight ) + (heightModif * height);
    //204 – (4 x idade [anos]) + (450,5 x altura [m]) + (11,69 x peso [kg])
    //255 – (2,35 x idade [anos]) + (361,6 x altura [m]) + (9,39 x peso [kg])
}



//variables
var CalcButton = $query(".calcular");
var reseteButton = $query('.resete');

//events
CalcButton.addEventListener("click", function(event){
    event.preventDefault();

    var sex = $query("input[name=sex]").value, 
        age = parseInt($query("input[name=age]").value), 
        height = parseFloat($query("input[name=height]").value), 
        weight = parseFloat($query("input[name=weight]").value), 
        afLevel = parseInt($query("input[name=af]").value);
        $query('.eer').innerHTML += Math.floor(EERFunction(sex, age, height, weight, (afLevel-1))) +"kcal";
        $query('.tee').innerHTML += Math.floor(TEEFunction(sex, age, height, weight, (afLevel-1))) +"kcal";  
        $query('.bee').innerHTML += Math.floor(BEEFunction(sex, age, height, weight, (afLevel-1))) + "kcal";
});

reseteButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log('resete');
});

import { bmiRules } from "./rules";

export function getCateg(height,weight){
    //console.log(weight,height);
    const heightM=height/100
    const bmi = Math.round(weight / (heightM * heightM) * 10) / 10;
    //console.log(bmi);
    
    const obj = bmiRules.find(rule => bmi >= rule.min && bmi < rule.max);
    //console.log(obj);
    
    return obj? {...obj,bmi} : null
}  

                     
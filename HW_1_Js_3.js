

const checkAge = function (age){

age = Number(age)
    if(isNaN(age) || age=='' || age==' ') {  
        console.log("EROR, enter your age ")
    } else {
        if(age < 18) {
            console.log("You don't have access cause your age is " + age + " It's less then 18")
        } else if(age >= 18 && age < 60) {
        console.log("Welcome   !")
        } else if(age > 60) {
            console.log ("Keep calm and look Culture channel")
        }  else {
            console.log("Technical work")
        }
    } 
}
       checkAge ('22в')
     
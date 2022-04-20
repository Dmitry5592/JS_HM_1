function checkAge(age){


    if(Number.isNaN(Number(age))) {
        console.log("EROR")
    } else {

        if(age < 18) {
        console.log(`"You don't have access cause your age is"  age  "It's less then"`)
        } else if(age >= 18 && age < 60) {
        console.log("Welcome   !")
        } else if(age > 60) {
            console.log ("Keep calm and look Culture channel")
        }  else {
            console.log("Technical work")
        }
    } 
}
       checkAge ('вв')
     


function checkAge(age){

    if(+age) {  
        
        if(age < 18) {
            alert("You don't have access cause your age is " + age + " It's less then 18")
        } else if(age >= 18 && age < 60) {
            alert("Welcome   !")
        } else if(age > 60) {
            alert("Keep calm and look Culture channel")
        }  
        else {
            alert("Technical work")
        } 
    } 
    else { alert("EROR, enter your age ")
    } 
}

checkAge(prompt("Ваш возраст?",'18'))

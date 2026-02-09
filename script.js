const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const output = document.getElementById('output');
//query selector
const description = document.querySelector('.description');
const button = document.querySelector('#btnClick');


button.addEventListener('click',() => {
    //visual

    //get input values
    let name = nameInput.value 
    let age = ageInput.value 
    let email = emailInput.value 
    //display output
    output.innerHTML = `<h2>Button Click</h2>`;

    //conditional statements

    if (age == 18){
        output.innerHTML += `<p>Welcome ${name},You are now an adult! Loose equality</p>`;

    }
    else{
        output.innerHTML += `<p>Hello ${name}, You are ${age} years old</p>`

    }

    if(age === 18){
        output.innerHTML += '<p>Welcome ${name}, You are now an adult! strict eqaulity</p>'

    }

    if (name !=="" && age !== "" && email !==""){
        output.innerHTML += `<p>Hi i am ${name},  Im ${age} years old and my email is ${email}. </p>`

    }
    else{
        output.innerHTML += `<p>Please fill in all fields</p>`  
    }

})
let wynik = document.getElementById('wynik');
let memory = [];
let number1;
let memory2 = [];
let number2;
let add = false;
let deduct = false;
let multiply = false;
let divide = false;

buttons[4].addEventListener('click', ()=>{
    console.log('AC');
    wynik.innerHTML = '';
    memory = [];
    memory2 = [];
    number1 = 0;
    number2 = 0;
    xd = 0;
    xd2 = 0;
    add = false;
    deduct = false;
    multiply = false;
    divide = false;
});
buttons[5].addEventListener('click', ()=>{
    console.log('+-');
});
buttons[6].addEventListener('click', ()=>{
    console.log('%');
});
buttons[7].addEventListener('click', ()=>{
    console.log('/');
    divide = true;
});
buttons[8].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('7');
        memory.push('7');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('7');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[9].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('8');
        memory.push('8');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('8');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[10].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('9');
        memory.push('9');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('9');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[11].addEventListener('click', ()=>{
    console.log('x');
    multiply = true;
});
buttons[12].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('4');
        memory.push('4');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('4');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[13].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('5');
        memory.push('5');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('5');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[14].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('6');
        memory.push('6');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('6');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[15].addEventListener('click', ()=>{
    console.log('-');
    deduct = true;
});
buttons[16].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('1');
        memory.push('1');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('1');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[17].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('2');
        memory.push('2');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('2');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[18].addEventListener('click', ()=>{
    if (add == false && deduct == false && multiply == false && divide == false) {
        console.log('3');
        memory.push('3');
        number1 = memory.join('')
        xd = parseInt(number1);
        wynik.innerHTML = xd;
    }
    else{
        memory2.push('3');
        number2 = memory2.join('')
        xd2 = parseInt(number2);
        wynik.innerHTML = xd2; 
    }
});
buttons[19].addEventListener('click', ()=>{
    console.log('+');
    add = true;
});
buttons[20].addEventListener('click', ()=>{
    console.log('nic');
});
buttons[21].addEventListener('click', ()=>{
    console.log('0');
    memory.push('0');
    number1 = memory.join('')
    xd = parseInt(number1);
    wynik.innerHTML = xd;
});
buttons[22].addEventListener('click', ()=>{
    console.log('.');
});
buttons[23].addEventListener('click', ()=>{
    console.log('=');
    if (add == true){
        result = xd + xd2;
        wynik.innerHTML = result;
    }
    if (deduct == true){
        result = xd - xd2;
        wynik.innerHTML = result;
    }
    if (multiply == true){
        result = xd * xd2;
        wynik.innerHTML = result;
    }
    if (divide == true){
        result = xd / xd2;
        wynik.innerHTML = result;
    }
});


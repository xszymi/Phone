const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', ()=>{
        let lockscreen = document.getElementById('lockscreen');
        let mainscreen = document.getElementById('mainscreen');
        let calculator = document.getElementById('calculator');
        let background = document.getElementById('background');
        let homebutton = document.getElementById('homebutton');
        let icons = document.getElementById('icons');
        homebutton.style.visibility = 'visible';
        lockscreen.style.visibility = 'hidden';
        mainscreen.style.visibility = 'visible';
        background.src="img/background2.png";
        console.log('działa')
        
    });
    buttons[1].addEventListener('click', ()=>{
        console.log('Kalkulator działa');
        calculator.style.visibility = 'visible';
        icons.style.visibility = 'hidden';
        background.style.visibility = 'hidden';
    });
    buttons[2].addEventListener('click', ()=>{
        console.log('Galeria działa') 
    });
    buttons[3].addEventListener('click', ()=>{
        console.log('Ustawienia działa') 
    });

    
    
    buttons[24].addEventListener('click', ()=>{
        calculator.style.visibility = 'hidden';
        icons.style.visibility = 'visible';
        background.style.visibility = 'visible';
    });

    let intervalID;
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    sendMessage()
    repeatEverySecond()
        
    function repeatEverySecond() {
        intervalID = setInterval(sendMessage, 1000);
    }

    function sendMessage() {
        const d = new Date();
        let month = d.getMonth();
        let day = days[d.getDay()];
        let day2 = d.getDate();
        let hour = d.getHours();
        let minute = d.getMinutes();
        month = month + 1;
        clock.innerHTML = hour+':'+minute;
        sclock.innerHTML = hour+':'+minute;
        date.innerHTML = day+' '+day2+'.'+month;
    }
    
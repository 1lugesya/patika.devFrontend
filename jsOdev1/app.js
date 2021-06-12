
    let myName = prompt("Lütfen isminizi giriniz..");
    document.querySelector('#myName').innerHTML = myName;
    

    window.onload = startTime;

function startTime () {

        let myClock = document.querySelector('#myClock')

        let now = new Date ();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();


        let day; /* Günleri tanımlayan sayılara türkçe karşılığı tanımlanır */
            if (now.getDay() == 1) {
                day = "Pazartesi";
            } 
            else if (now.getDay() == 2) {
                day = "Salı";
            }
            else if (now.getDay() == 3) {
                day = "Çarşamba";
            }
            else if (now.getDay() == 4) {
                day = "Perşembe";
            }
            else if (now.getDay() == 5) {
                day = "Cuma";
            }
            else if (now.getDay() == 6) {
                day = "Cumartesi";
            }
            else if(now.getDay() == 7) {
                day = "Pazar";
            };

            //9'a kadar olan rakamların başına 0 getirilir
            if(seconds < 10){
                seconds =`0${seconds}`;
            }
            if(minutes < 10){
                minutes = `0${minutes}`;
            }
            if(hours < 10){
                hours = `0${hours}`;
            }


        date = `${day} günü ${hours}:${minutes}:${seconds};`



        t = setTimeout('startTime()',1000);

        document.querySelector("#myClock").innerHTML = date

    }; 


    








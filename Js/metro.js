//Feladat 1
let Metro = [];
let AVG = 0;
//Feladat2
function Random(Metro){
    for(let i= 0; i<12; i++){
        Metro[i] = Math.floor((Math.random()*140)+850); //990-850=140
    }
    return Metro;
}
//Feladat3
function Kiir(){
    let sv=0;
    for(let i=0; i<Metro.length; i++){
        console.log("7 óra "+sv+" perc, utaslétszám "+Metro[i]+" fő");
        sv= sv+5;
    }
}
//feladat4
function Atlag(AVG){
   let SUM = 0;
   for(let i=0; i<Metro.length; i++){
        SUM = SUM + Metro[i];
   }
   AVG = SUM / Metro.length;
   console.log("Az átlagos utasszám: "+AVG);
}
//Feladat5
function MAX(){
    let max = 1;
    for(let i=0; i<Metro.length; i++){
        if(Metro[i]>Metro[max]){
            max = i;
        }
    }
    let sv = max*5;
    console.log("A legzsúfoltabb szerelvény 7 óra "+sv+"indult, "+Metro[max]+ "utassal")
}
//feladat 6
function Eldont(){
    let VanE = false;
    let i = 0;
    while(i<Metro.length && VanE==false){
        if(Metro[i]>975){
            VanE=true;
        }
        i++;
    }
    //kevesebb pontért
   /* for(i=0; i<Metro.length; i++){
        if(Metro[i]>975){
            VanE=true;
        } 
    }*/
    if(VanE==true){
        console.log("Igen, van ilyen szerelvény");
    } else {
        console.log("Nem, nincs ilyen szerelvény");
    }
}
//Feladat 7
function Megszamolas(){
    let Darab = 0;
    for(let i=0; i<Metro.length; i++){
        if(Metro[i]>900){
            Darab = Darab+1;
        }
    }
    console.log("Az utasok szerint "+Darab+" túlzsúfolt indulás volt.")
}
Random(Metro);
Kiir();
Atlag(AVG);
MAX();
Eldont();
Megszamolas();
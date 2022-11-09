let Terulet = [];

function TeruletRandom(Terulet){
    for(let i=0; i<20; i++){
        Terulet[i] = Math.floor((Math.random()*1901)+100);
    }
    return Terulet;
}
function TeruletKiir(){
    let sorszam = 1;
    for(let i=0; i<Terulet.length; i++){
        console.log(sorszam,". terület magassága: ",Terulet[i]," méter");
        sorszam++;
    }
}
function SiksagAtlag(){
    let DB = 0;
    let SUM = 0;
    for(let i=0; i<Terulet.length; i++){
        if(Terulet[i]<201){
            DB = DB+ 1;
            SUM = SUM + Terulet[i];
        }
    }
    if(SUM == 0){
        console.log("Nincs síkság");
    } else {
        console.log("A síkságok átlagmagassága: ",SUM/DB);
    }
    
}
function DombMin(){
    let Min = Terulet[0];
    for(let i=1; i<Terulet.length; i++){
        if(Terulet[i]>=200 & Terulet[i]<=500 ){
                if(Min > Terulet[i]){
                    Min = Terulet[i];
                }
        }
    }
    console.log("A legalacsonyabb domb",Min,"méter magas.");
}
function HegyMax(){
    let Max = Terulet[0];
    for(let i=1; i<Terulet.length; i++){
        if(Terulet[i]>500){
            if(Max<Terulet[i])
            { 
                Max = Terulet[i];
            }
        }
    }
    console.log("A vizsgált területek közül a legmagasabb",Max,"méter.")
}
function HegyEldont(){
    let VanE = false;
    let i = 0;
    while(i<Terulet.length & VanE!=true){
        if(Terulet[i]>1500){
            VanE = true;
        }
        i++;
    }
    if(VanE == true){
        console.log("Igen, van 1500 méternél nagyobb terület.");
    }else{
        console.log("Nem, nincs 1500 méternél nagyobb terület.");
    }
}

function Top1500(){
    // Elsőre csak az értékeket válogatjuk ki. Elsőre csak tömb nélkül
    for(let i=0; i<Terulet.length; i++){
        if(Terulet[i]>1500){
            console.log(i,"terület",Terulet[i],"méter");
        }
    }
}

function HegyDarab(){
    let db=0;
    for(let i=0; i<Terulet.length; i++){
        if(Terulet[i]>500){
            db++;
        }
    }
    console.log(db,"darab hegy van");
}

TeruletRandom(Terulet);
TeruletKiir();
SiksagAtlag();
HegyDarab();
DombMin();
HegyMax();
HegyEldont();
Top1500();
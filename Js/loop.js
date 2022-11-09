/// For - while - do while

//Irasd ki a számokat 1-től 10-ig
let Szam=1;
for(let i = 0; i < 10; i++){
    console.log(Szam);
    Szam = Szam+1;
}

//While ciklus
//Irasd ki a páros számokat 1-től 10-ig
let i=1;
while(i<11){
    if(i%2 ==0){
        console.log("Ez páros szám",i);
    }
    i++;
}

//do while 
//Irasd ki a páratlan számokat 1-től 10-ig
i=1;
do{
    if(i%2 != 0){
        console.log("Ez páratlan szám",i)   
    }
    i++;
}
while(i<11)



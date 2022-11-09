/// Adja meg a Tömbben lévő számok összegét [5,96,45,7,66]

let Szamok = [5,96,45,7,66];   //Ez a tömböd
let SUM = 0;                   //Ebbe összegzel
for(let i=0; i<Szamok.length; i++){
    SUM = SUM+Szamok[i];
}

console.log("Az összeg: ",SUM);

///Adja meg a Tömbben lévő páros számok összegét 
// A tömb megvan a 3. sorban
let S = 0;
for(let i=0; i<Szamok.length; i++){
    if(Szamok[i]%2 == 0 ){
        S = S+Szamok[i];
    }
}

console.log("A páros számok összege: ",S);

///     MEGSZÁMOLÁS TÉTEL :)
// Add meg hány darab páratlan szám van a Tömbben
// A tömb megvan a 3. sorban

let DB = 0;
for(let i=0; i<Szamok.length; i++){
    if(Szamok[i]%2 != 0){
        DB = DB+1;
        //DB++;
    }
}

console.log(DB," darab páros szám van.")
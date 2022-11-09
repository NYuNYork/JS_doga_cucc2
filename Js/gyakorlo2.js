//Keresés tétel  (Első T tult adja vissza 
//+ mindig feltételezzük, hogy van olyan T tul elem.)
// Tomb ---> X [99,5,77,4,1]
//1.  Add meg az első páros számot

let X = [99,40,77,4,1];

let i=0;
while(i<X.length & X[i]%2 != 0){
    i=i+1;  //Ha nem páros növeljük 1-el az i-t
}
if(i<X.length){
    //Találtál keresett elemet
    console.log("A páros elem a tömbben: ",X[i]);
    //itt a kiválasztás is megírható
}else{
    //Ha mégsincs amit feltételeztünk
    console.log("Nincs páros elem");
}


//Kiválogatás / Szétválogatás ---> egy T tul alapján egy új Tömbbe válogatjuk le az elemeket.
// Az Y tömbbe válogasd ki a páratlan számokat.
let Y = [];
let Z = [];   //Szétválogatáshoz Tömb, páros számnak

let Szamlalo = 0;   //Másik tömbhöz szükséges
let Szamlalo2 = 0;  //Harmadik tömbhöz szükséges
for(let i=0; i<X.length; i++){
    if(X[i]%2 != 0){
        Y[Szamlalo] = X[i];
        Szamlalo=Szamlalo+1;
    }
    else{
        Z[Szamlalo2] = X[i];
        Szamlalo2=Szamlalo2+1;
    }
}
// Ki kell írni az Y tömb tartalmát - "hogyan írunk ki egy tömb példa"
console.log("Páratlan számok - Y tömb");
for(let i=0; i<Y.length; i++){
    console.log("A(z) "+i+". elem: "+Y[i]);
}
// Ki kell írni a Z tömb tartalmát
console.log("Páros számok - Z tömb");
for(let i=0; i<Z.length; i++){
    console.log("A(z) "+i+". elem: "+Z[i]);
}

// Tömb: 57, 23, 5, 77, 201
// 1.) Add meg a páratlan számok összegét
// 2.) Add meg hányadik a legkisebb szám
// 3.) Add meg melyik a legnagyobb szám (értéke kell!)

let tomb = [57,31,5,31,201];

//1.
let SUM = 0;

for(let i=0; i<tomb.length; i++){
    if(tomb[i]%2 != 0){
        SUM = SUM+tomb[i];
    }
}
console.log("Páratlan számok összege: ",SUM);

//2.

let MIN = 0;
for(let i=1;i<tomb.length; i++){
    if(tomb[i]<tomb[MIN]){
        MIN = i;
    }
}
console.log("A legkisebb elem a ",MIN,". helyen van");

//3.

let MAX=tomb[0];
for(let i=1; i<tomb.length; i++){
    if(tomb[i]>MAX){
        MAX = tomb[i];
    }
}
console.log("A legnagyobb elem: ",MAX);

//Eldöntés tétel
//Döntsd el, hogy van-e páros szám

let VAN = 0;  // Van kezdetben hamis!
let i=0;

while(i<tomb.length & VAN==0){   //& hogy minen ág igazba menjen
        if(tomb[i]%2 == 0){
        VAN = 1;   
    }
    i++;
}
if(VAN == 0){
    console.log("Nincs páros szám");
}
else {
    console.log("Van páros szám");
}

//Röpi: megszámálás, összegzés, eldöntés, MIN, MAX

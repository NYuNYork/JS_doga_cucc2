//        MAX kiválasztás
// Add meg a tömbben lévő számok maximumát [-6, -9, -2, -15, -7]

let X = [-6, -9, -2, -15, -7];
let MAX = X[0];

for(let i=1; i<X.length; i++){
    if(X[i]>MAX){
        MAX = X[i];
    }
}

console.log("Számok maximuma: ",MAX);

// "szebb verzió" :)

let max = 0;                        // tételben max = 1 itt nulla
for(let i=1; i<X.length; i++){      // tételben i=2 itt egy
    if(X[i]>X[max]){
        max = i;
    }
}

console.log("A számok maximuma: ",X[max]);  
//kiiratásnál a tömb max-ik elemét irod ki

/// MIN kiválasztás

let MIN = X[0];

for(i=1; i<X.length; i++){
    if(X[i]<MIN){
        MIN = X[i];
    }
}
console.log("A minimum: ",MIN);

// "Szebb verzió" :)

let min =0;

for(i=1; i<X.length; i++){
    if(X[i]<X[min]){
        min = i;            // Még mindig a helyét tároljuk itt
    }
}
console.log("A minimum: ",X[min]);
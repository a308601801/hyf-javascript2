//4
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let arr = Array.from({length: stopIndex - startIndex +1}, (v,k) => k+startIndex);
    console.log(arr);

    arr.map(
        x => 
        {
            if (x%3 == 0)  threeCallback();
            if (x%5 == 0)  fiveCallback();
            if (x%3 == 0 && x%5 == 0 ) {
                threeCallback();
                fiveCallback();
            }
            console.log('end')
        }
    )
    
    
}
threeFive(10, 15, sayThree, sayFive);

function sayThree() {
    console.log(3)
}
function sayFive() {
    console.log(5)
}

//5
let createBase = (x => f = (y => console.log(x+y)));
let addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27


//bonus
let sarry = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let unique = [...new Set(sarry)]; 
console.log(unique)
// Write your solution here!

//Instruction 1:

const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);


//Instruction 2:

function destructivelyAppendCat () {
    
    cats.push("Ralph");
    
    return cats;
}

console.log(destructivelyAppendCat());

cats.length = 0;
console.log(cats);

cats.push("Milo", "Otis", "Garfield");
console.log(cats);


//Instruction 3:

function destructivelyPrependCat () {

    cats.unshift("Bob");

    return cats;
}

console.log(destructivelyPrependCat());

cats.length = 0;
console.log(cats);

cats.push("Milo", "Otis", "Garfield");
console.log(cats);


//Instruction 4:

function destructivelyRemoveLastCat () {

    cats.pop();

    return cats;
}

console.log(destructivelyRemoveLastCat());

cats.length = 0;
console.log(cats);

cats.push("Milo", "Otis", "Garfield");
console.log(cats);


//Instruction 5:

function destructivelyRemoveFirstCat () {

    cats.shift();

    return cats;
}

console.log(destructivelyRemoveFirstCat());

cats.length = 0;
console.log(cats);

cats.push("Milo", "Otis", "Garfield");
console.log(cats);


//Instruction 6:

function appendCat () {

    const newCatsA = [...cats, "Broom"];

    return newCatsA;
}

console.log(appendCat());


//Instruction 7;

function prependCat () {

    const newCatsB = ["Arnold",...cats];

    return newCatsB;
}

console.log(prependCat());


//Instruction 8:

function removeLastCat () {

    const newCatsC = cats.slice(0, cats.length-1);

    return newCatsC;
}

console.log(removeLastCat());


//Instruction 9:

function removeFirstCat () {

    const newCatsD = cats.slice(1);

    return newCatsD;
}

console.log(removeFirstCat());










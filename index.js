// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);


function destructivelyAppendCat(name) {
    cats.push("Ralph");
}


function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop(2)
}


function destructivelyRemoveFirstCat(name) {
    cats.shift(0)
}

function  appendCat(name) {
    const newCats=[...cats, name];
    return newCats 
}


function prependCat(name) {
    const  newCats=[name, ...cats];
    return newCats
}

function  removeLastCat(name) {
 const newCats = cats.slice(0,cats.length -1);
 return newCats
}

function removeFirstCat(name) {
    const newCats=cats.slice(1);
    return newCats
}

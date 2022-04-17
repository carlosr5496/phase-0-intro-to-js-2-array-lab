const cats = ["Milo", "Otis", "Garfield"];




function destructivelyAppendCat() {
    return cats.push("Ralph");
}

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}


function destructivelyRemoveFirstCat() {
    return cats.shift()
}


function appendCat(){
    const catsSpread = [...cats, "Broom"]
    return catsSpread
}


function prependCat() {
    const catSpread = ["Arnold", ...cats];
    return catSpread
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1,3)
}
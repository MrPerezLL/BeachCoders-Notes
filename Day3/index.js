// alert("test")

console.log(-1 !== -1 || 10 === 10)

console.log(10/2 === 5 || null )

console.log(0 || undefined)



let age=65;
if(age<6 || age>=65) {
    console.log("you get in for free")
} else{
    console.log("children tickets $5, adult tickets $10")
}

let choice="beefJerky";
if( choice === "cheezIts" || choice === "beefJerky" || choice === "fatSalls"){
    console.log("good choice")
}else{
    console.log("lets pick something else")
}

console.log(!47)

console.log(!true)

console.log(!0)

console.log(!"")

console.log(!(0 === 0))

console.log(!(100<=101))

console.log(100<=101 && 3===4)

let x=13
console.log(x<3 && x>1)


// let emoji="happy face"
// switch(emoji){
//     case"happy face":
//     // mus use colon here
//         console.log("yellow")
//         break;
//     case"sad face":
//         console.log("yellow")
//         break
//     case "eggplant":
//         console.log("purple")
//         break
//     case "heart":
//         console.log("red")
//         break
//     case"lips":
//         console.log("red")
//         break
// }


let emoji="heart"
switch(emoji){
    case"happy face":
    // mus use colon here
    case"sad face":
        console.log("yellow")
        break
    case "eggplant":
        console.log("purple")
        break
    case "heart":
    case"lips":
        console.log("red")
        break
}
// works best if youre looking for one thing as in blood donor ex




let symbol="shamrock";
if(symbol === "shamrock"){
    console.log("lucky")
}else{
    console.log("bad luck")
}

symbol === "shamrock" ?  console.log("lucky"): console.log("bad luck")
// question mark colon syntax ? :


let userStat="offline"
let color=null;
if( userStat === "offline"){
    color="red"
}else{
    color="green"
}

let shoppingList=["cheezIts","pretzels","beer", "nondairychips", "ice cream"]
// [] is array
console.log(shoppingList)

let luckyNumbers=[12, 8, 16]
console.log(luckyNumbers)

let myStuff=[16, "shamrock", true, NaN]
console.log(myStuff)


console.log(shoppingList[2])
// brackets after array works as a selector


console.log(shoppingList[shoppingList.length-1])
// -1 from array array gives u last item in list


shoppingList.push("bananas")
console.log(shoppingList)


shoppingList.pop()
console.log(shoppingList)

// push and pop for last item of array


shoppingList.unshift("tomatos")
console.log(shoppingList)

shoppingList.shift()
console.log(shoppingList)

// shift and unshift for the first item in array


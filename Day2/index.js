// let score1=5
// let score2=2
// console.log(score1+score2)
// let score3=2
// score3=score3+10
// console.log(score3)
// score3=5
// console.log(score3)
// score3+=10
// console.log(score3)
// score3-=7.9
// console.log(score3)
// let bonusMult=3
// score3+=bonusMult
// console.log(score3+=bonusMult)

let counter=0

counter++
counter--
counter-=3
// let can change and const cannot change
// const age=17
// console.log(age++)


let movieReview=42
movieReview+2
console.log(movieReview)

// doesnt change without the ++ or =

const currentInvestment=5.5
// currentInvestment=8
// console.log(currentInvestment=8)

let maxFunds=100
maxFunds+=5
maxFunds--
console.log(maxFunds)

// boolean true or false

let isLoggedIn=true
let gameOver=false
gameOver=true
console.log(gameOver)


// strings notees use double quotes or single quotes or back tics

let color="red"
let snack='sushi'
let snack2=`cheeezIts`
let movie="Weekend At Bernie's"
console.log(movie)

let num=`87`
console.log(typeof(num))
let trueNum=87
console.log(typeof(trueNum))
let firstName="Mr."
let lastName=`Potatoe Head`
let fullName=firstName+' '+lastName+"!"
console.log(fullName)

let trueName=`${firstName} ${lastName}!`
console.log(trueName)

// back ticks and dollar sign curly brackets for faster way

console.log(`hi`+1)
// valid javascript but messy

console.log(`hello`.length)

let restaurant=`Fat Salls`

// index starts at 0 one less than actual length

let gibberish=`dnvosanffljajsfsdkafieoriwom`
console.log(gibberish[gibberish.length-1])

// inside square bracket syntax when use -1 youre asking fo rthe last index in the value gibberish[length.value-1] equals m

console.log(gibberish.length)


let sentence=`i am hangry`
sentence=sentence.toUpperCase()
console.log(sentence.toUpperCase());

// add () after a function or method to execute

let colors="    purple     "
console.log(colors.toUpperCase().trim())

restaurant.indexOf(`Fat`)
console.log(restaurant.indexOf(`lls`))


let song=`twinkle twinkle`
console.log(song.slice(0,5))

// the end cut is not included..first cut included, second not 
// returns a new string dowsnt modify it


let cash=`$100`
console.log(cash.slice(1))

let paragraph=`i am tired`
console.log(paragraph.replace(`tired`,`hangry`))

// let ages=`5`+`4`
console.log(`5`+`4`)

// *in the console white is a string and purple is a number


let song2=`london calling`

console.log(song2.toUpperCase())

let userInput=`   GREG@fakemail.com`
let cleanInputs=userInput.trim().toLowerCase()

u
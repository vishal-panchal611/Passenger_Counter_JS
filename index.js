// // document.getElementById("count-el").innerText = 5 
// let count = 0 + 74
// console.log(count)

// let age 
// age = 25
// console.log(age)

// let myAge = 5
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// function increment()
// {
//     console.log("button is clicked")
// }

// function fortyTwo ()
// {
//     console.log("42")
// }

// fortyTwo()

// let lap1 = 34
// let lap2 = 38
// let lap3 = 37
// let total = 0
// function lapTimeLog() 
// {
//     total = lap1 + lap2 + lap3
//     console.log(total)    
// }

// lapTimeLog()

//counter app
let saveEl = document.getElementById("save-el") 
let count = 0
let countEl = document.getElementById("count-el") 
console.log(countEl);


function increment()
{
    
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save()
{
    let savvee = count + " - "
    
    saveEl.textContent += savvee; 
    console.log(count);
    countEl.textContent = 0
    count = 0

}



// let name = "vishal"
// let greeting ="Hi, my name is "
// let myGreeting =  greeting + name;
// console.log(myGreeting);

// let name = "Vishal"
// let greeting = "Wekcome back "
// let greetingFinal = document.getElementById("welcome")
// greetingFinal.innerText = greeting + name

// greetingFinal.innerText += "🙌" 

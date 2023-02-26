// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruits = [
        {
            "name":"Apple",
            "color":"Red",
            "pricePerKg":"170"
        },

        {
            "name":"Banana",
            "color":"Yellow",
            "pricePerKg":"85"
        },

        {
            "name":"Orange",
            "color":"Orange",
            "pricePerKg":"130"
        },
        
        {
            "name":"Green Peas",
            "color":"Green",
            "pricePerKg":"110"
        },

        {
            "name":"Blueberries",
            "color":"Blue",
            "pricePerKg":"130"
        }

]

// to print the given fruit
const search = what => fruits.find(element => element.name.toLowerCase() === what.toLowerCase())

var found = search("banana") //getting the name of a fruit to be retrived
// console.log(found)

if (found)
    {
        console.log(`Color of ${found.name} is ${found.color} and Price per kg is ${found.pricePerKg}`)
        console.log('\n')
    }
    else
    {
        console.log('You fruit is not on our list')
        console.log('\n')
    }

// to get all the fruits
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index]
//     console.log(`Fruit Name: ${element.name}`)
//     console.log(`Color: ${element.color}`)
//     console.log(`Price Per KG: ${element.pricePerKg}`)
//     console.log('\n')
// }

// console.table(fruits)
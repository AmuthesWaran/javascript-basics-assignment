// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let students = [
    {
        "name": "student1",
        "stream":"A",
        "grammer":80,
        "physics":85
    },

    {
        "name": "student2",
        "stream":"A",
        "grammer":67,
        "physics":78
    },

    {
        "name": "student3",
        "stream":"A",
        "grammer":90,
        "physics":95
    },

    {
        "name": "student4",
        "stream":"A",
        "grammer":56,
        "physics":74
    },

    {
        "name": "student5",
        "stream":"A",
        "grammer":72,
        "physics":80
    },

    {
        "name": "student6",
        "stream":"B",
        "grammer":48,
        "accounts":40
    },

    {
        "name": "student7",
        "stream":"B",
        "grammer":66,
        "accounts":58
    },

    {
        "name": "student8",
        "stream":"B",
        "grammer":90,
        "accounts":95
    },


    {
        "name": "student9",
        "stream":"B",
        "grammer":98,
        "accounts":75
    },

    {
        "name": "student10",
        "stream":"B",
        "grammer":65,
        "accounts":70,
        
    }
]


console.log("----------Result----------");
for (let index = 0; index < students.length; index++) {
    const element = students[index]
    console.log(`Name: ${element.name}`)
    
    if (element.stream == "A") {
    var percentage =  (element.grammer + element.physics)/2
            console.log(`Grammer: ${element.grammer}`)
            console.log(`Physics: ${element.physics}`)
            console.log(`Percentage: ${percentage}%`);
            console.log("\n");
    } 
    else {
        var percentage =  (element.grammer + element.accounts)/2
        console.log(`Grammer: ${element.grammer}`)
        console.log(`Accounts: ${element.accounts}`)
        console.log(`Percentage: ${percentage}%`);
        console.log('\n');
    }
    
}

// console.table(students)
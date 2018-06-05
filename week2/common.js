//1
let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(num => num % 2 !==0)
    .map(num => num *2);

console.log(newNumbers)

//2
let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);

let tasksName = tasks.map(obj => obj.name)
console.log(tasksName)

let tkTimeHour = tasks.map(obj => {
    obj.duration /= 60;
    return obj;
})
console.log(tkTimeHour)

let tkTimeFilt = tkTimeHour.filter(tk => tk.duration<2)
console.log(tkTimeFilt)

let spend = tkTimeFilt.map(tk => tk.duration *8).reduce((x,y) => x+y).toFixes(2);
console.log('spend : ' + spend + '€')

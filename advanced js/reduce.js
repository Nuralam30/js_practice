
let nums = [23, 24, 25, 35, 57];

const total = nums.reduce( (sum, num) => sum + num , 0)

console.log(total)

// reduce in object

let friends = [
    {name: 'Babul', salary : 2000},
    {name: 'Abul', salary : 3000},
    {name: 'Mojid', salary : 2300},
    {name: 'Faruk', salary : 2600},
    {name: 'Kamal', salary : 2800}
];

const totalSalary = friends.reduce( (sum, friends) => {
    return sum + friends.salary;
}, 0);

console.log(totalSalary)
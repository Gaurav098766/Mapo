const carMakers:string[] = ['ford','toyata','chevy'];
const dates = [new Date(),new Date()];

// 2D Array of strings
const carsByMake:string[][] = [
    ['f150'],['cornelius'],['camaro']
]


// Help with inference when extracting values
const car=  carMakers[0];
const myCar = carMakers.pop();

// Preventing incompatible vlaues
carMakers.push(100);

// Help with 'map'
carMakers.map((car:string): string=>{
    return car.toLowerCase();
})

// Flexible types
const impdates:(Date | string)[]= [new Date()];
impdates.push('afffadfa');
impdates.push(new Date());
impdates.push(10);
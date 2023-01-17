let apples: number = 5;
let speed: string ='fast';
let hasName : boolean = true;
let nothingmuch: null=null;
let nothing: undefined=undefined;

// build in objects
let now : Date = new Date();

// Array
let colors:string[]=['red','green','blue'];
let myNumbers:number[]=[1,2,4,5];
let truths:boolean[]=[true,true,false];


//classes
class Car{

}
let car:Car = new Car();

//object literal
let point: {x: number; y:number} = {
    x:1,
    y:20
} 

//Function
const lognumber :(i:number)=> void = (i:number) =>{
    console.log(i);
}

// When to use Annotations 

// 1) Function that returns thr 'any' type
const json = '{"x":10,"y":20}';
const coordinates:{x:number;y:number} = JSON.parse(json);
console.log(coordinates); // {x:10,y:20};

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red','green','blue'];
let foundWord:boolean;

for(let i=0;i<words.length;i++){
    if(words[i]=='green')
        foundWord=true;
}

// Object declaration
const profile ={
    name:'alex',
    age:20,
    coords:{
        lat:0,
        lng: 15
    },
    // function declaration inside an object 
    setAge(age:number):void{
        this.age=age;
    }
};

//Calling proprty of objects
const {age,name}: {age:number;name:string} =profile; 
const {
    coords:{lat,lng}
}:{coords:{lat:number,lng:number}}=profile 
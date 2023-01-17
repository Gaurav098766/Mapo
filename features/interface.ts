//Declaring Interface
interface Reportable{
    // name:string,
    // year: Date,
    // broken:boolean,
    summary():string
}
const oldCivic ={
    name: 'civic',
    year: new Date(),
    broken:true,
    summary(){
        return (`Name:${this.name}`) 
    }
};

const Drink = {
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`;
    }
}
// Here we not used the direct annotations since it can be tedious
// therefore we came up with an idea of Interface(acts like a golabl declaration of data type)
const printSummary =(item:Reportable):void=>{
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(Drink)
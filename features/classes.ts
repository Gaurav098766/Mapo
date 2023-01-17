class Vehicle{
    constructor(public color:string){}

    protected honk():void{
        console.log('Beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Car extends Vehicle{ //Inheritance
    constructor(public wheels:number,color:string){
        super(color);
    }
    private drive(): void{
        console.log('vroom')// Overwritting the drive function
    }

    startDrivingProcess():void{
        this.drive();
    }
}

const carr = new Car(4,'red');
carr.startDrivingProcess()

// Public: can use that fucntion anywhere without any restriction
// Private: Can only use that functon inside that Class
// Protected: Can only use that fuction inside the same class or the childclasses/subclasses.


import { faker } from '@faker-js/faker'
import { Mappbale } from './CustomMap';

export class User implements Mappbale{
    // here we are representing name and location as an object but we not defining it.
    name:string;
    location:{
        lat:number;
        lng:number;
    };


    constructor(){
        // here we are defining name as an object   
        this.name = faker.name.firstName();
        // here we are defining location as an object + inside properties lng and lng
        this.location = { 
            lat: parseFloat(faker.address.latitude()), // parseFloat is used to convert a string into a number
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `User Name: ${this.name}`;
    }
}
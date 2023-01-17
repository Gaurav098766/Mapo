import { faker } from '@faker-js/faker'
import { Mappbale } from './CustomMap';


export class Company implements Mappbale{
    cname:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng: number;
    };

    constructor(){
        this.cname = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `
            <div>
                <h1>Company Name: ${this.cname}</h1>
                <h3>Catchphrase : ${this.catchPhrase}</h3>
            </div>
        `;
    }
}
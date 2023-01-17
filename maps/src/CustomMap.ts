// we are making this so that the other engineers could not able to see 
// the contents of this class
//there are many google maps function which the enh=gineers can perform but it will crash our app
// because we have not implemented all the fucntionality 
// so we are here making our own custom map properties
// i.e limiting the porperties provided by the google maps



//INSTRUCTION TO EVERY OTHER CLASS ON HOW THEY CAN BE ARGUMENT TO 'ADDMARKER'
export interface Mappbale{
    location:{
        lat: number;
        lng: number;
    };
    markerContent():string;
}    


export class CustomMap{
    // private modifier so that it cant be referenced outside our class
    private googleMap:google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId)!,{
            zoom:1,
            center:{
                lat:51.51697,
                lng:-0.14650
            }
        });
    }

    // addding 2 seperate methods

    // function:1
    // addUserMarker(user:User):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     });
    // }

    // function:2
    // addCompanyMarker(company:Company):void{

    // }

    // WE CANT JUST EVERTIME NEW FUNCTION IF WE WANT TO ADD SOMETHING SO WHAT WE CAN DO IS

    // addMarker(mappbale:User | Company):void{
    //     new google.maps.Marker({      // REMEMBER ONLY COMMON PROPERTIES BETWEEN THE USER,COMPANY WILL BE DEFINED
    //         map:this.googleMap,               // HERE WE HAVE ONE DOWNSIDE THAT IF SUPPOSE WE HAVE AROUND 30 METHODS ,SO WILL USE OR OPERATOR 30 TIMES WHICH IS NOT EFFICIENT.
    //         position:{
    //             lat: mappbale.location.lat,
    //             lng: mappbale.location.lng
    //         }
    //     });
    // }

    addMarker(mappbale:Mappbale):void{
        const marker = new google.maps.Marker({      
            map:this.googleMap,               
            position:{
                lat: mappbale.location.lat,
                lng: mappbale.location.lng
            }
        });

        marker.addListener('click',() =>{
            const infoWindow = new google.maps.InfoWindow({
                content:mappbale.markerContent()
            })
            infoWindow.open(this.googleMap,marker);
        })
    }
}
const drink={
    color:'brown',
    carbonated:true,
    sugar:40
};

// this is an array because if swap brown with 40 and 40 with brown then order lose its significance  
const pepsi= ['brown',true,40];


// To turn into a tuple add annotations to it
const pepsii:[string,boolean,number] = ['brown',true,40];



// everytime mnetioning data types can be tiresome therefore we will use type aliasing
type Drink = [string,boolean,number];
const tea :Drink = ['brown',false,0];

//Tuples Applications

const carSpecs:[number,string]=[400,'3354'];
const carStats = {
    horsepower: 400,
    weight: '3354'
};
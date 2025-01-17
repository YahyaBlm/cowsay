import "dotenv/config";


import  cowsay  from  "cowsay" ;

console.log ( cowsay.say ( { 
    text : `I am ${process.env.NAME}, wilder in ${process.env.CAMPUS}` , 
    e : "oO" , 
    T : "U " 
} ) ) ;
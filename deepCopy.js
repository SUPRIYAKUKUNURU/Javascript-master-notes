let original ={
    name :"Supriya",
    address:{city:"Hyderabad"}
};

//let deepCopy= JSON.stringify(original) = converts objects into String
                // JSON.parse(original) = converts string into Object
let deepCopy=JSON.parse(JSON.stringify(original));
original.address.city="Bangalore";
console.log(deepCopy.address.city);

// we have changed the original but the output is not changed this is 
// beacause their memory reference is different.


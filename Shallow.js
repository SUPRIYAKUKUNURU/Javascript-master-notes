let original ={
    Name:"Supriya",
    address:{city:"Hyderbad"},
}
let shallowCopy = Object.assign({},original)
// let shallowCopy = {...original};
original.address.city="Bagalore";
console.log(Name);
console.log(shallowCopy.address.city);

// The addrees whenever we changed in original automatically address changed in shallowCopy
// this is because their memory reference is same .Shallow effects the parent node
// output changed
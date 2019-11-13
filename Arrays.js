const array = [1,5,3,6,4,2,7,9,8];

console.log(array);
console.log(array.sort()); //sort the array

array.forEach(a => {   //with forEach <<<<<<<<<<<<<<<<<<<<<<<<<
    console.log(a * 2);
});

const x = array.map(a => { //with return <<<<<<<<<<<<<<<<<<<<<<<<<
    return a * 3;
});
    console.log(x);

// find <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const myNum = x.find( i => i==13);
    console.log("My number is " + myNum);

// filter <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const selNum = x.filter( i => i > 15 && i < 20);
    console.log(selNum);









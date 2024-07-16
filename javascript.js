// 1.Array creation
let arr=[1,2,3,4,5];
document.write(arr);

// 2. Array manipulation

let arr=[11,22,33,44,55,66];
arr.pop()
console.log(arr);
arr.push(77)
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(99)
console.log(arr);

// 3.array searching

let arr=['Apple','Jackfruit','Mango','pineapple'];
console.log("indexOf "+arr.indexOf('Mango'));
let arr1=[1,2,3,4,5,6,7,8,9,10]
console.log("find "+arr1.find(x=>x%2==0));
console.log("includes "+arr1.includes(6));

// 4.Array filter

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log("filter- "+arr.filter(x=>x%2==1));

// 5.Array map

let arr=[1,2,3,4,5,6]
console.log("map- "+arr.map(x=>x*x));

// 6.Array sorting

let arr=[22,1,34,65,87,27,99];
console.log("Sorting -"+arr.sort());

let arr1=[1,2,3,4,5,6,7];
console.log("reverse- "+arr1.reverse());

// 7.destruction

let arr=[1,2,3,4,5,6,7]
let [a,b,c,d,e,f,g]=arr;
console.log("Array variables: [a,b,c,d,e,f,g]\n"+"Array values: "+arr);
console.log("Destruction:d- "+d);

// 8.spreading

let arr=[1,2,3,4,5];
console.log("Spreading - "+[...arr,6,7,8]);



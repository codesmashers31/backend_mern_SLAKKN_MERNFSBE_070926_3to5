let arr = [222,223,2,2,5,8,89,22]
let largest = arr[0]

for(let i =1;i<arr.length;i++){
    if(largest<arr[i]){
        largest = arr[i]
    }
}

console.log({largest});

// let arr = [222,3,6]
// let largest =0
// let second = arr[1]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>lo){
//         second = largest 
//         largest = arr[i] //
//     }
//     if(6<222 && 6>222){  //arr[i]<largest && arr[i]>second
//         second = arr[i]   
//     }
// }

// console.log({largest});
// console.log({second});

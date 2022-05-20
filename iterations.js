//var arr = ["yellow", "red", "green", "yellow", "red", "green"];

//for(let i=0; i < arr.length; i++){
  //  console.log(arr[i]);
//}
//console.log("done");

var arr1 = ["yellow","yellow", "red", "green", "yellow", "red", "green"];

for(let i = arr1.length-1; i >= 0;i--)
{
    console.log(arr1[i]);
}
let arr3 = [1,2,3,4,5,34,54,65];
arr3.map((index,value) =>
{
    console.log(value);
});

var arr4 = arr3.filter((value,index) =>{
    return value<10;
});
console.log(arr4);
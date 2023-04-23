
 //a)print odd numbers in an array
       
/* (function (a){
    for(var i=0;i<a.length;i++){          // iife function
        if(a[i]%2!=0){
            console.log(a[i])
        }
    }
})([1,2,3,4,5])*/

 /* let num=(arr)=>{
    for(var i=0;i<arr.length;i++){        //Arrow function
        if(arr[i]%2!=0){
            console.log(arr[i]);
    }
}
}
num([1,2,3,4,5]);*/


/*
let num=function (arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){                //Anonymous function
            console.log(arr[i])
        }
    }
}
num([1,2,3,4,5,12,15,23]); */
//******************************************************************/

//b)convert all string to title caps in a string array

/* (function (out){
 out=out.split(" ");
for (let i=0;i<out.length;i++){
    out[i]=out[i].charAt(0).toUpperCase()+out[i].slice(1);     //iife
}
 console.log(out.join(" "));
})("have a nice day");*/


/* let num=function (out){
     out=out.split(" ");
   for (let i=0;i<out.length;i++){
       out[i]=out[i].charAt(0).toUpperCase()+out[i].slice(1);     ////Anonymous
   }
    console.log(out.join(" "));
   }
   num("have a nice day"); */

 
   /* let num=(out)=>{
    out=out.split(" ");
  for (let i=0;i<out.length;i++){
      out[i]=out[i].charAt(0).toUpperCase()+out[i].slice(1);       ////Arrow function
  }
   console.log(out.join(" "));
  }
  num("have a nice day"); */
  //********************************************************************** */

  //c)sum of all numbers in an array

 
  /* let num=function(arr){
    let sum=0;
  for(var i=0;i<arr.length;i++){             //Anonymous
    sum=sum+arr[i];
  }
    console.log (sum);
}
num([10,20,30,40,50]); */


 /* (function (arr){
    let sum=0;
  for(i of arr){                           //iife
    sum=sum+i;
  }
    console.log (sum);
})
([10,20,30,40,50]); */


/*
let num=(arr)=>{
    let sum=0;
  for(i in arr){
    sum=sum+arr[i];                    //Arrow function
  }
    console.log (sum);
}
num([10,20,30,40,50]);
*/
//***************************************************************/

//d) Remove duplicate from an array

 /* (function(array)                          //iife
{
  let dup=[... new Set(array)]
  console.log(dup);                            
})([1,2,3,3,2,5,6]) */


 /* let num=function(array)
{
  let dup=[... new Set(array)]
  console.log(dup);                           ///Anonymous
}
num([1,2,3,3,2,5,6]) */
//********************************************************************** */

//e) Rotate k times in an array

 /* let Array = function(nums, k) {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];            ////Anonymous
      start++;
      end--;
    }
  }

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  console.log(nums);
}
Array([1,2,3,4],2) */



/* (function(nums, k) {                                            ////IIFE

  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
     k%=nums.length;
  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  console.log(nums);
})
([1,2,3,4],2) */


 /* let Array =(nums, k)=> {

  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;                                                 //Arrow function
      end--;
    }
  }
     k%=nums.length;
  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  console.log(nums);
}
Array([1,2,3,4],2)  */

//******************************************************************/

//f)palindrome

 /* let palin=(arr)=>{
  let isPalindrome=true;

  for(let i=0;i<arr.length/2;i++)                 //Arrow function
  {
    if(arr[i]!==arr[arr.length-i-1]){
    isPalindrome=false;
    break;
    }
  }
  console.log(isPalindrome);
}
palin([1,2,3,2,1,5]) */



/*  (function (arr){
  let isPalindrome=true;

  for(let i=0;i<arr.length/2;i++)
  {
    if(arr[i]!==arr[arr.length-i-1]){                   //IIFE
    isPalindrome=false;
    break;
    }
  }
  console.log(isPalindrome);
})
([1,2,3,2,1])   */



 /* let palin=function (arr){
  let isPalindrome=true;

  for(let i=0;i<arr.length/2;i++)
  {
    if(arr[i]!==arr[arr.length-i-1]){                    ////Anonymous
    isPalindrome=false;
    break;
    }
  }
  console.log(isPalindrome);
}
palin([1,2,3,2,1,5])  */
//******************************************************************** */
//g) Return prime numbers in an array

/*
let prime=(array)=>{
  for(let i=2;i<=Math.sqrt(array);i++){
    if(array % i == 0)                          //Arrow function
    return false;
  }
  
  return true;
}
 console.log(prime([2])); */


 /*  let prime=function (array){
  for(let i=2;i<=Math.sqrt(array);i++){
    if(array % i == 0)                          //Anonymous function
    return false;
  }
  
  return true;
}
 console.log(prime([2])); */

 //*************************************************************************/



    
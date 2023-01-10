//synchronous progaramming vs asynchronous programming
//synchronous programming = javascript 
// console.log("script start");

// for(let i=1;i<10000;i++){
//     console.log("inside for loop");

// }
// console.log("script end");  

// console.log("script start");
// const id = setTimeout(()=>{
//     console.log("inside setTimeout");
// },0);

// for(let i=1; i<100;i++){
//     console.log("....");
// }
// console.log("settimeout id is ",id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script end");


// //setInterval
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());},1000);
// console.log("script end");    

// console.log("script start");
// setInterval(()=>{
//     for(let i=0;i<100000000;i++){
//         continue;
//     }
// console.log(Math.random());
// },500);
// console.log("script end");    

// const body = document.body;
// const button = document.querySelector("button");
// const IntervalId(() => {
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = 'rgb(${red}, ${green}, ${blue})';
//     body.style.background = rgb;
//     // console.log(rgb);
// }, 1000);
 
// button.addEventListener("click",()=>{
//     clearInterval(IntervalId);
//     button.textContent = body.style.background;
// });
// console.log(intervalId);

// function myFunc(callback){
//     console.log("Function is doing task 1");
    
// }
// function myFunc2(){
//     console.log("Function is doing task 2");
    
// };
// myFunc();
// myFunc2();

function getTwonumbers(number1,number2,onsuccess){
    if(typeof number1==="number" && typeof number2==="number")
    onsuccess(number1,number2);}
    {
        console.log("Wrong data type");
    
    // console.log(number1,number2);
    // callback(number1,number2);
}

function addTwonumber(num1,num2){
    console.log(num1+num2);
}
(4,4,addTwonumber);
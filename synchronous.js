let a=30;
let b=0;


let waitingDate= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(30);
    },2000)
})

waitingDate.then((data)=>{
    b=data;
    console.log(a+b)
})

const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
},1500);


const interval = setInterval(() => {
    console.log('1초마다 실행');
},1000);

const timeout2 = setTimeout(()=> {
    console.log('dose not work.');
},3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
},2500)

const immediate = setImmediate(()=>{
    console.log('right now execute')
});

const immediate2 = setImmediate(() => {
    console.log('dose not execute')
});

clearImmediate(immediate2)
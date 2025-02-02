const text= document.querySelector('#start').addEventListener('click',function(){
    document.querySelector('h1').innerHTML='hello raza';
    document.querySelector('#first').innerHTML='welcome raza'
})

setTimeout(text, 2000);  // delay to print function in mili second

document.getElementById('stop').addEventListener('click',()=>{
    clearTimeout(text)   // to stop the timeout
    console.log('stoped');
})


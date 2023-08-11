document.querySelector('#btn').addEventListener('click',function(){
    console.log(this)
    debounce(apiCall,3000);
});


let time;
function debounce(fun,timeStamp){
   clearInterval(time);
   time  =  setTimeout(()=>{fun()},timeStamp)
}

function apiCall(){
    console.log("API Call ...");
}
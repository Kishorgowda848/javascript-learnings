function getProducts(){
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(res=>res.json()).then(res=>{
        console.log(res);
        updateHtml(res);
    })
}

function updateHtml(productList){
    for(let i=0;i<productList.length;i++){
        let h1 =  document.createElement('h1');
        h1.textContent = productList[i].title;
        document.querySelector("#root").appendChild(h1);
    }
}

window.addEventListener('load',function(){
    console.log("Ready")
    getProducts();
});
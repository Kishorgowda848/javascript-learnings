document.findByClassName = function (className){
    const root = this.body;
    /** Recursive  */
    let result = [];
    function search(node){

        if(node.classList.contains(className)){
            result = [...result,node];
        }

        for( let item of node.children){
            search(item);
        }

        return result;
    }

    return  search(root);;
}
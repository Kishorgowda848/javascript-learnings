class Car{

    @auditTrialll
    engine(){
        console.log("Hi Engin")
        //  throw new Error("Errrrer");
    }
}


function auditTrialll(target:any,key:string,desc:PropertyDescriptor):void{
    // console.log(desc,target,key)
   const method = desc.value;
//    desc.value = function(){
       try{
        method();
       }catch(err){
         console.log("Hey  Error ....")
       }
//    }
}
new Car().engine
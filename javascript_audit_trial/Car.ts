class Car{
  name:string = "AUDI";

  @testDecorator
  testFunction():string{
  return `The car Name is ${this.name}`;
  }
}

function testDecorator(target:any,key:any){
  console.log("target",target)
  console.log("Key",key)
}
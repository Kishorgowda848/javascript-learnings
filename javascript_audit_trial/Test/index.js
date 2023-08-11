
// import json from './index.json' assert { type: "json" };
import { readFileSync } from "fs";
const packageJSON = JSON.parse(readFileSync("./package.json"));
// const swaggerDoc = require('./index.json');

console.log(packageJSON);
// fetch('./index.json').then(res=>{
//     console.log(res);
// })

// JSON.parse(required("./index.json"));
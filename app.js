// import { data } from "./Data/data.js";
const res = require('./Data/data');
const data = res.data

const value = process.argv[2];

if (process.argv.length !== 3)
{
    throw new Error("Program must be run with one cli argument!!");
}

if (value.startsWith("--filter="))
{
    let arr = [];

    for (let i = 9; i < value.length; i++)
    {
        arr.push(value[i])
    }
    
    let argument = arr.toString();
    for (let i = 0; i < res.data.length; i++)
    {
        // let animals = data[i]['people']
        // console.log(JSON.stringify(animals))
    }

}

console.log(data[1].people[1].animals)

for (let i = 0; i < value.length; i++)
{
    // console.log(`${value[i]}`)
}
// console.log(jsonData)
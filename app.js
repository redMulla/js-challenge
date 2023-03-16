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
    let helper = [];

    for (let i = 9; i < value.length; i++)
    {
        arr.push(value[i])
    }
    
    let ref = arr.join('');
    for (let i = 0; i < data.length; i++)
    {
        let people = data[i].people
        let found = [];
        for (let j = 0; j < people.length; j++)
        {
            const animals = people[j].animals
            for (let k = 0; k < animals.length; k++)
            {
                let name = animals[k].name

                if (name.includes(ref))
                {
                    
                }
            }
        }
    }
    console.log(data[2])
}

// console.log(data[1].people[1].animals)

for (let i = 0; i < value.length; i++)
{
    // console.log(`${value[i]}`)
}
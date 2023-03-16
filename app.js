// import { data } from "./Data/data.js";
const res = require('./Data/data');
const util = require('util')
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
            const animals = people[j].animals;
            const included = animals.filter(animal => animal.name.includes(ref));

            if (included.length > 0) 
            {

                helper.push(data[i])
                const index = helper.findIndex(country => country.name == data[i].name)
                const replace = helper[index].people.filter(person => person.name == people[j].name)
                helper[index].people = replace
                const ani = helper[index].people.findIndex(person => person.name == people[j].name)
                helper[index].people[ani].animals = included;
            }
        }
    }
    console.log(util.inspect(helper, false, null, true))
}
else if (value.startsWith("--count"))
{
    for (let i = 0; i < data.length; i++)
    {
        const countNum = data[i].people.length;
        const countries = ` [${countNum}]`
        const add1 = data[i].name.concat(countries)
        data[i].name = add1
        const people = data[i].people

        for (let j = 0; j < people.length; j++)
        {
            const peopleCount = people[j].animals.length;
            const peopleNum = ` [${peopleCount}]`
            const add2 = people[j].name.concat(peopleNum);
            people[j].name = add2
        }
    }
    console.log(util.inspect(data, false, null, true))
}
else
{
    throw new Error('arguments must be --filter=(+what must be included in the animal name) or --count to count the children of each name.')
}
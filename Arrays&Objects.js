// object

// const product = {
//     name: "Parker Jorter",
//     review: 4,
//     offer: 5,
//     price: 270,
// }
// console.log(product)

// Letter counter program

// const letter_counted = () => {
//     const sentence = "Its nice to program."
//     let counter = 0;
//     console.log(sentence.length);

//     for(letter in sentence)
//     {
//         counter++;
//     }
//     return counter;
// }

// console.log(letter_counted());

// Sum up all the numbers in array

// const numarr = [1,5,6,8,4,2,3,7];
// const result = (numarr)=>{
//     let sum = 0;
//      for(n in numarr)
//      {
//         sum = sum + numarr[Number(n)];
//      }

//      return {sum};
// }

// console.log(result(numarr));

//  Find maximum 
//  const numarr = [1,5,6,8,4,2,3,7];

//  const result = (numarr)=>{
//     let max = numarr[0];
//     for(const i of numarr)
//     {
//         if(max<i)
//         {
//             max = i;
//         }

//     }
//     return {max}
//  }

// console.log(result(numarr))

// Frequency program phrase:haha =>{'h':2, 'a':2} mycode:
// const phrase = 'fatema';

// const frequency = (phrase)=>{


//     for(i in phrase)
//     {
//         let freq = 0;
//         for(j in phrase)
//         {
//             if(phrase[Number(i)]== phrase[Number(j)+1])
//             {
//                 freq = freq+1;
//             }
//         }
//         console.log(phrase[Number(i)] + " " + freq);
//     }
// }

// frequency(phrase);

//qazi's code:

// const frequency = (phrase)=>{
//     let freq = {}
//     for(const i of phrase)
//     {
//         if(i in freq)
//         {
//             freq[i] = freq[i] + 1;
//         }
//         else
//         {
//             freq[i]=1;
//         }
//     }
//     return freq;
// }
//  const phrase = "haha lol!"; 
// console.log(frequency(phrase));

//word frequency

// const frequency = (phrase)=>{
// const freq = {};
// words = phrase.split(' ');
// for(const word of words)
// {
//     if(word in freq)
//     {
//         freq[word]++;
//     }
//     else{
//         freq[word]=1;
//     }
// }
// return freq;
// }  

// console.log(frequency('lol lol wth'));

//Advance array function
//Map => loops and returns an array

// [1,2,3,4].map(number => console.log(number))

// let result = [1,2,3,4].map(number => number *2)
// console.log(result)

//filter => loops and returns array matching condition
//without filter
// const filter = (number,gt)=>
// {
//     let result = []
//     for(const n of number)
//     {
//         if(n>gt)
//         {
//             result.push(n);
//         }
//     }
//     return result;    
// }
// console.log(filter([1,2,3,4,5,6],3))

//with filter
// const filter = (number,gt)=>
// {
//     let result =   number.filter(num => num>=4 || num >2)
//     return result
// }
// console.log(filter([1,2,3,4,5,6],3))

// const actors = [
//     {name: 'salena ', networth:10000000 },
//     {name: 'george', networth:100 },
//     {name:'tyler' , networth: 100000 }
// ]
// let result = actors.filter(actor => actor.networth>100)

//reduce  => takes function as an argument
const nums = [1, 2, 3, 4, 5]
const r = nums.reduce(function (prev, curr) {
    return prev + curr
})

console.log(r);

//more short and reduced 

const result = nums.reduce((prev, curr) => prev + curr, 0)
console.log(result)

const actors = [
    { name: 'salena ', networth: 10000000 },
    { name: 'george', networth: 100 },
    { name: 'tyler', networth: 100000 }
]

const res = actors.reduce((prev, curr) => prev + curr.networth, 0)
console.log(res);
'use strict';



const speak = function(arr) {

  const newArray = [];

  for(const i of arr)
  {
    newArray.push(i.toUpperCase());
  }
  return newArray;
}


//const arr = ['foo', 'bar', 'baz']

const res = speak(['hello', 'world']);
console.log(res);

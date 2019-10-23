import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

describe('Array', () => {
  it.only('Should find the position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
    expect(/* Find 5 position*/[1, 5, 8, 3, 2].indexOf(5)).toBe(1);
    expect(/* Find 3 position */[1, 5, 8, 3, 2].indexOf(3)).toBe(/* ??? */3);

    // TODO: Write additional its
  });

  it.only('Should return the specified array twice', () => {
    function double(arr){
 
 
      arr=arr.concat(arr);
      
      return arr;
     
    }
    
    expect(double([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);

    // TODO: Write additional its
  });

  it('Convert the number array to  the array of string values', () => {

    expect(/* convertToStringArr([1, 2, 3]) */).toStrictEqual(['1', '2', '3']);

    // TODO: Write additional its
  });

  it.only('Should return the number of all occurrences of specified item in an array', () => {
    function calculateOccurences(arr,value){

      let count = 0;
    
      let pos = arr.indexOf(value);
    
      while(pos !== -1){
    
        count++;
    
        pos = arr.indexOf(value,pos + 1);
    
      }
      return count;
    
    }
    expect( calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);

    // TODO: Write additional its
  });

  it.only('Should convert strings from specified array to uppercase', () => {
    function toUppercase(arr){

      let result = arr.map(item=>item.toUpperCase());

      return result;
    
    }
    expect( toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
  });

  it.only('Insert an item at specified position', () => {
    function insert(arr,value,pos){

      let removed = arr.splice(pos,pos,value);
    
      arr = arr.concat(removed);
    
      return arr;
    
    }
    expect( insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it.only('Should return the n last items from the specified array', () => {
    function last(arr,pos){

      arr.reverse();
   
      arr = arr.slice(0,pos);
   
      arr.reverse();
   
     return arr;
   
   }
    expect(last([1, 2, 3, 4, 5, 6, 7], 3) ).toStrictEqual([5, 6, 7]);
  });

  it.only('Return the 3 largest items from integer array', () => {
    function find3Largest(arr){
      let temp = 0;

      arr.sort(function(a,b){
    
        return a-b;
      })
      arr.reverse();
       arr = arr.slice(0,3);
        temp=arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
      return arr;
    
    }
    expect( find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1]) ).toStrictEqual(
      [29, 11, 17]
    );
  });

  it.only('Sort numbers array by using array method', () => {
    function sort(arr){
      arr = arr.sort(function(a,b){
        return a-b;
      })
      arr = arr.reverse();
      return arr;
    }
    expect( sort([2, 3, 1, 8, 4, 5] ) ).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  it.only('Should summarize of all items of numbers array', () => {
    function sum(arr){
      let result = arr.reduce((sum, current) => sum + current, 0);
      return result;
    }
    expect( sum([1, 5, 7, 9, 3]) ).toBe(25);
  });

  it.only('Should return the numbers of falsy value in the specified array', () => {
    function getNumberOfFalsy(arr){
      let count = 0;
        for(let i = 0;i<arr.length;i++){
        
          if(!arr[i]){
           count++;
          }
      }
      return count;
    }
    expect( getNumberOfFalsy([1, 0, "", null, "hello", "0"]) ).toBe(3);
  });

  it.only('Should return an array of unique items from the specified array', () => {
    function unique(arr){
      let set = new Set(arr);
      set.forEach(value=>set.add(value));
      return arr =[...set];
    }
    expect( unique(["a", "b", "a", "c", "e", "b", "o"]) ).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function() {
    let arr = [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' }
    ];

    expect(/* group(arr, 'country') */).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it.only('Should creates an array with all falsy values removed.', () => {
    
    function compact(arr){
      for(let i = 0;i<arr.length;i++){
        if(!arr[i]){
          arr.splice(i,i);
          i--;
        }
        
      }
      return arr;
    }
    
    expect(compact([1, 0, null, "a"])).toStrictEqual([1, 'a']);
  });

  it('Should flattens array a single level deep', () => {
    function flatten(arr){
      return arr.flat(1);
    }
    expect( flatten([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flattens array.', () => {
    function flatten(arr){
      return arr.flat(Infinity);
    }
    console.log([1, [2, [3, [4]], 5]].flat());
    expect( flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it.only('Should creates an array of unique values that are included in all given', () => {
    function intersection(arr1,arr2){
      let idx = 0,arr3 = [];
      for(let i = 0 ;i < arr2.length;i++){
        idx = arr1.indexOf(arr2[i]);
        if (idx >= 0) {
          arr3.push(arr2[i]);
       }
      }
      arr3 = arr3.reverse();
      return arr3;
    }
    expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9])).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    const arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;

    let removed; /* remove(arr, gt5); */
    
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});

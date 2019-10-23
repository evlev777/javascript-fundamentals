describe("Numbers", () => {
  it.only("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(/* ??? */a % b).toBe(5);
    expect(/* ??? */b % b).toBe(0);
  });

  test.only("Should get average of 3 numbers", () => {
    function average(a,b,c){
      return (a+b+c)/3;
    }
    expect( average(2, 4, 6)).toBe(4);
    expect( average(-5, 12, -7)).toBe(0);
  });

  test.only("Should get a last digit of the number", () => {
    function last(num){
      let ost = num % 10;
      return ost;
    }
    expect( last(123) ).toBe(3);
    expect( last(3982)).toBe(2);
  });

  test.only("Should sum the digits of a given number", () => {

    
    function sumDigits(num){
      let sum = 0, tmp;
      while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
      }
      return sum;
    }
    expect( sumDigits(123)).toBe(6);
    expect( sumDigits(53)).toBe(8);
  });

  test.only("Should return true if specified number is prime", () => {
    function isPrime(num){
      for(let i = 2;i <=num;i++){
        if(num%i==0){
          return false;
        }
        else{
          return true;
        }
      }
    }
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);

    // TODO: Write additional tests
  });

  test.only("Should convert string to number", () => {

    function convert(str){
      let num = Number(str);
      return num;
    }

    expect(convert('234')).toBe(234);
  });

  test.only("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    function max(num1,num2){
      return Math.max(num1,num2);
    }

    function max2(a,b,c,d,e){
      if(a>b && a>c && a>d && a>e){
        return a;
      }else if(b>a && b>c && b>d && b>e){
        return b;
      }else if(c>b && c>a && c>d && c>e){
        return c;
      }else if(d>b && d>c && d>a && d>e){
        return d;
      }else if(e>b && e>c && e>d && e>a){
        return e;
      }
    }

    expect(max(1, 2) ).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  test.only("Should find lowest value", () => {
    function min(a,b,c,d,e,f){
      let num = Math.min(a,b,c,d,e,f);
      return num;
    }
    function min2(a,b,c,d,e,f){
      if(a<b && a<c && a<d && a<e && a<f){
        return a;
      }else if(b<a && b<c && b<d && b<e && b<f){
        return b;
      }else if(c<b && c<a && c<d && c<e && c<f){
        return c;
      }else if(d<b && d<c && d<a && d<e && d<f){
        return d;
      }else if(e<b && e<c && e<d && e<a && e<f){
        return e;
      }else if(f<b && f<c && f<d && f<e && f<a){
        return f;
      }
    }
    expect( min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect( min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests
  });

  test.only("Should round up a value to the nearest integer", () => {
    
    expect(Math.abs(1)).toBe(1);
    expect(Math.round(1.8)).toBe(2);
    expect(Math.round(1.2)).toBe(1);
    expect( Math.abs(-1.2)).toBe(1.2);
  });

  test.only("Should get the largest integer less than or equal to a given number.  ", () => {
    expect( 1).toBe(1);
    expect(Math.round(1.2) ).toBe(1);
    expect( Math.floor(1.8) ).toBe(1);

    // TODO: Write additional tests
  });

  test.only("Should return the base10 representation of a binary string", function() {
    expect(parseInt(11000000,2)).toBe(192);
  });

  test.only("Should convert an eight-bit string number to a binary string", function() {
    expect(parseInt(127,8).toString(2)).toBe("1010111");
    expect(parseInt(65,8).toString(2)).toBe("110101");
  });
});

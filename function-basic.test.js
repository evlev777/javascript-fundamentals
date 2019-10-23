describe("Function basic", () => {
  it.only("Should be function declarations", () => {
    function simpleFunction(){
      return "I am a function declarations";
    }
    expect( simpleFunction()).toBe("I am a function declarations");
  });

  it.only("Should be function expression", () => {

    let functionExpression = function(){
      return "I am a function expression";
    }
    expect(functionExpression()).toBe("I am a function expression");
  });

  it.only("Should get sum of 2 numbers", () => {
    function sum(a,b){
      return a + b;
    }
    expect(sum(5, 7) ).toBe(12);
    expect( sum(10, 1000)).toBe(1010);
    expect( sum(-10, 10)).toBe(0);
  });

  test.only("Should get arguments length", () => {
    // TODO: Declare 3 functions (withoutArguments, withOneArgument, withTwoArguments ) with different quantity of named arguments
    function  withoutArguments(){
      return arguments.length;
    }

    function  withOneArgument(a){
      return arguments.length;
    }

    function  withTwoArguments(a,b){
      return arguments.length;
    }
    // TODO: Declare 3 functions (withoutArguments, withOneArgument, withTwoArguments ) with different quantity of named arguments
    expect( withoutArguments() ).toBe(0);
    expect(withOneArgument(1)).toBe(1);
    expect(withTwoArguments(1, 2)).toBe(2);
    expect(withTwoArguments(1)).toBe(1);
    expect(withoutArguments(1, 2, 3, 4, 5)).toBe(5);
  });

  test.only("Should find argument at N position", () => {
    // Write function fn. First argument should be position (N) of argument
    function fn(i){
      return arguments[i];
    }
    expect(fn(1)).toBe(undefined);
    expect( fn(1, "a")).toBe("a");
    expect(fn(3, "a", "b")).toBe(undefined);
    expect(fn(1, "a", "b", "c")).toBe("a");
    expect(fn(2, "a", "b", "c")).toBe("b");
    expect(fn(3, "a", "b", "c")).toBe("c");
  });

  it("Should return string of wrapped arguments", () => {
   

    expect( wrap("a", "b")).toBe("|a|b|");
    expect( wrap("a", "b", "c", "d", "e")).toBe("|a|b|c|d|e|");
  });

  test("Should use Function as argument", () => {
    // Write logCalculationResult function. Function should accept 2 arguments
    // First is calculation function
    // Second is argument for calculation function
    // Return value is message 'Result is ###'

    function add10(a) {
      return a + 10;
    }

    function mul3(a) {
      return a * 3;
    }

    function logCalculationResult(func,value){

      
       
    }

    expect( logCalculationResult(add10, 7) ).toBe("Result is 17");
    expect( logCalculationResult(mul3, 7)).toBe("Result is 21");
  });
});

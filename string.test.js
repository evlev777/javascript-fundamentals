describe("Strings", () => {
  it.only("Should join two strings with a space.", () => {
    // TODO: write 2 function with different way for join string
    function combine1(str1,str2){
      let res = str1 + ' ' + str2;
      return res;
    }

    function combine2(str1,str2){
      return str1.concat(' ',str2);
    }

    expect(combine1("hello", "world")).toBe("hello world");
    expect(combine2("hello", "world")).toBe("hello world");
  });

  it.only("Should get string length", () => {
    function getLength(str){
      return str.length;
    }
    expect( getLength("")).toBe(0);
    expect( getLength("word")).toBe(4);
  });

  it.only("Should create greeting message from template", () => {
    function greeting(name){
      return `Hello, ${name}!`;
    }
    expect(greeting("Ivan")).toBe("Hello, Ivan!");
  });

  it.only("Should strip leading and trailing spaces from a string", () => {

    expect(' aaaa bbb   '.replace(/ +/g, ' ').trim()).toBe("aaaa bbb");
  });

  it.only("Replace all word occurence in the sentences", () => {
    expect( 'aaa bbb ccc aaa bb'.replace(/aaa/g,'eeeee')).toBe(
      "eeeee bbb ccc eeeee bb"
    );
  });

  it("Should validate string length", () => {
    expect(/* validateLength('abcde', 1, 5)*/).toBe(true);
    expect(/* validateLength('a', 1, 5)*/).toBe(true);
    expect(/* validateLength('ab', 1, 5)*/).toBe(true);
    expect(/* validateLength('', 1, 5)*/).toBe(false);
    expect(/* validateLength('abcdef', 1, 5)*/).toBe(false);
  });

  it.only("Should do case insensitive strings comparison", () => {
    function compare(str1,str2){
      if(str1.toLowerCase() == str2.toLowerCase()){
        return true;
      }else{
        return false;
      }
    }
    expect(compare('aBc', 'ABC')).toBe(true);
    expect(compare('abc', 'abc')).toBe(true);
  });

  it.only("Should trim string according symbols limit", () => {
    function trim(str,index){
      str = str.slice(0,index);
      return str;
    }
    expect( trim('Lorem ipsum dolor sit amet', 7)).toBe("Lorem i");
    expect( trim('Lorem ipsum dolor sit amet', 12)).toBe("Lorem ipsum ");
    expect( trim('Lorem ipsum dolor sit amet', 11)).toBe("Lorem ipsum");
    expect( trim('Lorem ipsum dolor sit amet', 100)).toBe(
      "Lorem ipsum dolor sit amet"
    );
  });
});

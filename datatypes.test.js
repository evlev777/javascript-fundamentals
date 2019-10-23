describe("Data types", () => {
  describe("Boolean", () => {
    it.only("Should define False and True boolean variables", () => {
      let a = false;
      let b = true;

      expect(a).toBeFalsy();
      expect(/* Get type of variable a */typeof a).toBe("boolean");
      expect(b).toBeTruthy();
      expect(/* Get type of variable b */typeof b).toBe("boolean");
    });

    it.only("Should use different logical operators with 2 boolean operands", () => {
      const FALSE = false;
      const TRUE = true;

      let useLogicalAnd = FALSE && TRUE;
      let useLogicalOr = FALSE || TRUE;
      let useLogicalNot = !FALSE;
      let useDoubleLogicalNot = !!FALSE;

      expect(useLogicalAnd).toBe(false);
      expect(useLogicalOr).toBe(true);
      expect(useLogicalNot).toBe(true);
      expect(useDoubleLogicalNot).toBe(false);
    });

    it.only("Should use different logical operators with at least 3 boolean operands", () => {
      const a = false;
      const b = false;
      const c = true;
      const d = true;

      let cond1 = (a || c) && d;
      let cond2 = c && d && !a;
      let cond3 = a && b && !c;
      let cond4 = (a|| !c) && !b;

      expect(cond1).toBe(true);
      expect(cond2).toBe(true);
      expect(cond3).toBe(false);
      expect(cond4).toBe(false);
    });
  });

  describe("Number", () => {
    it.only("Should define different numbers", () => {
      let a = 10;
      let b = 1/0 ;
      let c = 20.1 ;
      let d = -1;
      let nan = "sadf"/100;

      expect(a).toBe(10);
      expect(!Number.isFinite(b)).toBe(true);
      expect(c).toBeGreaterThan(20);
      expect(c).toBeLessThan(21);
      expect(d).toBeLessThan(0);
      expect(nan).toBeNaN();
    });

    it.only("Should use base operators", () => {
      const a = 10;
      const b = 30;

      expect(a + b).toBe(/* ??? */40);
      expect(/* Put Expression Here */a-b).toBe(-20);
      expect(/* Put Expression Here */b-a).toBe(20);
      expect(/* Put Expression Here */a*b).toBe(300);
      expect(/* Put Expression Here */b/a).toBe(3);
      expect(/* Put Expression Here */a/b).toBeCloseTo(0.333);
    });

    it.only("Should combine base operators", () => {
      const a = 10;
      const b = 30;
      const c = 100;

      expect(a + b + c).toBe(140);
      expect(/* Put Expression Here */(((b+a)/a)*c)).toBe(400);
      expect(/* Put Expression Here */((b-a)*c)).toBe(2000);
      expect(/* Put Expression Here */((a+c)*b)).toBe(3300);
      // TODO: write 3 own test
    });

    it.only("Should convert to number", () => {
      expect(Number("123")).toBe(123);
      expect(Number("12.3")).toBe(12.3);

      expect( Number("12")).toBe(12);
      expect( Number("12.3")).toBe(12.3);
      expect( Number("0")).toBe(0);
      expect(Number("0x00")).toBe(0);
      expect(Number("0b11")).toBe(3);
      expect(Number("foo")).toBe(NaN);
      expect(Number("-1/0")).toBe(NaN);
      expect(Number("-Infinity")).toBe(Number.NEGATIVE_INFINITY);
    });
  });

  describe("String, object, null, undefined and symbols", () => {
    it.only("String", () => {
      let str1 = "string"; // Use single quote
      let str2 = String(str1); // Use String(???)
      let str3 = new String(str1); // Use new String(???)
      let str4 = `${str1}`; // Use template string and str1 variable

      expect(str1).toBe("string");
      expect(str1 === str2).toBeTruthy();
      expect(str1 === str3).toBeFalsy();
      expect(str1 === str4).toBeTruthy();
      expect(/* use typeof */typeof str3).toBe("object");
    });

    it.only("Should define object with 2 props", () => {
      let obj = {
        name:"Evgen",
        age:20
      }; // Define object with 2 props

      expect(typeof obj).toBe("object");
      expect(Object.keys(obj).length).toBe(2);

      // TODO: write 2 own tests
    });

    it.only("Should define variable with Null and undefined values", () => {
      let nullVar = null; // Set null
      let undefinedVar = undefined; // Set undefined
      let someVar; // Do not define it!!!

      expect(nullVar).toBeNull();
      expect(undefinedVar).toBe(undefinedVar);
      expect(someVar).toBe(undefined);
      expect(/* typeof ??? */typeof nullVar).toBe("object");
      expect(/* typeof ??? */typeof undefinedVar).toBe("undefined");
    });

    it.only("Should define 2 Symbol variable with the same description", () => {
      const smbl1 = Symbol("test");
      const smbl2 = Symbol("test");

      expect(typeof smbl1).toBe(/* ??? */"symbol");
      expect(typeof smbl2).toBe(/* ??? */"symbol");
      expect(/* Compare smbl1 and smbl2  */smbl1===smbl2).toBe(/* ??? */false);
    });
  });
});

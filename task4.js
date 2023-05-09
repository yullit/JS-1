const calc = (a, b, c) => a + b + c;

const wrapper = (func) => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (key in cache) {
        console.log("cache");
        return cache[key];
      } else {
        console.log("calculated");
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    };
};

const cachedCalc = wrapper(calc);

console.log(cachedCalc(2, 2, 3)); // 7 calculated
console.log(cachedCalc(5, 8, 1)); // 14 calculated
console.log(cachedCalc(2, 2, 3)); // 7 from cache
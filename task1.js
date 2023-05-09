const add = (num) => {
    let sum = num;

    function addNext(next) {
      if (next === undefined) {
        return sum;
      }

      sum += next;

      return addNext;
    }

    return addNext;
  }

  console.log(add(2)(5)(7)(1)(6)(5)(11)()); //37
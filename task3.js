function deepClone(obj) {
    let clonedObj;

    if (Array.isArray(obj)) {
      clonedObj = [];
    } else if (obj && typeof obj === 'object') {
      clonedObj = {};
    } else {
      return obj;
    }

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }

    return clonedObj;
  }

  let obj = {
    type: 'animal',
    name: 'Lion',
    color: 'yellow',
    habitat: 'savannah',
    diet: 'carnivore'
  };

  let clone = deepClone(obj);

  console.log(obj); //{ type: 'animal', name: 'Lion', color: 'yellow', habitat: 'savannah', diet: 'carnivore'}
  console.log(clone); //{ type: 'animal', name: 'Lion', color: 'yellow', habitat: 'savannah', diet: 'carnivore'}
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}

function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (callback(el, i, array)) {
      newArray.push(el);
    }
  }

  return newArray;
}

function reduce(array, callback, initialValue) {
  let currentValue = initialValue;

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    // default initialValue is first element of the array
    if (!currentValue) {
      currentValue = el;
      continue;
    }

    currentValue = callback(currentValue, el, i, array);
  }

  return currentValue;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce
}

const fisherYatesShuffle = (array) => {
  let i, j;

  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export default fisherYatesShuffle;

// usage

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArray = fisherYatesShuffle(myArray);
// console.log(myArray);

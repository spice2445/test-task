function moveZeros (arr) {
  const
    zeroArr = arr.filter((el) => el === 0),
    noZeroArr = arr.filter((el) => el !== 0);

  return [...noZeroArr, ...zeroArr]
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

// задача решена за сложность O(n)
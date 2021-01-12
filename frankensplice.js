function frankenSplice(arr1, arr2, n) {
let index = 0
let newArr = arr2.map((x) => x)
for (let i = 0; i<=arr2.length; i++){
  if (index === n){
      for (let j=(arr1.length - 1); j>=0; j--){
        newArr.splice(n, 0, arr1[j])
      }
      console.log(newArr)
      console.log(arr2)
    }
  index++  
  }
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
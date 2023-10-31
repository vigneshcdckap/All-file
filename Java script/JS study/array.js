// ------------- arrays are mutable ----------

// let arr = ["a","b","c","d","e",245];

// console.log("Before : "+arr)

// arr[2] = 34;

// console.log("After : "+arr)


// let str = "testing"

// console.log("Before string: "+str)

// str[2]= "M";

// console.log("After string: "+str)


// -------------- length --------------

// console.log("length : "+arr.length)

// console.log("index value : "+arr[arr.length-1])





// ------------- multi dimensional array ---------


// let arr1 = [1,2,3,["a","b","c"],4]
// let arr2 = [5,6,7,8]
// let arr3 = [9,10,11,12]


// console.log("concat : "+arr1.concat(arr2))

// let joinedArr = [arr1,arr2,arr3];

// console.log(joinedArr)

// console.log(joinedArr[1][2])




// ---------------- Array Methods ------------



// ------------------ push - pop -----------



// let arr = ["a","b","c","d","e"];

// console.log(arr +" "+arr.length)

// arr.push("f");

// console.log(arr)

// arr.pop()

// console.log(arr)

// arr.shift();

// console.log(arr)

// arr.unshift("Test");

// console.log(arr)

// delete arr[2];


// console.log(arr)



// ------------------ splice -----------------


// let newArray = ["a","b","c","d","e"]

// console.log(newArray)

// newArray.splice(0,2,1,2,3);

// console.log(newArray)


// ---------------- slice ----------------------

// console.log(newArray.slice(2))

// console.log(newArray)

// ----------------- reverse ---------------------

// console.log(newArray.reverse());


// -------------------- flat ----------------------

// let array1 = [1,2,3];

// let array2 = [4,5,6];

// let newArr = [array1,array2];

// console.log(newArr)

// let testArr = newArr.flat();

// console.log(testArr)


// -------------- array to string - viceversa ------------------


// let str = "Something is better than nothing"

// let strArr = str.split(" ");

// console.log(strArr);

// let newArr = ["Something", "is", "better" ,"than" ,"nothing"]

// console.log(newArr.join(""))


// ------------------------ spread- operator --------------

// let array1 = [1,2,3];

// let array2 = [4,5,6];

// let newArr = [...array1,...array2];

// console.log(newArr)
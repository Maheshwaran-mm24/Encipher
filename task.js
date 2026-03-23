// ////Question1
// height = [0,1,0,2,1,0,1,3,2,1,2,1]
// let res = 0
// for(let i = 0; i < height.length; i++){
//     let leftMax = 0
//     let rightMax = 0

//     for(let j = 0; j <= i; j++){
//         leftMax = Math.max(leftMax, height[j])
//     }

//     for(let j = i; j < height.length; j++){
//         rightMax = Math.max(rightMax, height[j])
//     }
//     let water = Math.min(leftMax, rightMax) - height[i]
//     res += water;
// }

// console.log(res)



// ////Question2
// let nums = [1,3,-1,-3,5,3,6,7]
// let k = 3
// let res = []
// let final = []
// for(let i = 0; i <= nums.length - k; i++){
//     let temp = []
//     for(let j = i; j < i + k; j++){
//         temp.push(nums[j])
//     }
//     a=Math.max(...temp)
//     final.push(a)
//     res.push(temp)
// }
// console.log(final)



///Question3
// let s = "abcabcbb"
// let c=0
// for (i=0; i<s.length; i++){
//     temp=""
//     for (j=i; j<s.length; j++){
//         if(!temp.includes(s[j])){
//             temp+=s[j]
//         }
//         else{
//             if (c<temp.length){
//                 c=temp.length
//             }
//             temp=""
//             break
//         }
//     }
// }
// console.log(c)



// //Question4
// let s = "ADOBECODEBANC"
// let t = "ABC"

// let left = 0
// let minLen = 0
// let result = ""

// for (let right = 0; right < s.length; right++) {
//     let window = s.slice(left, right + 1)

//     let valid = true
//     for (let ch of t) {
//         if (!window.includes(ch)) {
//             valid = false
//             break
//         }
//     }

//     while (valid) {
//         if (window.length < minLen) {
//             minLen = window.length
//             result = window
//         }

//         left++
//         window = s.slice(left, right + 1)

//         valid = true
//         for (let ch of t) {
//             if (!window.includes(ch)) {
//                 valid = false
//                 break
//             }
//         }
//     }
// }

// console.log(result)



// /// ///Question5
// let arr = [2,1,5,6,2,3]
// let maxArea = 0

// for (let i = 0; i < arr.length; i++) {
//     let minHeight = arr[i]

//     for (let j = i; j < arr.length; j++) {
//         minHeight = Math.min(minHeight, arr[j])

//         let width = j - i + 1
//         let area = minHeight * width

//         maxArea = Math.max(maxArea, area)
//     }
// }
// console.log(maxArea)



// ///Question6
// let a = [3,4,-1,1]
// let res = a.filter(num => num > 0)
// for (let i = 1; i <= res.length + 1; i++){
//     if(!res.includes(i)){
//         console.log(i)
//         break
//     }
// }



// ///Question7
// let a = [1,5,2,4]
// let pro = a.reduce((acc,cur)=>{
//     return acc *=cur
// },1)
// let res = a.map((num)=>{
//     return  pro/num
// })
// console.log(res)
                                             
//                             ///(or)////

// ///Question7
// let a = [1,2,3,4]
// let res=[]
// for (i in a){
//     temp=1
//     for (j in a){
//         if (i!=j){
//             temp*=a[j]
//         }
//     }
//     res.push(temp)
// }
// console.log(res)



// //Question8
// let arr = [-2,1,-3,4,-1,2,1,-5,4]

// let sum = 0
// let maxSum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]

//     if (sum > maxSum) {
//         maxSum = sum
//     }
//     if (sum < 0) {
//         sum = 0
//     }
// }
// console.log(maxSum)



// ///Question9
// let s = "babad"
// let res = ""

// for (let i = 0; i < s.length; i++) {
//     let left = i;
//     let right = i;

//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         if (right - left + 1 > res.length) {
//             res = s.slice(left, right + 1);
//         }
//         left--;
//         right++;
//     }

//     left = i
//     right = i + 1
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         if (right - left + 1 > res.length) {
//             res = s.slice(left, right + 1)
//         }
//         left--
//         right++
//     }
// }

// console.log(res)



///Question10
// let arr = a.map((num,i)=>{
//     return num=num.split("").sort().join("") 
// })
// let uni = []
// for (i of arr){  
//     if (!uni.includes(i)){
//         uni.push(i)
//     }
// }
// let final =[]
// for (el of uni){
//     temp=[]
//     let sep = arr.forEach((v,index)=>{
//         if (el == v){
//             temp.push(a[index])
//         }
//     })
//     final.push(temp)
// }
// console.log(final)


// //Question12
// function memoize(fn) {
//   let cache = {}
//   return function(x) {
//     if (cache[x] !== undefined) {
//       console.log("from cache")
//       return cache[x]
//     }
//     let result = fn(x)
//     cache[x] = result
//     return result
//   }

// }
// function square(n) {
//   console.log("calculating...")
//   return n * n
// }
// let memoFn = memoize(square)
// console.log(memoFn(2))
// console.log(memoFn(2)) 



// //Question16
// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

// console.log(sum(1)(2)(5))


//Question17
// function compose(f, g) {
//   return function(x) {
//     return f(g(x))
//   }
// }
// function add2(x) {
//   return x + 2
// }
// function multiply3(x) {
//   return x * 3
// }
// let result = compose(add2, multiply3)
// console.log(result(5))


// //Question29
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function run() {
//   console.log("Start")
//   await sleep(2000)
//   console.log("Wait 2 seconds")
// }
// run()





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



// ///Question4
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
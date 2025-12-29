// // -----Question1------
// let username = prompt("Enter your Name: ")
// function greeting(){
//     alert("Good Morning " + username + " Have a nice day!!!")
// }
// greeting()


// // -------Question2-----
// function numcheck(){
//     if (num % 2 == 0){
//         alert("Even Number") 
//     }else{
//         alert("Odd Number")
//     }
// }
// let num = prompt("Enter the Number: ")
// numcheck()


// -----Question3----
// let n1 = prompt("Enter the number1: ")
// let n2 = prompt("Enter the number2: ")
// let operator = prompt("Enter the Operator:")
// let res
// if (operator == "+"){
//     res = Number(n1)+Number(n2)
// }if (operator == "-"){
//     res = n1-n2
// }if (operator == "*"){
//     res = n1*n2
// }if (operator == "/"){
//     res = n1/n2
// }
// alert("Your Answer is:" +" "+ res)



// // ------Question4-----
// let age = prompt("Enter Your Age: ")
// function agechecker(){
//     if (age >=18){
//         alert("You Are Eligible to Vote!")
//     }else{
//         alert("Your Are not Eligible to Vote!")
//     }
// }
// agechecker()



// // ------Question5----
// let num = prompt("Enter a number for table generation: ")
// for (i=1; i<=20; i++){
//     console.log(i + " x" + num + "=" + i*num )
// }


// // ----Question6----
// function sum_of_num(){
//     let sum = 0
//     for (i=1; i<=num; i++){
//         sum += i
//     }
//     console.log(sum)
// }
// let num = prompt("Enter a number: ")
// sum_of_num()


// // -----Question7-----
// let password = prompt("Enter your password: ")
// if (password.length>=8){
//     alert("Password is Valid")
// }else{
//     alert("Password is Invalid")
// }


// // -----Question8-----
// let mark = prompt("Enter your Mark: ")
// if (mark>=90){
//     console.log("Grade:A")
// }else if(mark>=80 && mark<90){
//     console.log("Grade:B")
// }else if(mark>=65 && mark<80){
//     console.log("Grade:C")
// }else{
//     console.log("Fail")
// }


// // -----Question9-----
// let a = prompt("Enter a number A:")
// let b = prompt("Enter a number B:")
// let c = prompt("Enter a number C:")
// if (a>=b && a>=c){
//     console.log("A is Largest Number")
// }else if(b>=a && b>=c){
//     console.log("B is Largest Number")
// }else{
//     console.log("C is Largest Number")
// }


// // -----Question10----
// let name = "Mahesh"
// let pass = "12345678"
// let username = prompt("Enter your username: ")
// let password = prompt("Enter your password: ")
// if (username===name && password===pass){
//     console.log("Success")
// }else{
//     console.log("Failed")
// }


// // -----Question11-----
// let num = prompt("Enter the limit number: ")
// let evencount = 0
// for (i=1; i<=num; i++){
//     if(i%2==0){
//         evencount += 1
//     }
// }
// console.log(evencount)


// // -----Question12-----
// function reverse(num){
// let rev=""
// for(i=num.length-1; i>=0; i--){
//     rev+=num[i]
// }
// alert(rev)
// }

// let num = prompt("Enter a number: ")
// reverse(num)



// // -----Question13-----
// function simpleinterest(){
//     let si = ((p*n*r)/100)
//     console.log(si)
// }
// let p = prompt("Enter a Principal amount: ")
// let n = prompt("Enter a period: ")
// let r = prompt("Enter a rate of interest: ")
// simpleinterest()


// // -----Question14-----
// let fixed = 10
// let guess = prompt("Guess the number: ")
// if(guess==fixed){
//     console.log("Your guess is Correct!!!")
// }else if(guess>fixed){
//     console.log("Too High, Try again")
// }else{
//     console.log("Too low")
// }


// // ----Question15-------
// let num = prompt("Enter a number: ")
// let f = true
// if (num<=1){
//     f = false
// }else{
//     for (i=2; i<num; i++){
//         if (num%i==0){
//             f=false
//             break
//         }
//     }
// }
// if (f){
//     alert( num + " =>  It is Prime number")
// }else{
//     alert( num + " =>  It is not a Prime number")
// }   



// // ------Question16----
// let num = prompt("Enter a number: ")
// function factorial(){
//     let fact = 1 
//     for (i=1; i<=num; i++){
//         fact = fact * i
//     }
//     console.log(fact)
// }
// factorial()



// // -----Question17-----
// let num = prompt("Enter a number: ");
// let count=0
// while(num!=0){
//     let d = num%10
//     count++
//     num = Math.floor(num/10);
// }
// console.log(count);



// // -----Question18-----
// function add(){
//     return Number(a)+Number(b)
// }
// function sub(){
//     return a-b
// }
// function mul(){
//     return a*b
// }
// let option = prompt("Choose an operator:\n"+"1.add\n"+"2.sub\n"+"3.mul\n")
// let a = prompt("Enter a number1")
// let b = prompt("Enter a number2")
// let res
// switch(option){
//     case "1":
//         res = add(a,b)
//         alert("Your answer" + res)
//         break
        
//     case "2":
//         res = sub(a,b)
//         alert("Your answer" + res)
//         break
    
//     case "3":
//         res = mul(a,b)
//         alert("Your answer" + res)
//         break
// }



// // -----Question19-----
// let num = prompt("Enter a limit number: ")
// let odd = 0
// let even = 0
// for (i=1; i<=num; i++){
//     if(i%2==0){
//         even +=i
//     }else{
//         odd +=i
//     }
// }
// console.log("Sum of odd" + odd)
// console.log("Sum of even" + even)



// // ------Question20-----
// let user = confirm("Do you want to exit?")
// if (user){
//     alert("You chose to Exit")
// }else{
//     alert("You chose to stay")
// }
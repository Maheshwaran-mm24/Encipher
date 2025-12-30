// ----Question1-----
function greeting(){
    if(hour>=0&&hour<12){
        alert("Good Morning")
    }
    else if(hour>=12&&hour<=16){
        alert("Good Afternoon")
    }
    else if(hour>16 && hour<=18){
        alert("Good Evening")
    }
    else if(hour>18 && hour <= 23){
        alert("Good Night")
    }
    else{
        alert("invalid time")
    }
}
let hour = Number(prompt("Enter the current time: "))
greeting()



// ----Question2-----
let num = prompt("Enter a number")
if (num>0){
    alert("Number is positive")
}else if(num<0){
    alert("Number is negative")
}else{
    alert("Number is Zero")
}



// -----Question3----
let total_class = Number(prompt("Enter the Total Class: "))
let attended_class = Number(prompt("Enter the attended Classes"))
let per = ((attended_class/total_class)*100)
if (per>=75){
    alert(per +"%"+ " Eligible")
}else{
    alert(per + "%" + " Not Eligible")
}



// ----Question4-----
let limit = Number(prompt("Enter the limit"))
let large = 0;
for (i=1; i<=limit; i++){
    let n = Number(prompt("Enter a number"+i+":"))
    if(n>large){
        large=n
    }
}
alert("The Largest number is " + large)



// ------Question5-----
function calculate(){
    if(user_choice=="1"){
        alert((temperature*9/5)+32)
    }
    else{
        alert((temperature-32)*5/9)
    }
}
let user_choice = prompt("1.celsius to fahrenheit\n 2.fahrenheit to celsius")
let temperature=Number(prompt("Enter temperature"))
calculate()



// -----Question6----
let str = prompt("Enter the String: ")
let c = 0
str = str.toLowerCase()
for (i=0; i<str.length; i++){
    let ch = str[i]
    if (ch==="a"|| ch==="e"|| ch==="i"|| ch==="o"|| ch==="u"){
        c +=1
    }
}
alert("Vowel count is: " + c)


// ----Question7----
let n =Number(prompt("Enter the Number: "))
for (i=1; i<=n; i++){
    let r=""
    for (j=i; j<=i; j++){
        r += j+""
    }
    console.log(r)
}


// -----Question8----
let a = prompt("Enter Number A:");
let b = prompt("Enter Number B:");
let c = prompt("Enter Number c:");
if (a<=b && a<=c){
    alert("a is smallest Number");
}
else if(b<=a && b<=c){
    alert("b is smallest Number");
}
else{
    alert("c is smallest Number");
}



// ----Question9-----
let no_items = Number(prompt("Enter a number of Items: "))
let sum=0
for(i=1; i<=no_items; i++){
    price = Number(prompt("Enter the price od item"+i+": "))
    sum +=price
}
alert("Total price is: "+ sum)



// -----Question10----
let year = Number(prompt("Enter year"))
if (year%4===0 && year%100!==0 || year%400==0){
    alert("It is Leap year")
}
else{
    alert("It is Not a leap year")
}



// -----Question11----
let limit = Number(prompt("Enter the limit: "))
let c = 0
for (i=1; i<=limit; i++){
    if( i%2!=0){
            c+=1
    }
}
alert("Odd number Count are "+ c)



// ----Question12----
function palindrome(){
    let str = user_input.toString()
    let rev = ""
    for (i=str.length-1; i>=0; i--){
        rev += str[i]
    }
    if(str==rev){
        alert("It is palindrome")
    }else{
        alert("It is not a palindrome")
    }
}
let user_input = prompt("Enter Your String: ")
palindrome()


// -----Question13----
function pow(){
    let res =1
    for (i=1; i<=exp; i++){
    res *=base
    }
    alert(res)
}
let base = Number(prompt("Enter the base:"))
let exp = Number(prompt("Enter the exponent: "))
pow()


// ----Question14----
let mark1 = Number(prompt("Enter the mark1: "))
let mark2 = Number(prompt("Enter the mark2: "))
let mark3 = Number(prompt("Enter the mark3: "))
let total = mark1+mark2+mark3
let avg = total/3
if(avg>=50){
    alert("Pass");
}
else{
    alert("Fail");
}


// -----Question15----
let rupees = Number(prompt("Enter rupees"))
let dollar = rupees/83
alert("$"+ dollar)


----Question16---
----Question17----


// ----Question18----
let limit = Number(prompt("Enter the limit number: "))
let total = 0
for ( i=1; i<=limit; i++){
    n = Number(prompt("Enter a number"+i+":"))
    total +=n
}
let avg = total/limit
alert("Average: "+avg)


// ----Question19----
let num = Number(prompt("Enter a Number: "))
if (num%3==0 && num%5==0){
    alert("Divisible by Both")
}else if (num%3==0){
    alert("Divisible by 3")
}else{
    alert("Divisible by 5")
}



// ----Question20-----
let password = "1234"
let attempt = 0
while(attempt<3){
    let pass = prompt("Enter password")
    if(pass == password){
        alert("Success")
        break
    }
    attempt++
}
if(attempt==3){
    alert("Account locked")
}
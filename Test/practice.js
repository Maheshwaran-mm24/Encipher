// -------Question1------
function detail(){
    let person = {}
    person.name = name
    person.age = age
    person.city = city
    console.log(person)
}
let name = prompt("Enter your name: ")
let age = prompt("Enter your age: ")
let city = prompt("Enter your city: ")
detail()


// -------Question2--------
let username = prompt("Enter the username: ")
let space = 0
if(username.includes(" ")){
    space+=1
}
if (username.length == username.length -space){
    alert("space not contain")
}else{
    alert("Its contain space")
}


// --------Question3-------
let cart = Number(prompt("Enter the number of items purchased: "))
let total = 0
for (i=1; i<=cart; i++){
    price = Number(prompt("Enter the item_No"+i+": "))
    total+=price
}
alert("TOtal price: "+total)


// ------Question4--------
let user = prompt("Enter the comma separated numbers: ")
non_dup =[]
dup=[]
let arr = user.split(",")
for (i=0; i<arr.length; i++){
    if(!non_dup.includes(arr[i])){
        non_dup+=arr[i]
    }else{
        dup.push(arr[i])                     
    }
}
alert("duplicate Element are: " +dup)


// ------Question5---------
let str = prompt("Enter the String: ")
let non_dup = ""
for (i=0; i<str.length; i++){
    if (!non_dup.includes(str[i])){
        a= 
        non_dup+=str[i]
    }
}
let res =""
for (j=0; j<non_dup.length; j++){
    count =0
    for (k=0; k<str.length; k++){
        if(non_dup[j]==str[k])
            count++
    }
    res +=non_dup[j] + count
}
alert("Final will be: "+res)


// ----------Question6----------
let arr = prompt("Enter the mark with comma: ").split(",")
let high=arr[0]
let low=arr[0]
let sum =0
for (i=0; i<arr.length; i++){
    if (arr[i]>=high){
        high=arr[i]
    }
    if (arr[i]<=low){
        low = arr[i]
    }
    if(true){
        sum +=Number(arr[i])
        
    }
}
let avg = (sum/arr.length)
alert("Highest Mark: "+ high +"\n"+ "Lowest Mark: "+low+"\n"+ "Average Mark :"+ avg)


// --------Question7-------
let sentence = prompt("Enter the sentence: ")
let word = prompt("Enter the word: ")
if ( sentence.includes(word)){
    alert("Word is in the sentence!!!")
}
else{
    alert("Not in sentence")
}


// -------Question8-------
let key = prompt("Enter the keys with comma: ").split(",")
let value = prompt("Enter the values with comma: ").split(",")
let person = {}
function detail(key,value){
    for (i=0; i<key.length; i++){
        person[key[i]]=value[i]
    }
    console.log(person)
}
detail(key,value)


// -------Question9--------
let str = prompt("Enter the String: ")
let non_dup = ""
for (i=0; i<str.length; i++){
    if (!non_dup.includes(str[i])){
        non_dup+=str[i]
    }
}
let c =""
for (j=0; j<non_dup.length; j++){
    count =0
    for (k=0; k<str.length; k++){
        if(non_dup[j]==str[k])
            count++
    }
    c+=count
}console.log(c)
let ke= non_dup.split("")
let v= c.split("")
let res ={}
for (i=0; i<ke.length;i++){
    res[ke[i]] = v[i]
}
console.log(res)


// ------------Question10-------------
let username = prompt("Enter the name with comma: ").split(',')
let a = username.sort()
console.log(a)


// ----------Question11--------
let previous = ['mahesh@24','mahesh@17','mahesh2005']
let pass = prompt("Enter Your current Password: ")
if (previous.includes(pass)){
    alert("Password Already Exists")
}else{
    alert("Not exists")
}


// -----Question13---------
let arr = prompt("Enter something here: ").split(",")
res=[]
for (i=0; i<arr.length; i++){
    if(arr[i]==true){
        res.push(arr[i])
    }
}
console.log(res)


// ------Question14-------
let email = prompt("Enter the Email: ")
let end = email.indexOf("@")
let domain = email.slice(0,end)
alert("Domain Name is: "+ domain)


// -------Question15--------
let n = Number(prompt("Enter a numbers: "))
let num = String(n)
let non_dup = ""
for (i=0; i<num.length; i++){
    if (!non_dup.includes(num[i])){
        non_dup+=num[i]
    }
}
let c =""
for (j=0; j<non_dup.length; j++){
    count =0
    for (k=0; k<num.length; k++){
        if(non_dup[j]==num[k])
            count++
    }
    c+=count
}console.log(c)
let ke= non_dup.split("")
let v= c.split("")
let res ={}
for (i=0; i<ke.length;i++){
    res[ke[i]] = v[i]
}
console.log(res)


let str = "aaabb"
let res=''
let c=1
let ca=""
let b=""
for (i=0; i<str.length; i++){
    if( str[i]==str[i+1]){
        c++
    }
    else{
        res+=str[i]+c
        ca+=str[i]
        b+=c
        c=1
    }

}

const obj={}
let keys = ca.split("")
let v =b.split("")
for ( i=0; i<keys.length;i++){
    obj[keys[i]]=v[i];
}
console.log(obj)













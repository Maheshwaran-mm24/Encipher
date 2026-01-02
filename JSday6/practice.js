// ------------Question1-----------
let username = prompt("Enter your Name: ")
let a = username.toLowerCase().trim().replace(" " ,"")
alert(a)


// -----------Question2---------
let Email =  prompt("Enter your email ID: ")
if (Email.includes("@") && Email.includes(".")){  
    alert("Valid Email")
}else{
    alert("Not Valid email")
}


// -------Question3-------
let word =  prompt("Enter your word: ")
let count = 0
for (i=0; i<word.length; i++){
    if (word[i] != " "){
        count +=1
    }
}
alert(count)


// ------Question4-------
let para = prompt("Enter your paragraph: ")
let para1 = para.split(" ")
alert(para1.length)


// ---------Question5----------
let word = prompt("Enter the word: ")
alert("First char: " +  word[0] + "\n"+ "Last char: " + word[word.length-1])


// -------Question6--------
let sentence = prompt("Enter the sentence: ")
let word1 = prompt("Enter oldword: ")
let word2 = prompt("Enter Newword: ")
let a = sentence.replace(word1,word2)
alert("Updated sentence: " + a)


// --------Question7---------
let str = prompt("Enter something here: ")
if(str.length<=5 || str.length>=20){
    alert("Error!!!")
}else[
    alert("Accepted!!!")
]


// ----------Question8------------
let word = prompt("Enter the word: ")
let c = 0
for (i=0; i<word.length; i++){
    if (word[i].toUpperCase()==word[i]){
        c++
    }
}
alert("count: " + c)


// ---------Question9---------
let str = prompt("Enter a String")
let res = ""
for(let i=0; i<str.length; i++){
    let ch=str[i]
     if( ch>='a' && ch<='z'|| ch>='A' && ch<='Z' || ch>="0" && ch<="9"|| ch==" "){
        res+=ch
     }
}
alert("Final string : "+res)


//--------Question10--------
let sentence = prompt("Enter a sentences :")
let start = prompt("Enter starting word: ")
let end = prompt("Enter ending word: ")
if (sentence.startsWith(start) && sentence.endsWith(end)){
  alert("True")
} 
else{
  alert("False")
}


//---------Question11-------
let sentence = prompt("Enter your sentence here: ")
let word = sentence.split(" ")
let longest = word[0]
for (i=0; i<word.length; i++){
    if(word[i].length >= longest.length){
        longest = word[i]
    }
}
alert("LOngest word in the sentence:" + longest)


// ----------Question12----------
let sentence = prompt("Enter your sentence here: ")
let word = sentence.split(" ")
let res = ""
for (i=0; i<word.length; i++){
    a = word[i][0].toUpperCase() + word[i].slice(1)+" "
    res += a
}
alert(res.trim())


// ----------Question13----------
let mobile = prompt("Enter your phone number: ")
let show = mobile.slice(-4)
let mask = "*".repeat(mobile.length-4)
alert(mask + show)


// ------Question14--------
let word = prompt("Enter your word: ")
let non_dup = ''
let repeated = ""
for( i=0; i<word.length; i++){
    ch= word[i]
    if (!non_dup.includes(ch)){
        non_dup +=ch
    }else{
        if (!repeated.includes(ch))
        repeated +=ch
    }
}
alert("Repeated words: "+ repeated)


// --------Question15--------
let word = prompt("Enter the word: ")
let vowel = ""
let consonant = ""
let v = "aeiouAEIOU"
for (i=0; i<word.length; i++){
    ch=word[i]
    if(v.includes(ch)){
        vowel+=ch
    }
    else{
        consonant+=ch
    }
}
alert("Vowel letters: "+vowel +"\n"+"Consonant letters: " + consonant)


---------Question16---------
let sentence = prompt("Enter your sentence here: ")
let res = ""
let word = sentence.split(" ")
for (i=0; i<word.length; i++){
    if(!res.includes(word[i])){
        res+=word[i] + " "
}
alert("Updated sentence: "+ res.trim())


// ---------Question17-------
let str1 = prompt("Enter your string1 here: ")
let str2 = prompt("Enter your string2 here: ")
s1=str1.split("")
s2=str2.split("")
if(s1.sort().join("")==s2.sort().join("")){
    alert("Its anagram")
}
else{
    alert("Its not anagram")
}


// ---------Question18--------
let s1 = prompt("Enter your string1: ")
let s2 = prompt("Enter your string2: ")
if (s1.trim().length==s2.trim().length){
    alert("Equal")
}
else{
    alert("Not Equal")
}


// --------Question19------
let str = prompt("Enter your string with number: ")
let num = "1234567890"
let res=''
for (i=0; i<str.length; i++){
    if (num.includes(str[i])){
        res+=str[i]
    }
}
alert(res)


// --------Question20----------
let password = prompt("Enter your password: ")
let num = 0
let upper = 0
for (i=0; i<password.length; i++){
        ch=password[i]
        if(ch>="A" && ch<="Z"){
            upper +=1
        }
        if(ch>="0" && ch<="9"){
            num +=1
        }
}
if( password.length>=8 && num!=0 && upper!=0){
    alert("Strong password")
}else{
    alert("Weak password")
}


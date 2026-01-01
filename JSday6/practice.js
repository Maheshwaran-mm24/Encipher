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




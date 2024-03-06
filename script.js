const input = document.querySelector("input");
let btn = document.querySelector(".btn");
 

 // Functio for generating random pasword 
 function randomPassword(length){
    const strongPasswordCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_';
    let password = '';

    for (let i = 0; i < length; i++) {
        
        let randomNum = Math.floor(Math.random()* strongPasswordCharset.length)
        password += strongPasswordCharset[randomNum]
        
    }
    return password;
 }; 

 let saved = randomPassword(12);
 console.log(saved);

 btn.addEventListener("click", function(){
    let saved = randomPassword(12);
    input.value = saved
 })

document.querySelector(".inside-container img").addEventListener("click", function(){
    input.select();
    document.execCommand("copy");
    alert("Do you want to copy it?")
})

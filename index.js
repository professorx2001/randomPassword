const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let block1 = document.getElementById('block1')
let block2 = document.getElementById('block2')

function randomPass(){
    
    block1.textContent = ""
    block2.textContent = ""
    let val = document.querySelector('input').value;
    if(val === ""){
        val = 15
    }
    for(let i=0; i<val; i++){
        let x = Math.floor((Math.random()*characters.length))
        let y = Math.floor((Math.random()*characters.length))
        block1.textContent += characters[x]
        block2.textContent += characters[y]
         
    }
}
function clearBtn(){
    block1.textContent = ""
    block2.textContent = ""
}




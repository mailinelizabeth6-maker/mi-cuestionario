let boton = document.getElementById("enviar");
boton.addEventListener("click",()=>{
    console.log("funciona")
    let conta =0;
let r1 = document.getElementById("Albert2").checked;
let r2 = document.getElementById("Alexander7").checked;
let r3 = document.getElementById("Charles10").checked;
let r4 =document.getElementById("Isaac13").checked;
let r5 =document.getElementById("Marie19").checked;
let r6 =document.getElementById("Nikola22").checked;
let r7 =document.getElementById("Antonie26").checked;
let r8 =document.getElementById("Gregor30").checked;
let r9 =document.getElementById("Galileo35").checked;
let r10 =document.getElementById("Stephen38").checked;
let r11 =document.getElementById("Nicolas42").checked;
let r12 =document.getElementById("Edward46").checked;
    if(r1 == true)
    {
        conta++;
    }
    if(r2 == true)
    {
        conta++;
    }
    if(r3 == true)
    {
        conta++;
    }
   if(r4 == true)
    {
        conta++;
    }
    if(r5 == true)
    {
        conta++;
    }
    if(r6 == true)
    {
        conta++;
    }
    if(r7 == true)
    {
        conta++;
    }
    if(r8 == true)
    {
        conta++;
    }
    if(r9 == true)
    {
        conta++;
    }
    if(r10 == true)
    {
        conta++;
    }
    if(r11 == true)
    {
        conta++;
    }if(r12== true)
    {
        conta++;
    }
    console.log(conta);
    let incorrectas = 12 - conta;
    localStorage.setItem("correctas", conta);
    localStorage.setItem("incorrectas", incorrectas);

    window.location.href = "resultados.html";    
})
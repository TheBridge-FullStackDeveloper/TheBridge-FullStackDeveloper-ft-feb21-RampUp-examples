console.log("Funciona!!!!");
//alert("Funciona!!!");


const style = "background-color: fuchsia";

// Selectores

// Por ID
console.log("%c ****Por ID****", style);
console.log(document.getElementById("dos").innerHTML);

// Por nombre de etiqueta/Tag
console.log("%c ****Por nombre de etiqueta/Tag****", style);
console.log(document.getElementsByTagName("p")[1].innerHTML);


console.log("****Imprimir todos los párrafos****");
const pLength = document.getElementsByTagName("p").length;

for (let i = 0; i < pLength; i++) {
    console.log(document.getElementsByTagName("p")[i].innerHTML);  
}

// Por clase

console.log(" %c****Por clase****" , style);
console.log(document.getElementsByClassName("claseP")[1].innerHTML);


console.log("****Imprimir todos los párrafos****");
const classLength = document.getElementsByClassName("claseP").length;

for (let i = 0; i < classLength; i++) {
    console.log(document.getElementsByClassName("claseP")[i].innerHTML);  
}

console.log(" %c****Eventos****" , style);

document.getElementById("btn1").addEventListener('click',function(){
    document.getElementById("result").innerHTML = "Gracias por el bizcocho. De bien nacido es ser agradecido";

})

document.getElementById("btn2").addEventListener('click',function(){

    let lista = document.getElementById("result2");
    
    if(lista.innerHTML ==""){
        // Rellena con una lista el div
        lista.innerHTML = `
        <ul>
            <li>Cerveza</li>
            <li>Vermut</li>
            <li>Pizza</li>                    
        </ul>`;
    }
    else {
        lista.innerHTML=""; // cambia lo que haya por vacio
    }
})

// QuerySelector--> selectores modernos

// Devuelve el contenido de todos los LIs
const listLength = document.querySelectorAll('ul#lista > li').length;

for (let i = 0; i < listLength; i++) {
    console.log(document.querySelectorAll('ul#lista > li')[i].innerHTML);  
}


console.log(document.querySelectorAll('ul#lista > li.item'))
console.log(document.querySelectorAll('.item'))
console.log(document.querySelectorAll('p'))
console.log(document.querySelectorAll('p.claseP'))



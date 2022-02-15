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

// Al elemento del DOM se le asocia un listener del evento "click", y se lanza una función de callback (anónima) con la tarea a realizar
document.getElementById("btn2").addEventListener('click',function(event){

    console.log(event.target);
    console.log(event.type); //click

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




// Crear elementos en el DOM desde JS
//  Crea ---> <li>This is new</li>
let newLi = document.createElement("li");
let txt = document.createTextNode("This is new.");
newLi.className="item";
newLi.appendChild(txt);

document.getElementById("lista").appendChild(newLi);

// Reemplazar

const parent = document.getElementById("lista"); // padre

let newLi2 = document.createElement("li");
let txt2 = document.createTextNode("Este es el reemplazado");
newLi2.appendChild(txt2); // nuevo elemento

let child = document.querySelectorAll("ul > li")[1]; // hijo a cambiar

parent.replaceChild(newLi2, child); 








// Cambiar estilos
console.log(" %c****Cambiar estilos****" , style);

// Para cambiar los estilos del item
const cambiarEstilosItems = (event)=> {
    console.log(event.type);
    console.log(event.target);
    event.target.classList.toggle("item_selected");

}

const resetEstilosItems = (event)=> {
    event.target.classList.toggle("item_selected");
}

// devuelve todos los  elementos .item
let items = document.getElementsByClassName("item"); 
// document.querySelectorAll(".item"); 



// A todos los elemento DOM .item se le asocia un listener del evento "click", y se lanza una función de callback (NO anónima) con la tarea a realizar

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover",cambiarEstilosItems);  
    items[i].addEventListener("mouseout",resetEstilosItems);  
}


// Validación de formularios
//document.querySelector("#form_rock") // si usara el ID
document.querySelector("form[name='form_rock']").addEventListener('submit',function(event){
    // Dr strange
    event.preventDefault(); // Frena el envío de formulario
    console.log(event.target.fname.value);
    console.log(event.target.accept.checked);

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    
    const checked = event.target.accept.checked;


    if(!checked){
        alert("Debe aceptar las condiciones de uso");
    }
    else if(fname.trim()!="" && lname.trim()!="" && email!="" && email.endsWith(".com")){
        alert("datos super correctos");
        // Se reanuda el envío del formulario
        // event.target.submit(); // Cuando enviemos el formulario "de verdad"
    }else{
        alert("datos incorrectos");
    }

})








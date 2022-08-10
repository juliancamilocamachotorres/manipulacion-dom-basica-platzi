/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = "test <a href=http://>test</a> "; */
//obtener un atributo
//console.log(h1.getAttribute('class'));

// cambiarle el valor al atributo
//h1.setAttribute('class', 'rojo');

//agregarle un valor al atributo sin borrar el anterior 
//h1.classList.add('rojo')

//elimina un valor al atributo sin borrar el o los otros
//h1.classList.remove('verde')

//no necesitamos borrar con esto cambia
//h1.classList.toggle('rojo');

//retorna un booleno
////h1.classList.contains('rojo');

/* const img = document.createElement('img');
img.setAttribute('src', 'https://wallup.net/wp-content/uploads/2019/09/162702-cat-eyes-pet.jpg');
console.log(img);


pid.innerHTML = "";
pid.append(img); */

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn= document.querySelector('#btnCalcular');

const form= document.querySelector('#form');

const pResult = document.querySelector('#result');

/* btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    if (!isNaN(Number(input1.value)) === true && !isNaN(Number(input2.value)) === true) {
        const sumaInput = Number(input1.value)+Number(input2.value);
        pResult.innerText = "Resultado: " + sumaInput;
    }else {
        pResult.innerText = "Error en algun input.";
    }
    
} */

form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    if (!isNaN(Number(input1.value)) === true && !isNaN(Number(input2.value)) === true) {
        const sumaInput = Number(input1.value)+Number(input2.value);
        pResult.innerText = "Resultado: " + sumaInput;
    }else {
        pResult.innerText = "Error en algun input.";
    }
    
}

//tambien se puede solucionar este problema con un type button 
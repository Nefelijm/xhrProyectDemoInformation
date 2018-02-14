
//Elementos del DOM que utilizaremos
const form = document.getElementById('search-form');
const label = document.getElementById('search-label');
const input = document.getElementById('search-keyword');
const inputBtn = document.getElementById('submit-btn');
let  searchText ;

//realizando el evento y dentro de ella llamamos a la funcion getNews
form.addEventListener('submit',function(e){
event.preventDefault(); 
searchText = input.value;
getNew();
});

//Funcion donde crearemos nuestra peticiones
function getNew() {
//Instanciando nuestro objeto
const articleRequest = new XMLHttpRequest();
//Abriendo la peticion
    articleRequest.open('GET',`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=91e23984f8e5409081ea47215e9e61c3`);
//onload cuando la peticion esta con exito
    articleRequest.onload = addNews;
//onerror cuando la peticion falla
    articleRequest.onerror = handleError;
//Enviando las peticiones
    articleRequest.send();
}

//Creamos  la funcion handleError()
function handleError(){
console.log('Se ha presentado un error');
}

function addNews(){
 const data = JSON.parse(this.responseText);
 const information = data.response.docs;
		console.log(information);
		//Recorrer la data
    information.forEach(function (article) {
		//Porpiedades que utilizaremos de la data
        const snippet = article.snippet;
        const page = article.print_page;
        const url = article.web_url; 
        console.log(url)       

		//Manipulacion del DOM
        let a = document.createElement('a');
        let p = document.createElement('p');
        let li = document.createElement('li');        
        const div = document.getElementById('response');
				const ul = document.getElementById('response-container');
				
		//Agregando al dom
        a.setAttribute('href', url);
        a.innerText = 'link';
        p.innerText = page;
        li.innerText = snippet;
        li.appendChild(a);
        li.appendChild(p);
        ul.appendChild(li);
        div.appendChild(ul);       

    });

    // for (var article in information) {
    //     const snippet = article.snippet;       

    //     console.log(snippet)
    //     let li = document.createElement('li');
    //     const div = document.getElementById('response');
    //     const ul = document.getElementById('response-container');

    //     li.innerText = snippet;

    //     ul.appendChild(li);
    //     div.appendChild(ul);
    // }







}
  

 




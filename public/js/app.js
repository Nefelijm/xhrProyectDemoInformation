
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
		// //Recorrer la data
    information.forEach(function (article) {
		//Porpiedades que utilizaremos de la data
        const snippet = article.snippet;
        const page = article.print_page;
				const link = article.web_url;
				const image = article.multimedia[7].url;
				console.log(image);
		      

		//Manipulacion del DOM
		    let img = document.createElement('img');
        let a = document.createElement('a');
        let p = document.createElement('p');
        let li = document.createElement('li');        
        const div = document.getElementById('response');
		    const ul = document.getElementById('response-container');
				
		//Agregando al dom
				img.setAttribute('src', `https://static01.nyt.com/${image}`)
				img.className = 'image';
				a.setAttribute('href', link);
        a.innerText = 'enlace';
        p.innerText = page; 			 			
			
				div.appendChild(ul);  
				 ul.appendChild(li); 
			  li.innerText = snippet;
			  li.appendChild(img);
			  li.appendChild(p);
			  li.appendChild(a);    

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
  

 




'use strict'

const images = [
    { 'id': '1', 'url': './img/pizza_vagana.png'},
    { 'id': '2', 'url': './img/lasanha.png'},
    { 'id': '3', 'url': './img/amburguer.png'},
]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container ) => {
    images.forEach ( Image =>{
        container.innerHTML += `
            <div class='item'>
                <img src='${Image.url}'
            </div>
        `
    })
}

 loadImages(images, containerItems);

 let items = document.querySelectorAll('.item');

 const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
 }

 const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
 }

 document.querySelector('#previous').addEventListener('click', previous);
 document.querySelector('#next').addEventListener('click', next);
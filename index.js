"use strict"
console.log("Repasando JavaScript II");

var tareas = [
{nombre: "Recoger setas en el campo", completada: true},
{nombre: "Comprar pilas", completada: true},
{nombre: "Poner una lavadora de blancos", completada: true},
{nombre: "Aprender cómo funcionan los objetos de JavaScript", completada: false}
];

var laTarea = tareas[0];

var lista = document.querySelector("ul");

lista.innerHTML = "<li>"+laTarea.nombre+"</li>";
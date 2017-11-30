'use strict';

var tasks = [
  {name: 'Recoger setas en el campo', completed: true},
  {name: 'Comprar pilas', completed: true},
  {name: 'Poner una lavadora de blancos', completed: true},
  {name: 'Aprender cómo funcionan los objetos de JavaScript', completed: false}
];

var taskList = document.querySelector('.task-list');

taskList.innerHTML = '<li>' + tasks[0].name + '</li>';

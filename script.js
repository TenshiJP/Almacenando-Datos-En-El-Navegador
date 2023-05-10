/*Importaciones*/
import {addTask} from "./components/addTask.js";
import {displayTasks} from "./components/readTask.js"

const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', addTask);
const y;
displayTasks();

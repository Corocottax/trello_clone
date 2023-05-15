import "./List.css";
import { renderTasks } from "../Task/Task";

export const createList = (list) => {
    
    const lists$$ = document.querySelector("#lists");

    lists$$.innerHTML += `
        <div class="list">
            <div class="title">
                <p>${list.title}</p>
                <img src="/assets/more.svg" class="more"/>
            </div>
            <div class="tasks" id="${list.id}">
                ${renderTasks(list.tasks)}
            </div>
            <div class="addTask">
                <img src="/assets/plus.svg"/>
                <p>Añada una tarjeta</p>
            </div>
        </div>
    `

}
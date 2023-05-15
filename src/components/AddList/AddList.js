import { initApp } from "../../../main";
import { listsData } from "../../data/listsData";
import "./AddList.css";

export const addList = () => {

  const addListToRemove$$ = document.querySelector(".addList");

  if (addListToRemove$$) {
    addListToRemove$$.remove();
  }

  const lists$$ = document.querySelector("#lists");

  const addList$$ = document.createElement("div");
  addList$$.className = "addList";
  lists$$.appendChild(addList$$);

  addList$$.innerHTML = `
        <img src="/assets/plus_white.svg"/>
        <p>Añada otra lista</p>
    `;

  //! añado escuchador de eventos
  addList$$.addEventListener("click", openFormulario);
};

const openFormulario = () => {
  const addList$$ = document.querySelector(".addList");

  addList$$.id = "form";

  addList$$.innerHTML = "";

  //? creo los elementos
  const input$$ = document.createElement("input");
  const buttonAccept$$ = document.createElement("button");
  const buttonCancel$$ = document.createElement("button");

  input$$.placeholder = "Introduzca el título de la lista...";
  buttonAccept$$.textContent = "Añadir lista";
  buttonCancel$$.textContent = "X";

  buttonAccept$$.className = "accept";
  buttonCancel$$.className = "cancel";

  //* añado los elementos dentro del div
  addList$$.appendChild(input$$);
  addList$$.appendChild(buttonAccept$$);
  addList$$.appendChild(buttonCancel$$);

  //! quito el escuchador de eventos
  addList$$.removeEventListener("click", openFormulario);

  buttonAccept$$.addEventListener("click", () => createList(input$$.value));
  buttonCancel$$.addEventListener("click", addList);
};

const createList = (title) => {

    const date = new Date()

    listsData.push({
        id: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
        title: title,
        tasks: []
    });

    localStorage.setItem("lists", JSON.stringify(listsData));

    initApp();

}
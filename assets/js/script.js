
const arrayTareas = [
    {id: 1, tarea: 'Estudiar JavaScript', completada: false},
    {id: 2, tarea: 'Estudiar React', completada: false},
    {id: 3, tarea: 'Estudiar Node.js', completada: false},
];

const listaTareas = document.querySelector('#listaTareas');
const tareasTotales = document.querySelector('#totalTareas');
const tareasCompletadas = document.querySelector('#tareasCompletadas');
const btnAgregar = document.querySelector('#btnAgregar');


renderTareas = () => {
    let html = "";
    for (const tarea of arrayTareas) {
        html += `<li style="${tarea.completada ? 'font-style: italic;color:red' : ''}">
                    <span class="descripcion">${tarea.id} : ${tarea.tarea}</span>
                    <input class="check" type="checkbox" ${tarea.completada ? 'checked' : ''} onclick="completar(${tarea.id})"> 
                    <button class="btnBorrar" onclick="borrar(${tarea.id})"> x </button>
                 </li>`;
    }
    listaTareas.innerHTML = html;
};




btnAgregar.addEventListener('click', () => {
    const tareaInput = document.querySelector('#inputTarea'); // Selecciona el input como elemento del DOM
    const tareaValue = tareaInput.value;
    const id = Date.now();
    arrayTareas.push({ id, tarea: tareaValue, completada: false });
    tareasTotales.innerHTML = totalTareas();
    tareaInput.value = "";
    renderTareas();
});


totalTareas = () => {
    const total = arrayTareas.length;
    return total;
}

completadas = () => {
    const completadas = arrayTareas.filter(tarea => tarea.completada);
    return completadas.length;
}

completar = (id) => {
    const index = arrayTareas.findIndex(tarea => tarea.id === id);
    arrayTareas[index].completada = !arrayTareas[index].completada;

    tareasCompletadas.innerHTML = completadas();
    renderTareas();
}

borrar = (id) => {
    const index = arrayTareas.findIndex(tarea => tarea.id === id);
    arrayTareas.splice(index, 1);

    tareasTotales.innerHTML = totalTareas();
    tareasCompletadas.innerHTML = completadas();
    renderTareas();
}

tareasTotales.innerHTML = totalTareas();
tareasCompletadas.innerHTML = completadas();
renderTareas();




    
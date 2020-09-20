const formaVoto= document.getElementById('formaVoto');

let animeArray = [];

document.getElementById('btnSubmit').addEventListener('click', (e) => {
    
    let nombre = document.getElementById('nombre').value;
    let personaje = document.getElementById('personaje').value;
    let villano = document.getElementById('villano').value;

    const anime = {
        nombre,
        personaje,
        villano
    };

    validarExistencia(anime);
})

const init = () => {
    localStorage.removeItem('anime');
}

const validarExistencia = (anime) => {
    let local = localStorage.getItem('anime');
    let animeArray = []
    
    animeArray.push(anime)
    
    if(local === null){
        localStorage.setItem('anime', JSON.stringify(animeArray));
        pintarDatosDeTabla()
    }else {
        let storageAntiguo = JSON.parse(localStorage.getItem('anime'));
        animeArray.push(...storageAntiguo);
        localStorage.setItem('anime', JSON.stringify(animeArray));
        pintarDatosDeTabla();
    }
}

const tabla = document.getElementById('tabla')

const pintarDatosDeTabla = () =>{
        
    let datos = JSON.parse(localStorage.getItem('anime'));
    let series = datos.map((datos, i) => {return `
    <tr>
        <th>${i}</th>
        <td>${datos.nombre}</td>
        <td>${datos.personaje}</td>
        <td>${datos.villano}</td>
    </tr>
    `});
    
    tabla.innerHTML ="";

    for(const serie of series){
        tabla.innerHTML= tabla.innerHTML+serie;
    }
        

}

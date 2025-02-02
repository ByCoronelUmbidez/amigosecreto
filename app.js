let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);

    let lista = document.getElementById('listaAmigos');
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    lista.appendChild(nuevoAmigo);

    input.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

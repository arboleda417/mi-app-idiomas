document.getElementById('startBtn').addEventListener('click', iniciarConversacion);
document.getElementById('sendBtn').addEventListener('click', enviarMensaje);

function iniciarConversacion() {
    const idioma = document.getElementById('idioma').value;
    const nivel = document.getElementById('nivel').value;
    mostrarMensaje("Asistente", "¡Hola! Vamos a practicar " + idioma + " en nivel " + nivel + ".");
}
function enviarMensaje() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        mostrarMensaje("Tú", userInput);
        document.getElementById('userInput').value = "";
        mostrarMensaje("Asistente", "Interesante. ¿Puedes decirme más sobre eso?");
    }
}
function mostrarMensaje(remitente, mensaje) {
    const chatBox = document.getElementById('chatBox');
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.textContent = remitente + ": " + mensaje;
    chatBox.appendChild(nuevoMensaje);
    chatBox.scrollTop = chatBox.scrollHeight;
}

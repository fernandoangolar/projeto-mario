
/*

OBJECTIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer

OBJECTIVO 2 - quando o usuário clicar no X devemos fechar a modal

OBJECTIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer
            - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
            - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
            - passo 3 - dar um jeito de pegar o elemento da modal no js
            - passo 4 - abrir a modal na tela

OBJECTIVO 2 - quando o usuário clicar no X devemos fechar a modal
            - passo 1 - dar jeito de pegar o elemento de fechar modal usando o js
            - passo 2 - dar um jeio de identificar quando o usuário clicar no X
            - passo 3 - fechar a modal             
*/

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
const buttonTrailer = document.querySelector('.button-trailer');
const video = document.getElementById("video");
const linkDoVideo = video.src;


function alternarModal() {
    modal.classList.toggle("aberto");
}

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
buttonTrailer.addEventListener( "click",  () => {
    //  passo 4 - abrir a modal na tela
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");

// OBJECTIVO 2 - quando o usuário clicar no X devemos fechar a modal
// passo 1 - dar jeito de pegar o elemento de fechar modal usando o js
const botãoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeio de identificar quando o usuário clicar no X
botãoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal 
    alternarModal()
    video.setAttribute("src", "" );
});

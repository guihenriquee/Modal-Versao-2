const modal = document.querySelector('.modal');
const modalBase = document.querySelector('.modal-base');
const modalConteudo = document.querySelector('.modal-conteudo');
// const btnModal = document.querySelector('.btn-modal');
const btnFechar = document.querySelector('.btn-fechar');

function abrirModal(id) {
    // console.log(id);
    modal.style.display = 'flex';
    modalBase.classList.add('slide');
    modalConteudo.scrollTop = 0;

    const titulo = document.querySelector(`#${id} h3`).outerHTML;
    const texto = document.querySelector(`#${id} div`).innerHTML;

    document.querySelector('.modal-conteudo div').innerHTML = titulo + texto;
}

btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});
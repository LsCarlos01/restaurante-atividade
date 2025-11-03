// 1. Seleciona os botões
const btnHistoria = document.getElementById('btnHistoria');
const btnCardapio = document.getElementById('btnCardapio');

// 2. Cria a função para aplicar o efeito (Mouse Enter)
function handleMouseEnter(event) {
    // Adiciona uma classe que define o estado hover no CSS
    event.currentTarget.classList.add('hover-active');
}

// 3. Cria a função para remover o efeito (Mouse Leave)
function handleMouseLeave(event) {
    // Remove a classe
    event.currentTarget.classList.remove('hover-active');
}

// 4. Adiciona os 'listeners' (ouvintes) aos botões
btnHistoria.addEventListener('mouseenter', handleMouseEnter);
btnHistoria.addEventListener('mouseleave', handleMouseLeave);

btnCardapio.addEventListener('mouseenter', handleMouseEnter);
btnCardapio.addEventListener('mouseleave', handleMouseLeave);
/* Testar clique no botão
document.addEventListener('DOMContentLoaded', function () {
    // Aguarde o carregamento completo do DOM antes de adicionar o manipulador de evento
    
    const meuBotao = document.getElementById('btn-dir');
  
    if (meuBotao) {
      meuBotao.addEventListener('click', function () {
        console.log('Botão clicado!');
      
        // Adicione seu código aqui para verificar o que deseja
      });
    } else {
      console.log('Elemento com a ID "btn-dir" não encontrado.');
    }
});
*/

/* Aguardar o carregamento da página antes de executar o script */
window.addEventListener('load', function () {

  /* Configuração do Slider */
  const slider = document.querySelector('.slider');
  const leftButton = document.querySelector('#btn-esq');
  const rightButton = document.querySelector('#btn-dir');

  let currentIndex = 0;

  leftButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
  });
    
  rightButton.addEventListener('click', () => {
      if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSlider();
      }
  });
    
  function updateSlider() {
      const translateX = -currentIndex * 1216;
      slider.style.transform = `translateX(${translateX}px)`;
  }

  /* Configurações botão de download */
  const downloadButton = document.getElementById('download-button');

  downloadButton.addEventListener('click', () => {
    const sliderImg = document.querySelector('.slider');
    const imagens = sliderImg.querySelectorAll('img');
    const nomesDaImg = ['img-one-piece1', 'img-one-piece2', 'img-one-piece3'];

    const imagePath = imagens[currentIndex].getAttribute('src');

    if (imagePath) {
      const nomeDaImg = nomesDaImg[currentIndex];
      const downloadLink = document.createElement('a');
      
      downloadLink.href = imagePath
      downloadLink.download = nomeDaImg;
      document.body.appendChild(downloadLink);

      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      alert('Nenhuma imagem para baixar');
    }
  });




});
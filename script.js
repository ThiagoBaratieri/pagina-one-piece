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



document.addEventListener('DOMContentLoaded', function () {
  /* Declarando Variáveis */
  const telaInicial = document.getElementById('tela-inicial');
  const telaQuiz = document.getElementById('tela-quiz');
  const resultadoQuiz = document.getElementById('resultado-quiz');
  const comecarQuizButton = document.getElementById('comecar-quiz');
  const marcadorPergunta = document.getElementById('marcador-pergunta');
  const perguntaConteiner = document.getElementById('pergunta-conteiner');
  const perguntaElemento = document.getElementById('pergunta');
  const opcoesElemento = document.getElementById('opcoes');
  const refazerButton = document.getElementById('refazer-botao');
  const respostasCorretas = document.getElementById('respostas-corretas');

  /* Lista com as perguntas */
  const perguntas = [
    {
        pergunta: 'Quem é o capitão dos Piratas do Chapéu de Palha?',
        opcoes: ['Luffy', 'Zoro', 'Law', 'Sanji'],
        resposta: 'Luffy'
    },
    {
        pergunta: 'Qual é a fruta do diabo de Luffy?',
        opcoes: ['Fogo-Fogo', 'Gomu-Gomu', 'Bara-Bara', 'Yami-Yami'],
        resposta: 'Gomu-Gomu'
    },
    {
        pergunta: 'Qual é o nome do navio dos Piratas do Chapéu de Palha?',
        opcoes: ['Going Merry', 'Thousand Sunny', 'Red Force', 'Going Sunny'],
        resposta: 'Thousand Sunny'
    }
  ];
  
  let perguntaAtual = 0;
  let marcadorAtual = 0;
  let acertos = 0;

  comecarQuizButton.addEventListener('click', function () {
    console.log('Apertou para começar o QUIZ', comecarQuizButton);
    // Ocultar tela inicial
    telaInicial.style.display = 'none';

    // Mostrar tela do quiz
    telaQuiz.style.display = 'block';

    // Iniciar o quiz
    iniciarQuiz();
  });

  function iniciarQuiz() {
    exibirPergunta();
}

  function reiniciarQuiz() {
    perguntaAtual = 0;
    marcadorAtual = 0;
    exibirPergunta(); // Exibe a primeira pergunta ao reiniciar o quiz
  }

  function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaElemento.textContent = pergunta.pergunta;

    // Limpe as opções anteriores
    opcoesElemento.innerHTML = '';

    // Exiba as opções
    pergunta.opcoes.forEach((opcao) => {
      const opcaoElemento = document.createElement('div');
      opcaoElemento.textContent = opcao;
      opcaoElemento.classList.add('opcao');
      opcaoElemento.addEventListener('click', () => verificarResposta(opcao));
      opcoesElemento.appendChild(opcaoElemento);
    });

    // Atualize o marcador de pergunta
    marcadorPergunta.textContent = `${perguntaAtual + 1} / ${perguntas.length}`;
  }

  function verificarResposta(respostaSelecionada) {
    const respostaCorreta = perguntas[perguntaAtual].resposta;

    if (respostaSelecionada === respostaCorreta) {
        // Resposta correta
        perguntaAtual++;
        marcadorAtual++;
        acertos++;

        if (perguntaAtual < perguntas.length) {
            exibirPergunta();
        } else {
            // Fim do quiz
            telaQuiz.style.display = 'none';
            resultadoQuiz.style.display = 'block';

            opcoesElemento.innerHTML = '';
            marcadorPergunta.textContent = '';

            refazerButton.addEventListener('click', function () {
              // Ocultar tela resultado
              resultadoQuiz.style.display = 'none';
          
              // Mostrar tela do quiz
              telaQuiz.style.display = 'block';
          
              // Iniciar o quiz
              reiniciarQuiz()
            });

          }
    } else {
        // Resposta errada (você pode adicionar lógica adicional aqui)
        perguntaAtual++;
        marcadorAtual++;
        
        if (perguntaAtual < perguntas.length) {
          exibirPergunta();
        } else {
            // Fim do quiz
            telaQuiz.style.display = 'none';
            resultadoQuiz.style.display = 'block';

            opcoesElemento.innerHTML = '';
            marcadorPergunta.textContent = '';

            refazerButton.addEventListener('click', function () {
              // Ocultar tela resultado
              resultadoQuiz.style.display = 'none';
          
              // Mostrar tela do quiz
              telaQuiz.style.display = 'block';
          
              // Iniciar o quiz
              reiniciarQuiz();
            });

        }
      }
  }


});
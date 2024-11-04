document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.before-after-slider');
    const beforeImg = document.querySelector('.before');
    const afterImg = document.querySelector('.after');
    const wrapper = document.querySelector('.before-after-wrapper');
    let isDragging = false;
  
    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.pageX);
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        updateSlider(e.pageX);
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    function updateSlider(x) {
      const rect = wrapper.getBoundingClientRect();
      const offsetX = x - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      slider.style.left = `${percentage}%`;
      beforeImg.style.clip = `rect(0, ${percentage}%, auto, 0)`;
      afterImg.style.clip = `rect(0, 100%, auto, ${percentage}%)`;
    }
  });
  

  // Mostra o botão quando a página é rolada para baixo
window.onscroll = function() {
  mostrarBotao();
};

function mostrarBotao() {
  const botao = document.getElementById("botaoTopo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      botao.style.display = "block";
  } else {
      botao.style.display = "none";
  }
}

// Volta ao topo da página quando o botão é clicado
function voltarAoTopo() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

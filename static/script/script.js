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
  
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  document.querySelectorAll('.our-job__tab').forEach((item) => {
    item.addEventListener('click', function(event) {
      const tabId = event.currentTarget.dataset.id;

      document.querySelector('.our-job__tab.active').classList.remove('active');
      document.querySelector('.our-job__card.active').classList.remove('active');

      this.classList.add('active');
      document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    });
  });

  $(function() {
    $("#accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      icons: false
    });
  });
  
  document.querySelectorAll('.faq__file-title').forEach((item) => {
    item.addEventListener('mouseover', function(event) {
      const fileId = event.currentTarget.dataset.faqtitle;
      this.classList.add('hovered');
      document.querySelector(`[data-faqtext="${fileId}"]`).classList.add('hovered');
    });

    item.addEventListener('mouseout', function(event) {
      const fileId = event.currentTarget.dataset.faqtitle;
      this.classList.remove('hovered');
      document.querySelector(`[data-faqtext="${fileId}"]`).classList.remove('hovered');
    });
  });

  document.querySelectorAll('.faq__file-text').forEach((item) => {
    item.addEventListener('mouseover', function(event) {
      const fileId = event.currentTarget.dataset.faqtext;
      this.classList.add('hovered');
      document.querySelector(`[data-faqtitle="${fileId}"]`).classList.add('hovered');
    });

    item.addEventListener('mouseout', function(event) {
      const fileId = event.currentTarget.dataset.faqtext;
      this.classList.remove('hovered');
      document.querySelector(`[data-faqtitle="${fileId}"]`).classList.remove('hovered');
    });
  });

  document.querySelector('.header__burger').addEventListener('click', function() {
    let el = document.querySelector('.header__nav-list');
    el.classList.add('active');
    el.classList.add('visible');
  });
    
  document.querySelector('.header__close-button').addEventListener('click', function() {
    let el = document.querySelector('.header__nav-list');
    el.classList.remove('active');
    setTimeout(function() {
      el.classList.remove('visible');
    }, 300);
  });
});


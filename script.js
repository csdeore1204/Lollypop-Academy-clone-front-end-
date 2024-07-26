document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('formPopup').style.display = 'block';
    document.getElementById('content').style.filter = 'blur(5px)';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('formPopup').style.display = 'none';
    document.getElementById('content').style.filter = 'none';
});

//video scrolling effect
const video = document.getElementById('myVideo');

window.addEventListener('scroll', function() {
  
  if (window.scrollY > 150) {
    video.classList.add('video-up');
  } else {
    video.classList.remove('video-up');
  }
});

//scroll text

document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

 
  if (scrollPosition > 150) {
    document.querySelector('.scroll-up-text').classList.add('animate-scroll-up');
  } else {
    document.querySelector('.scroll-up-text').classList.remove('animate-scroll-up');
  }
});


//circular text




 const roundedText = document.querySelector('.rounded-text');
    const textSpans = roundedText.querySelectorAll('span');

    const radius = 82; // Adjust the radius as needed
    const totalSpans = textSpans.length;
    const angle = (2 * Math.PI) / totalSpans;

    textSpans.forEach((span, index) => {
      const x = radius * Math.cos(angle * index);
      const y = radius * Math.sin(angle * index);
      span.style.transform = `translate(${x}px, ${y}px)`;
    });


// question part


   

    document.querySelectorAll('.accordion').forEach(button => {
      button.addEventListener('click', () => {
          const content = button.nextElementSibling;

         
          document.querySelectorAll('.accordion-content').forEach(section => {
              if (section !== content) {
                  section.classList.remove('show');
                  section.previousElementSibling.classList.remove('active');
              }
          });

        
          button.classList.toggle('active');
          content.classList.toggle('show');
      });
  });

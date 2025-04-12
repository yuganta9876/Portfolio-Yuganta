const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll(".resume-list");
const resumeBoxs = document.querySelectorAll(".resume-box");

const portfoiioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxs = document.querySelectorAll(".portfolio-box");




  
// navbar section when click on tablist
navs.forEach((nav, idx) => {
    nav.addEventListener("click", () => {
        document.querySelector('.nav-list li.active').classList.remove("active")
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove("active")
        sections[idx].classList.add('active');

        const array = Array.from(section);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')){
                sections[4].classList.add('action-contact');
            }
    });
    if(sections[0].classList.contains('active')){
        sections[4].classList.remove('action-contact')
    }
});
});

// resume section when click on tablist
resumeLists.forEach((list, idx) => {
    list.addEventListener("click", () => {
        document.querySelector('.resume-list.active').classList.remove("active")
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove("active")
        resumeBoxs[idx].classList.add('active');
    });
});
// portfolio section when tab-list
portfoiioLists.forEach((list, idx) => {
    list.addEventListener("click", () => {
        document.querySelector('.portfolio-list.active').classList.remove("active")
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove("active")
        portfolioBoxs[idx].classList.add('active');
    });
});

setTimeout(()=>{
  sections[4].classList.remove('active');
},1000);

const viewMoreBtn = document.getElementById("viewMoreBtn");

viewMoreBtn.addEventListener("click", () => {
    const idx = 3; // for example, '2' means Skills section if it's third in order
    document.querySelector('.nav-list li.active').classList.remove("active");
    navs[idx].classList.add('active');

    cube.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector('.section.active').classList.remove("active");
    sections[idx].classList.add("active");

    // handle action-contact logic if needed
    if(sections[idx].classList.contains('active')){
        sections[4].classList.add('action-contact');
    }
});


// 
(function(){
    emailjs.init("TN3Dwo5nchjlt582O"); // Your Public Key
  })();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByClassName('contact-form')[0];
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      emailjs.sendForm('service_bamc5v8', 'template_pqs1t84', this)
        .then(() => {
          alert('Message sent successfully!');
          this.reset();
        }, (error) => {
          console.error('FAILED...', error);
          alert('Failed to send. Try again later.');
        });
    });
  });


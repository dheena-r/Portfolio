
const icon = document.getElementById('instaIcon');
icon.addEventListener('click', function() {
  window.open('https://www.instagram.com/dheena_rajasekaran/profilecard/?igsh=Z3JoZjdrbHdjdnFh', '_blank'); 
});



const icon2 = document.getElementById('mailIcon');
icon2.addEventListener('click', function() {
  window.open('mailto:ddheena272@gmail.com?subject=&body=', '_blank'); 
});

const icon3 = document.getElementById('githubIcon');
icon3.addEventListener('click', function() {
  window.open('https://github.com/dheena-r'); 
});



const sayHello = document.querySelector('.contactMe-linkButton');
sayHello.addEventListener('click', function() {
  window.open('mailto:ddheena272@gmail.com?subject=&body=', '_blank'); 
});
const sideEmail = document.querySelector('.email');
sideEmail.addEventListener('click', function() {
  window.open('mailto:ddheena272@gmail.com?subject=&body=', '_blank'); 
});

    const projectlink1 = document.getElementById('textAnalyserLink');
    projectlink1.addEventListener('click', function() {
      window.open('https://dheenar-5843.zcodeusers.in/Javascript/textAnalyser/', '_blank'); 
    });

    // const projectlink2 = document.getElementById('colorgameLink');
    // link.addEventListener('click', function() {
    //   window.open('https://dheenar-5843.zcodeusers.in/Javascript/JavaScript/pomodoro/', '_blank'); 
    // });

    // const projectlink3 = document.getElementById('digitalclockLink');
    // link.addEventListener('click', function() {
    //   window.open('https://dheenar-5843.zcodeusers.in/Javascript/JavaScript/minesweeperGame/', '_blank'); 
    // });

    // const projectlink4 = document.getElementById('pomodoroLink');
    // link.addEventListener('click', function() {
    //   window.open('https://dheenar-5843.zcodeusers.in/Javascript/JavaScript/CLOCK/', '_blank'); 
    // });

    // const projectlink5 = document.getElementById('pomodoroLink');
    // link.addEventListener('click', function() {
    //   window.open('https://dheenar-5843.zcodeusers.in/Javascript/JavaScript/CLOCK/', '_blank'); 
    // });

    // const projectlink6 = document.getElementById('pomodoroLink');
    // link.addEventListener('click', function() {
    //   window.open('https://dheenar-5843.zcodeusers.in/Javascript/JavaScript/CLOCK/', '_blank'); 
    // });



// `mailto:ddheena272@gmail.com?subject=&body=`



































        (function () {
          "use strict";
          /*
           * Form Validation
           */
  
          // Fetch all the forms we want to apply custom validation styles to
          const forms = document.querySelectorAll(".needs-validation");
          const result = document.getElementById("result");
          // Loop over them and prevent submission
          Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
  
                  form.querySelectorAll(":invalid")[0].focus();
                } else {
                  /*
                   * Form Submission using fetch()
                   */
  
                  const formData = new FormData(form);
                  event.preventDefault();
                  event.stopPropagation();
                  const object = {};
                  formData.forEach((value, key) => {
                    object[key] = value;
                  });
                  const json = JSON.stringify(object);
                  result.innerHTML = "Please wait...";
  
                  fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    },
                    body: json
                  })
                    .then(async (response) => {
                      let json = await response.json();
                      if (response.status == 200) {
                        result.innerHTML = json.message;
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-green-500");
                      } else {
                        console.log(response);
                        result.innerHTML = json.message;
                        result.classList.remove("text-gray-500");
                        result.classList.add("text-red-500");
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      result.innerHTML = "Something went wrong!";
                    })
                    .then(function () {
                      form.reset();
                      form.classList.remove("was-validated");
                      setTimeout(() => {
                        result.style.display = "none";
                      }, 5000);
                    });
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        })();
      










        const hamburger = document.getElementById("hamburger");
        const navLinks = document.getElementById("nav-links");
        
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("toggle");
        });
        
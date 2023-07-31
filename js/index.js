const downloadButton = document.getElementById("download");

      // Define the onclick event function
      function redirectToGoogle() {
        window.location.href = "https://www.google.com";
      }

      // Attach the onclick event to the button
      downloadButton.onclick = redirectToGoogle;

      //hover event

      const research = document.getElementById("research");
const interface = document.getElementById("interface");
const web = document.getElementById("web");
const wireframe = document.getElementById("wireframe");

research.addEventListener("mouseenter", () => {
  research.querySelector("h3").style.display = "block";
  research.querySelector("p").style.display = "block";
});

research.addEventListener("mouseleave", () => {
  research.querySelector("h3").style.display = "none";
  research.querySelector("p").style.display = "none";
});

interface.addEventListener("mouseenter", () => {
  interface.querySelector("h3").style.display = "block";
  interface.querySelector("p").style.display = "block";
});

interface.addEventListener("mouseleave", () => {
  interface.querySelector("h3").style.display = "none";
  interface.querySelector("p").style.display = "none";
});

web.addEventListener("mouseenter", () => {
  web.querySelector("h3").style.display = "block";
  web.querySelector("p").style.display = "block";
});

web.addEventListener("mouseleave", () => {
  web.querySelector("h3").style.display = "none";
  web.querySelector("p").style.display = "none";
});

wireframe.addEventListener("mouseenter", () => {
  wireframe.querySelector("h3").style.display = "block";
  wireframe.querySelector("p").style.display = "block";
});

wireframe.addEventListener("mouseleave", () => {
  wireframe.querySelector("h3").style.display = "none";
  wireframe.querySelector("p").style.display = "none";
});


//redirect to gmail
const viewButtons = document.querySelectorAll(".view");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "https://www.gmail.com";
  });
});

//change li color to blue when clicked in header
const headerLiElements = document.querySelectorAll('header li');

headerLiElements.forEach((li) => {
  li.addEventListener('click', () => {
    li.style.color = 'blue';
  });
});

//change li color to blue when clicked in footer
const footerLiElements = document.querySelectorAll('footer li');

footerLiElements.forEach((li) => {
  li.addEventListener('click', () => {
    li.style.color = 'blue';
  });
});


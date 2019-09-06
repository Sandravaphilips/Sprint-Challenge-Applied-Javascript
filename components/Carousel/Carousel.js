/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let slideIndex = 1;

function carouselComponent() {
  const [div, div1, img, img1, img2, img3, div2] = ['div', 'div', 'img', 'img', 'img', 'img', 'div'].map(
    element => document.createElement(element)
  );

  div.classList.add("carousel");
  div1.classList.add("left-button");
  div2.classList.add("right-button");
  

  img.setAttribute('src', "./assets/carousel/mountains.jpeg");
  img1.setAttribute('src', "./assets/carousel/computer.jpeg");
  img2.setAttribute('src', "./assets/carousel/trees.jpeg");
  img3.setAttribute('src', "./assets/carousel/turntable.jpeg");

  div1.textContent = '<';
  div2.textContent = '>';

  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(img1);
  div.appendChild(img2);
  div.appendChild(img3);
  div.appendChild(div2);

  img.style.display = 'block';
  

  
  div1.onclick = function plusSlides() {
    slideIndex += (-1);
    let slideImages = [img, img1, img2, img3];
    if (slideIndex > slideImages.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slideImages.length}
    for (let i = 0; i < slideImages.length; i++) {
      slideImages[i].style.display = "none";
    }
  
    slideImages[slideIndex-1].style.display = "block";
  }
  div2.onclick = function plusSlides() {
    slideIndex += 1;
    let slideImages = [img, img1, img2, img3];
    if (slideIndex > slideImages.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slideImages.length}
    for (let i = 0; i < slideImages.length; i++) {
      slideImages[i].style.display = "none";
    }
    slideImages[slideIndex-1].style.display = "block";
  }

  
  return div;

}

document.querySelector('.carousel-container')
.appendChild(carouselComponent());





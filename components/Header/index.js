// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const [div, span, h1, span1] = ['div', 'span', 'h1', 'span1'].map(
        element => document.createElement(element)
    );

    div.classList.add('header');
    span.classList.add("date");
    span1.classList.add("temp");

    span.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    span1.textContent = '98°';

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span1);

    return div;
}

document.querySelector('.headerContainer')
.appendChild(Header())
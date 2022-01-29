import Categories from './CategoriesDisplay.js';

const Intro = () => {

    const content = document.createElement('div');
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'header';
    content.appendChild(header);

    const introBox = document.createElement('section');
    introBox.className = 'introBox';
    content.appendChild(introBox); //introBox es hijo de content

    const logo = document.createElement('img');
    logo.className = 'logoOne';
    logo.src = './images/logo&&jugar.png';
    logo.addEventListener('click', () => {
        introBox.style.display = 'none';
        document.getElementById('root').appendChild(Categories());
    });
    introBox.appendChild(logo);   //castillo es hijo de introbox

    return content;
};

export default Intro;

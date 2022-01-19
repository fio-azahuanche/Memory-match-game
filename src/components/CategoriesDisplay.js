import GameDisplay from './GameDisplay.js';


const Categories = () => {

    const createSet = (image, dataURL, text) => {
        let cardHolder = document.createElement('div');
        cardHolder.className = 'cardHolder';
        cardHolder.addEventListener('click', () => {
            let header = document.getElementById('header');
            header.classList.add('is-up');
            categoryBox.style.display = 'none';

            const showGameDisplay = (data) => {
                document.getElementById('root').appendChild(GameDisplay(data.items));
            };

            fetch(dataURL)
                .then(response => response.json())
                .then(data => {
                    showGameDisplay(data);
                })
                .catch(error => {
                    console.log(error);
                })
        });
        article.appendChild(cardHolder);

        let cardSet = document.createElement('img');
        cardSet.className = 'cardSet';
        cardSet.src = image;
        cardHolder.appendChild(cardSet);

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        cardHolder.appendChild(overlay);

        const textCard = document.createElement('div');
        textCard.className = 'textCard';
        textCard.innerHTML = text;
        overlay.appendChild(textCard);

        return cardHolder;
    }

    const content = document.createElement('div');
    const categoryBox = document.createElement('section');
    categoryBox.className = 'categoryBox';
    content.appendChild(categoryBox);

    const grid = document.createElement('div');
    grid.className = 'catGrid';
    categoryBox.appendChild(grid);

    const question = document.createElement('div');
    question.className = 'question';
    question.innerHTML = 'Elige una categoría'
    grid.appendChild(question);

    const article = document.createElement('article');
    article.className = 'categories';
    grid.appendChild(article);


    const setCiencia = createSet('images/boxCiencia.png', './data/ciencia/ciencia.json', 'Ciencia');
    const setArte = createSet('images/boxArte.png', './data/arte/arte.json', 'Arte');
    const setLiteratura = createSet('images/boxLiteratura.png', './data/literatura/literatura.json', 'Literatura');
    const setPolitica = createSet('images/boxPolitica.png', './data/politica/politica.json', 'Politica');

    article.appendChild(setCiencia);
    article.appendChild(setArte);
    article.appendChild(setLiteratura);
    article.appendChild(setPolitica);

    return categoryBox;
};

export default Categories;

import './index.scss';
import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';

let terms = [];

function addTerm(title, description) {
    terms.push({
        id: crypto.randomUUID(),
        title,
        description
    });
    terms.sort((term1, term2) => term1.title < term2.title ? -1 : 1);
    reactRoot.render(<TermList terms={terms} />);
}

const descriptionList = document.getElementById('description-list');

const reactRoot = createRoot(descriptionList);
reactRoot.render(<TermList terms={terms} />);

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
    // Отмена поведения формы по умолчанию
    event.preventDefault();

    // Получение значения полей формы
    const title = form.elements['title'].value;
    const description = form.elements['description'].value;

    // Сброс формы
    form.reset();

    // Вывод терминов на странице
    addTerm(title, description);
});
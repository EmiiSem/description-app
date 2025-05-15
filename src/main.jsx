import './index.scss';
import { createRoot } from 'react-dom/client';

const descriptionList = document.getElementById('description-list');

const reactRoot = createRoot(descriptionList);

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
    // Отмена поведения формы по умолчанию
    event.preventDefault();

    // Получение значения полей формы
    const title = form.elements['title'].value;
    const description = form.elements['description'].value;

    // Сброс формы
    form.reset();
});
console.log('script.js підключено');

const placeholderCard = document.querySelector('#placeholder-card');
placeholderCard.remove();

const CURRENT_YEAR = 2026;

const works = [
    {
        title: 'Львівська вулиця',
        year: 2025,
        category: 'вулична',
        image: 'assets/img/street.png',
        description: 'Вулиця старого Львова з жовтим трамваєм',
    },
    {
        title: 'Провулок',
        year: 2024,
        category: 'вулична',
        image: 'assets/img/clock.png',
        description: 'Вузький провулок з годинником на стіні та аркою',
    },
    {
        title: 'Будинок',
        year: 2023,
        category: 'архітектура',
        image: 'assets/img/house.png',
        description: 'Фасад старовинного будинку з ліпниною й балконом',
    },
    {
        title: 'Цвинтар',
        year: 2022,
        category: 'архітектура',
        image: 'assets/img/cemetry.png',
        description: 'Кам’яний надгробок зі скульптурою серед дерев',
    },
    {
        title: 'Магія чисел',
        year: 2021,
        category: 'вулична',
        image: 'assets/img/numbers.png',
        description: 'Вхід до бару з цифрами 69 на вивісці',
    },
    {
        title: 'Дзвіниця',
        year: 2024,
        category: 'архітектура',
        image: 'assets/img/cathedral.png',
        description: 'Дзвіниця із зеленим куполом на тлі хмар',
    },
];

const listContainer = document.querySelector('#gallery');

// Виводить у консоль роботи заданої категорії і повертає їх кількість
function printWorksByCategory(list, category) {
    console.log(`Роботи категорії «${category}»:`);
    let count = 0;
    for (const work of list) {
        if (work.category === category) {
            count++;
            console.log(`${count}. ${work.title} (${work.year})`);
        }
    }
    console.log(`Усього: ${count} з ${list.length} робіт`);
    return count;
}

// Позначає кожну роботу як архівну (старшу 3 років) або актуальну
function markOldWorks(list) {
    console.log('Вік робіт:');
    for (const work of list) {
        const age = CURRENT_YEAR - work.year;
        let label;
        if (age > 3) {
            label = 'архівна, старша 3 років';
        } else {
            label = 'актуальна';
        }
        console.log(`${work.title} (${work.year}) – ${age} р. – ${label}`);
    }
}

// Повертає true, якщо роботі не більше 2 років
const isRecent = year => (CURRENT_YEAR - year) <= 2;

printWorksByCategory(works, 'вулична');
printWorksByCategory(works, 'архітектура');

markOldWorks(works);

console.log('Перевірка isRecent:');
for (const work of works) {
    const recent = isRecent(work.year);
    const status = recent ? 'нова робота' : 'не нова';
    console.log(`${work.title} (${work.year}): ${recent} – ${status}`);
}

// Очищає галерею і створює картку article для кожної роботи масиву:
// фото з src і alt, назва в h3, рік у p; нові роботи отримують клас recent
function renderGallery(list) {
    listContainer.innerHTML = '';
    list.forEach(work => {
        const card = document.createElement('article');
        card.classList.add('card');
        card.dataset.category = work.category;
        if (isRecent(work.year)) {
            card.classList.add('recent');
        }

        const img = document.createElement('img');
        img.src = work.image;
        img.alt = work.description;

        const caption = document.createElement('div');
        caption.classList.add('card-caption');

        const title = document.createElement('h3');
        title.textContent = work.title;

        const year = document.createElement('p');
        year.classList.add('card-year');
        year.textContent = work.year;

        caption.append(title, year);
        card.append(img, caption);
        listContainer.append(card);
    });
}

renderGallery(works);

const projectsCount = document.querySelector('#projects-count');
projectsCount.textContent = `Робіт у галереї: ${works.length}`;
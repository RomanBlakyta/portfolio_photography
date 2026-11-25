console.log('script.js підключено');

const CURRENT_YEAR = 2026;

const works = [
    { title: 'Львівська вулиця', year: 2025, category: 'вулична' },
    { title: 'Провулок', year: 2024, category: 'вулична' },
    { title: 'Будинок', year: 2023, category: 'архітектура' },
    { title: 'Цвинтар', year: 2022, category: 'архітектура' },
    { title: 'Магія чисел', year: 2021, category: 'вулична' },
];

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
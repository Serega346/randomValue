const e = document.getElementById('n');

const getRandomInt = (min = 1000, max= 9999) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


const setValue = () => {
    e.textContent = getRandomInt();
};

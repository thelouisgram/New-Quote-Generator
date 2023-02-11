const btn = document.querySelector('#new-quote')
const person = document.querySelector('.person')
const quote = document.querySelector('.quote')


const quotes = [
    {
        quote : '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person : 'Nelson Mandela'
    }, {
        quote : '"The way to get started is to quit talking and begin doing."' ,
        person : 'Walt Disney'
    }, {
        quote : '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking."',
        person : 'Steve Jobs'
    }, {
        quote : '"If life were predictable it would cease to be life, and be without flavor."',
        person : 'Eleanor Roosevelt'
    }, {
        quote : '" If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
        person : 'Oprah Winfrey'
    }, {
        quote : '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."',
        person : 'James Cameron'
    }, {
        quote : '"Life is what happens when you\'re busy making other plans."',
        person : 'John Lennon'
    }, {
        quote : '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        person : 'Benjamin Franklin'
    }, {
        quote : '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
        person : 'Helen Keller'
    }, {
        quote : '"Whoever is happy will make others happy too."',
        person : 'Anne Frank'
    }, {
        quote : '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
        person : 'Ralph Waldo Emerson'
    }, ];

    btn.addEventListener('click', function(){

        let random = Math.floor(Math.random() * quotes.length);

        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;


    })
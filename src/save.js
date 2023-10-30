const text = 'lorem ipsum :)';

// тут должен быть код, который сохранит текст из переменной в файл lorem.txt 
const fs = require('fs')

fs.writeFile('lorem.txt', text, function (error) {
    if(error) {
        console.log('Произошла ошибка')
    } else {
        console.log('Файл сохранен')
    }
})
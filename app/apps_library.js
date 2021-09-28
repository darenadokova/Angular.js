var myApp = angular.module('LibraryApp', []);


myApp.controller('DefaultController', function($scope){
    $scope.books = [{
        title: "1984",
        pages: 318,
        author: 'Джордж Оруел',
        year: 2021,
        covers: 'твърди',
        src: './img/oruel.jpeg'
    },
    {
        title: "Убийство в Ориент експрес",
        pages: 640,
        author: 'Агата Кристи',
        year: 2013,
        covers: 'меки',
        src: './img/ubiistvo.jpeg'
    },
    {
        title: "Стив Джобс: Биография на основателя на Apple",
        pages: 180,
        author: 'Уолтър Айзъксън',
        year: 1976,
        covers: 'твърди',
        src: './img/stiv_biograf.jpeg'
    },
    {
        title: "Фермата на Животните",
        pages: 110,
        author: 'Джордж Оруел',
        year: 1970,
        covers: 'меки',
        src: './img/ferma.jpeg'
    },
    {
        title: "Презентирай като Стив Джобс",
        pages: 280,
        author: 'Кармайн Гало',
        year: 2011,
        covers: 'твърди',
        src: './img/prezent.jpeg'
    },
    {
        title: "Снежната кралица",
        pages: 80,
        author: 'Ангел Каралийчев',
        year: 2021,
        covers: 'меки',
        src: './img/prikazki_karal.jpeg'
    },
    {
        title: "Малкият принц",
        pages: 96,
        author: 'Антоан дьо Сент- Екзюпери',
        year: 2020,
        covers: 'меки',
        src: './img/princ.jpeg'
    },
    {
        title: "Живот в скалите",
        pages: 344,
        author: 'Мария Лалева',
        year: 2018,
        covers: 'меки',
        src: './img/jivot.jpeg'
    },
    {
        title: "Топ мистериите на България",
        pages: 256,
        author: 'Слави Панайотов',
        year: 2018,
        covers: 'меки',
        src: './img/misterii.jpeg'
    },
    {
        title: "География на блаженството:",
        pages: 384,
        author: 'Ерик Уайнър',
        year: 2021,
        covers: 'твърди',
        src: './img/geograf.jpeg'
    }
    ]
});

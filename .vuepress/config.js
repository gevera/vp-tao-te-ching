module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Tao Te Ching',
            description: 'by Lao Tzu'
        },
        '/ru/': {
            lang: 'ru-RU',
            title: 'Дао Дэ Цзин',
            description: 'Лао-Цзы'
        }
    },
    head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                searchMaxSuggestions: 12,
                nav: [
                        {
                            text: "About",
                            link: "/about"
                          },
                        {
                            text: "Wikipedia",
                            link: "https://en.wikipedia.org/wiki/Tao_Te_Ching"
                        },
                        {
                            text: "Github",
                            link: "https://github.com/gevera/vp-tao-te-ching"
                        }
                    ],
                sidebar: {
                    '/': [
                        [
                            '', 'Home Page',
                        ],
                        {
                            title: 'Book',
                            collapsable: false,
                            children: [
                                '/book/chp01',
                                '/book/chp02',
                                '/book/chp03',
                                '/book/chp04',
                                '/book/chp05',
                                '/book/chp06',
                                '/book/chp07',
                                '/book/chp08',
                                '/book/chp09',
                                '/book/chp10',
                                '/book/chp11',
                                '/book/chp12',
                                '/book/chp13',
                                '/book/chp14',
                                '/book/chp15',
                                '/book/chp16',
                                '/book/chp17',
                                '/book/chp18',
                                '/book/chp19',
                                '/book/chp20',
                                '/book/chp21',
                                '/book/chp22',
                                '/book/chp23',
                                '/book/chp24',
                                '/book/chp25',
                                '/book/chp26',
                                '/book/chp27',
                                '/book/chp28',
                                '/book/chp29',
                                '/book/chp30',
                                '/book/chp31',
                                '/book/chp32',
                                '/book/chp33',
                                '/book/chp34',
                                '/book/chp35',
                                '/book/chp36',
                                '/book/chp37',
                                '/book/chp38',
                                '/book/chp39',
                                '/book/chp40',
                                '/book/chp41',
                                '/book/chp42',
                                '/book/chp43',
                                '/book/chp44',
                                '/book/chp45',
                                '/book/chp46',
                                '/book/chp47',
                                '/book/chp48',
                                '/book/chp49',
                                '/book/chp50',
                                '/book/chp51',
                                '/book/chp52',
                                '/book/chp53',
                                '/book/chp54',
                                '/book/chp55',
                                '/book/chp56',
                                '/book/chp57',
                                '/book/chp58',
                                '/book/chp59',
                                '/book/chp60',
                                '/book/chp61',
                                '/book/chp62',
                                '/book/chp63',
                                '/book/chp64',
                                '/book/chp65',
                                '/book/chp66',
                                '/book/chp67',
                                '/book/chp68',
                                '/book/chp69',
                                '/book/chp70',
                                '/book/chp71',
                                '/book/chp72',
                                '/book/chp73',
                                '/book/chp74',
                                '/book/chp75',
                                '/book/chp76',
                                '/book/chp77',
                                '/book/chp78',
                                '/book/chp79',
                                '/book/chp80',
                                '/book/chp81'
                            ]
                        }
                    ]
                }
            },
            '/ru/': {
                selectText: 'Языки',
                label: 'Русский',
                searchMaxSuggestions: 12,
                nav: [{
                        text: "О Дао Дэ Цзин",
                        link: "/ru/about"
                      },
                      {
                        text: "Википедия",
                        link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BE_%D0%B4%D1%8D_%D1%86%D0%B7%D0%B8%D0%BD"
                      },
                      {
                        text: "Гитхаб",
                        link: "https://github.com/gevera/vp-tao-te-ching"
                      }
                ],
                sidebar: {
                    '/ru/': [
                        [
                            '', 'Главная Страница',
                        ],
                        {
                            title: 'Книга',
                            collapsable: false,
                            children: [
                                '/ru/book/chp01',
                                '/ru/book/chp02',
                                '/ru/book/chp03',
                                '/ru/book/chp04',
                                '/ru/book/chp05',
                                '/ru/book/chp06',
                                '/ru/book/chp07',
                                '/ru/book/chp08',
                                '/ru/book/chp09',
                                '/ru/book/chp10',
                                '/ru/book/chp11',
                                '/ru/book/chp12',
                                '/ru/book/chp13',
                                '/ru/book/chp14',
                                '/ru/book/chp15',
                                '/ru/book/chp16',
                                '/ru/book/chp17',
                                '/ru/book/chp18',
                                '/ru/book/chp19',
                                '/ru/book/chp20',
                                '/ru/book/chp21',
                                '/ru/book/chp22',
                                '/ru/book/chp23',
                                '/ru/book/chp24',
                                '/ru/book/chp25',
                                '/ru/book/chp26',
                                '/ru/book/chp27',
                                '/ru/book/chp28',
                                '/ru/book/chp29',
                                '/ru/book/chp30',
                                '/ru/book/chp31',
                                '/ru/book/chp32',
                                '/ru/book/chp33',
                                '/ru/book/chp34',
                                '/ru/book/chp35',
                                '/ru/book/chp36',
                                '/ru/book/chp37',
                                '/ru/book/chp38',
                                '/ru/book/chp39',
                                '/ru/book/chp40',
                                '/ru/book/chp41',
                                '/ru/book/chp42',
                                '/ru/book/chp43',
                                '/ru/book/chp44',
                                '/ru/book/chp45',
                                '/ru/book/chp46',
                                '/ru/book/chp47',
                                '/ru/book/chp48',
                                '/ru/book/chp49',
                                '/ru/book/chp50',
                                '/ru/book/chp51',
                                '/ru/book/chp52',
                                '/ru/book/chp53',
                                '/ru/book/chp54',
                                '/ru/book/chp55',
                                '/ru/book/chp56',
                                '/ru/book/chp57',
                                '/ru/book/chp58',
                                '/ru/book/chp59',
                                '/ru/book/chp60',
                                '/ru/book/chp61',
                                '/ru/book/chp62',
                                '/ru/book/chp63',
                                '/ru/book/chp64',
                                '/ru/book/chp65',
                                '/ru/book/chp66',
                                '/ru/book/chp67',
                                '/ru/book/chp68',
                                '/ru/book/chp69',
                                '/ru/book/chp70',
                                '/ru/book/chp71',
                                '/ru/book/chp72',
                                '/ru/book/chp73',
                                '/ru/book/chp74',
                                '/ru/book/chp75',
                                '/ru/book/chp76',
                                '/ru/book/chp77',
                                '/ru/book/chp78',
                                '/ru/book/chp79',
                                '/ru/book/chp80',
                                '/ru/book/chp81'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
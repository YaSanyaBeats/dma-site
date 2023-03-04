// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Virtual } from 'swiper';
Swiper.use([Navigation, Pagination, Virtual]);

const questions = [
    {
        id: 1,
        text: 'Какие задачи вы хотите решить?',
        type: 'checkbox',
        canSkip: false,
        answers: [
            {
                text: 'Улучшить интернет рекламу',
                next: [2, 4, 5]
            },
            {
                text: 'Увеличить количество/качество заявок/продаж',
                next: [2, 4, 5]
            },
            {
                text: 'Увеличить знание бренда',
                next: [2, 4, 5]
            },
            {
                text: 'Разработать стратегию',
                next: [2]
            },
            {
                text: 'Разработать сайт',
                next: [2, 5]
            },
            {
                text: 'Провести аудит текущих работ',
                next: [2]
            },
            {
                text: 'Нужна консультация',
                next: [2, 4, 5]
            },
        ]
    },
    {
        id: 2,
        text: 'Есть ли у вас действующий сайт?',
        type: 'checkbox',
        canSkip: false,
        answers: [
            {
                text: 'Да',
                next: [3]
            },
            {
                text: 'Нет'
            }
        ]
    },
    {
        id: 3,
        text: 'Введите ссылку на ваш сайт (можно пропустить)',
        type: 'text',
        canSkip: true,
    },
    {
        id: 4,
        text: 'Пользуетесь ли на данный момент рекламными услугами?',
        type: 'checkbox',
        canSkip: false,
        answers: [
            {
                text: 'Да, реклама активна',
            },
            {
                text: 'Нет, реклама приостановлена'
            },
            {
                text: 'Нет, необзодима рекламная компания с 0'
            },
            {
                text: 'Нет, необходим тестовый запуск'
            },
        ]
    },
    {
        id: 5,
        text: 'Какой бюджет в месяц вы планируете?',
        type: 'checkbox',
        canSkip: false,
        answers: [
            {
                text: 'до 200 000 ₽',
            },
            {
                text: 'от 200 000 до 1 000 000 ₽'
            },
            {
                text: 'более 1 000 000 ₽'
            },
            {
                text: 'Затрудняюсь ответить'
            },
        ]
    },
];

class Quiz{
    constructor(root, data) {
        this.root = root;
        this.data = data;
        this.slides = [];
        this.init();
    }

    renderSlides() {
        this.data.forEach((slide) => {
            let slideElem = "<div class='quiz-slide__title'>" + slide.text + "</div>";
            if(slide.type == 'checkbox') {
                slideElem += '<div class="quiz-slide__checkboxes">';
                slide.answers.forEach((question) => {
                    slideElem += `
                        <label class="quiz-checkbox">
                            <input type="radio" class="quiz-checkbox__input" name="slide` + slide.id + `">
                            <span class="quiz-checkbox__text">` + question.text + `</span>
                        </label>
                    `;
                });
                slideElem += '</div>';
            }
            else if(slide.type == 'text') {
                slideElem += '<div class="quiz-slide__title">' + slide.text + '</div>';
                if(slide.canSkip) {
                    slideElem += '<span class="quiz-tag">можно пропустить</span>';
                }
                slideElem += `
                    <div class="quiz-slide__text quiz-text">
                        <input type="text" class="quiz-text__input" name="slide` + slide.id + `" placeholder="www.website.com">
                    </div>
                `;
            }
            this.slides.push(slideElem);
        });
        console.log(this.slides);
        return this.slides;
    }

    init() {
        const quizSlider = new Swiper('.quiz__slider', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 60,
            allowTouchMove: false,
        
            // Navigation arrows
            navigation: {
                prevEl: '.quiz__slider .quiz__slider-prev-button',
                nextEl: '.quiz__slider .quiz__slider-next-button',
            },

            virtual: {
                slides: this.renderSlides()
            }
        
        });
    }
}

const quizElem = document.querySelector('.quiz');
if(quizElem !== null) {
    let quiz = new Quiz(quizElem, questions);
}
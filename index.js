let allTime = [];

function clearAllTime() {
    allTime.forEach(timeout => clearTimeout(timeout));
    allTime = [];
}

function Show(lines, duration = 1500) {
    const container = document.getElementById('container');

    //Удаляем старые строки
    const old = container.querySelectorAll('.line');
    old.forEach(line => {
        line.classList.remove('show');
        line.classList.add('hide');
        const timeout1 = setTimeout(() => line.remove(), 500);
        allTime.push(timeout1);
    });

    const showDelay = old.length > 0 ? 600 : 0;

    const timeoutShow = setTimeout(() => {
        lines.forEach((text, index) => {
            const line = document.createElement('div');
            line.className = 'line';
            line.textContent = text;
            container.appendChild(line);

            const timeout2 = setTimeout(() => {
                line.classList.add('show');
            }, index * 100);
            allTime.push(timeout2);
        });

        // Скрываем все после заданной длительности
        const timeout3 = setTimeout(() => {
            const lines = container.querySelectorAll('.line.show');
            lines.forEach(line => {
                line.classList.remove('show');
                line.classList.add('hide');
                const timeout4 = setTimeout(() => line.remove(), 500);
                allTime.push(timeout4);
            });
        }, duration);
        allTime.push(timeout3);
    }, showDelay);
    allTime.push(timeoutShow);
}

function set() {
    clearAllTime();
    const container = document.getElementById('container');
    container.innerHTML = '';
    const audio = document.getElementById('audio');

    let text = [
        // Куплет
        {
            time: 0.2,
            line: ['I', 'Wanna', 'Dance'],
            duration: 800,
            trigger: false
        },
        {
            time: 0.5,
            line: ['I', 'Wanna', 'Dance', 'In', 'The', 'Light'],
            duration: 800,
            trigger: false
        },
        {
            time: 3,
            line: ['I', 'Wanna', 'Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 4.5,
            line: ['I', 'Wanna'],
            duration: 800, trigger: false
        },
        {
            time: 4.7,
            line: ['Rock', 'You', 'Body'],
            duration: 800, trigger: false
        },
        {
            time: 6.1,
            line: ['I', 'Wanna', 'Go'],
            duration: 800,
            trigger: false
        },
        {
            time: 7.3,
            line: ['I', 'Wanna', 'Go'],
            duration: 800,
            trigger: false
        },
        {
            time: 7.5,
            line: ['For', 'А Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 10,
            line: ['Hop', 'In The', 'Music', 'And'],
            duration: 1200,
            trigger: false
        },
        {
            time: 11.1,
            line: ['Rock', 'You', 'Body'],
            duration: 1200,
            trigger: false
        },

        // Повтор куплета
                {
            time: 13,
            line: ['I', 'Wanna', 'Dance'],
            duration: 800,
            trigger: false
        },
        {
            time: 14.2,
            line: ['I', 'Wanna', 'Dance', 'In', 'The', 'Light'],
            duration: 800,
            trigger: false
        },
        {
            time: 17.2,
            line: ['I', 'Wanna', 'Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 18.4,
            line: ['I', 'Wanna', 'Rock', 'You', 'Body'],
            duration: 800, trigger: false
        },
        {
            time: 20.8,
            line: ['I', 'Wanna', 'Go'],
            duration: 800,
            trigger: false
        },
                {
            time: 21.4,
            line: ['I', 'Wanna', 'Go'],
            duration: 800,
            trigger: false
        },
        {
            time: 21.7,
            line: ['For', 'А Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 24.6,
            line: ['Hop', 'In The', 'Music', 'And'],
            duration: 1200,
            trigger: false
        },
        {
            time: 25,
            line: ['Rock', 'You', 'Body'],
            duration: 1200,
            trigger: false
        },

        // Припев
        {
            time: 28,
            line: ['Rock', 'That', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 28.7,
            line: ['C`mon', 'C`mon'],
            duration: 800,
            trigger: false
        },
        {
            time: 30,
            line: ['Rock', 'That', 'Body', '(Rock', 'You', 'Body)'],
            duration: 800,
            trigger: false
        },
        {
            time: 31.5,
            line: ['Rock', 'That', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 32.2,
            line: ['C`mon', 'C`mon'],
            duration: 800,
            trigger: false
        },
        {
            time: 33.5,
            line: ['Rock', 'That', 'Body'],
            duration: 1500,
            trigger: false
        },
    ];

    audio.addEventListener('timeupdate', () => {
        const time = audio.currentTime

        text.forEach((obj) => {
            if (time >= obj.time && !obj.trigger) {
                obj.trigger = true
                Show(obj.line, obj.duration)
            }
        })
    })
    audio.play();
}
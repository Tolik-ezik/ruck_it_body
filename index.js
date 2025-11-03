let allTime = []

//очистка таймера
function clearAllTime() {
    allTime.forEach(timeout => clearTimeout(timeout));
    allTime = [];
}

//выводим текст
function Show(lines, duration = 1500) {
    const container = document.getElementById('container')

    const old = container.querySelectorAll('.line')

    //удаяляем старые строки
    old.forEach(line => {
        line.classList.add('hide');
        const timeout1 = setTimeout(() => line.remove(), 500);
        allTime.push(timeout1);
    })

    //показываем ноые строки
    lines.forEach((text, index) => {
        const line = document.createElement('div');
        line.className = 'line';
        line.textContent = text;
        container.appendChild(line);

        const timeout2 = setTimeout(() => {
            line.classList.add('show');
        }, 50 + index * 100);
        allTime.push(timeout2);
    });

    // Скрываем все
    const timeout3 = setTimeout(() => {
        const currentLines = container.querySelectorAll('.line');
        currentLines.forEach(line => {
            line.classList.add('hide');
            const timeout4 = setTimeout(() => line.remove(), 500);
            allTime.push(timeout4);
        });
    }, duration);
    allTime.push(timeout3);


}

function set() {
    clearAllTime();
    const container = document.getElementById('container');
    container.innerHTML = '';
    const audio = document.getElementById('audio')

    let text = [
        //куплет
        {
            time: 0.2,
            line: ['I', 'Wanna', 'Dance'],
            duration: 800,
            trigger: false
        },
        {
            time: 1,
            line: ['I', 'Wanna', 'Dance', 'In', 'The', 'Light'],
            duration: 800,
            trigger: false
        },
        {
            time: 2,
            line: ['I', 'Wanna', 'Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 3,
            line: ['I', 'Wanna', 'Rock', 'You', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 4,
            line: ['I', 'Wanna', 'Go'],
            duration: 800,
            trigger: false
        },
        {
            time: 5,
            line: ['I', 'Wanna', 'Go', 'For', 'А Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 6,
            line: ['Hop', 'In The', 'Music And', 'Rock', 'You', 'Body'],
            duration: 800,
            trigger: false
        },

        //повтор куплета
        {
            time: 7,
            line: ['I', 'Wanna', 'Dance'],
            duration: 800,
            trigger: false
        },
        {
            time: 8,
            line: ['I', 'Wanna', 'Dance', 'In', 'The', 'Light'],
            duration: 800,
            trigger: false
        },
        {
            time: 9,
            line: ['I', 'Wanna', 'Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 10,
            line: ['I', 'Wanna', 'Rock', 'You', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 11,
            line: ['I', 'Wanna', 'Go'],
            duration: 800,
            trigger: false
        },
        {
            time: 12,
            line: ['I', 'Wanna', 'Go', 'For', 'А Ride'],
            duration: 800,
            trigger: false
        },
        {
            time: 13,
            line: ['Hop', 'In The', 'Music And', 'Rock', 'You', 'Body'],
            duration: 800,
            trigger: false
        },
        //припев
        {
            time: 14,
            line: ['Rock', 'That', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 15,
            line: ['C`mon', 'C`mon'],
            duration: 800,
            trigger: false
        },
        {
            time: 16,
            line: ['Rock', 'That', 'Body', 'Rock', 'You', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 17,
            line: ['Rock', 'That', 'Body'],
            duration: 800,
            trigger: false
        },
        {
            time: 18,
            line: ['C`mon', 'C`mon'],
            duration: 800,
            trigger: false
        },
        {
            time: 19,
            line: ['Rock', 'That', 'Body'],
            duration: 800,
            trigger: false
        },
    ]

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

function createPopup(text, x, y, speed) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.left = x + "rem";
    popup.style.top = y + "rem";

    const textElement = document.createElement("div");
    textElement.className = "text";
    popup.appendChild(textElement);
    document.body.appendChild(popup);

    let i = 0;
    const write = () => {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(write, speed);
        }
    };
    write()
    setTimeout(() => popup.remove(), text.length * speed + 1000)
}

async function set() {
    const audio = document.getElementById('audio')

    let text = [
        {
            time: 1, items: [
                { text: "Rock", x: 30, y: 15, speed: 100 },
                { text: "You", x: 41, y: 20, speed: 150 },
                { text: "Body", x: 51, y: 25, speed: 200 }
            ]
        },

        {
            time: 3, items: [
                { text: "Rock", x: 31, y: 15, speed: 100 },
                { text: "That", x: 51, y: 15, speed: 150 },
                { text: "Body", x: 41, y: 25, speed: 100 }
            ]
        },

        {
            time: 5, items: [
                { text: "C'mon", x: 41, y: 15, speed: 150 },
                { text: "C'mon", x: 41, y: 20, speed: 100 }]
        },

    ]

    audio.addEventListener('timeupdate', () => {
        const time = audio.currentTime

        text.forEach((obj, index) => {
            if (time >= obj.time) {
                obj.items.forEach((item, i) => {
                    const delay = 150 * i
                    setTimeout(() => createPopup(item.text, item.x, item.y, item.speed), delay);
                });
            }
        })
    })
    audio.play();
}





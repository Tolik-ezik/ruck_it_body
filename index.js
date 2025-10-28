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
            time: 0, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Dance", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Dance", x: 51, y: 25, speed: 200 },
                { text: "In", x: 30, y: 15, speed: 100 },
                { text: "The", x: 41, y: 20, speed: 150 },
                { text: "Light", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Ride", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Rock", x: 51, y: 25, speed: 200 },
                { text: "You", x: 30, y: 15, speed: 100 },
                { text: "Body", x: 30, y: 15, speed: 100 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Go", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Go", x: 51, y: 25, speed: 200 },
                { text: "For", x: 30, y: 15, speed: 100 },
                { text: "А Ride", x: 41, y: 20, speed: 150 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "Hop", x: 30, y: 15, speed: 100 },
                { text: "In The", x: 41, y: 20, speed: 150 },
                { text: "Music And", x: 51, y: 25, speed: 200 },
                { text: "Rock", x: 30, y: 15, speed: 100 },
                { text: "You", x: 41, y: 20, speed: 150 },
                { text: "Body", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        //повтор
        {
            time: 0, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Dance", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Dance", x: 51, y: 25, speed: 200 },
                { text: "In", x: 30, y: 15, speed: 100 },
                { text: "The", x: 41, y: 20, speed: 150 },
                { text: "Light", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Ride", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Rock", x: 51, y: 25, speed: 200 },
                { text: "You", x: 30, y: 15, speed: 100 },
                { text: "Body", x: 30, y: 15, speed: 100 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Go", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "I", x: 30, y: 15, speed: 100 },
                { text: "Wanna", x: 41, y: 20, speed: 150 },
                { text: "Go", x: 51, y: 25, speed: 200 },
                { text: "For", x: 30, y: 15, speed: 100 },
                { text: "А Ride", x: 41, y: 20, speed: 150 }
            ], trigger: false
        },
        {
            time: 1, items: [
                { text: "Hop", x: 30, y: 15, speed: 100 },
                { text: "In The", x: 41, y: 20, speed: 150 },
                { text: "Music And", x: 51, y: 25, speed: 200 },
                { text: "Rock", x: 30, y: 15, speed: 100 },
                { text: "You", x: 41, y: 20, speed: 150 },
                { text: "Body", x: 51, y: 25, speed: 200 }
            ], trigger: false
        },
        //припев
        {
            time: 3, items: [
                { text: "Rock", x: 31, y: 15, speed: 100 },
                { text: "That", x: 51, y: 15, speed: 150 },
                { text: "Body", x: 41, y: 25, speed: 100 }
            ], triggered: false
        },

        {
            time: 5, items: [
                { text: "C'mon", x: 41, y: 15, speed: 150 },
                { text: "C'mon", x: 41, y: 20, speed: 100 }
            ], triggered: false
        },
        {
            time: 3, items: [
                { text: "Rock", x: 31, y: 15, speed: 100 },
                { text: "That", x: 51, y: 15, speed: 150 },
                { text: "Body", x: 41, y: 25, speed: 100 },
                { text: "Rock", x: 31, y: 15, speed: 100 },
                { text: "You", x: 51, y: 15, speed: 150 },
                { text: "Body", x: 41, y: 25, speed: 100 },
            ], triggered: false
        },
        {
            time: 3, items: [
                { text: "Rock", x: 31, y: 15, speed: 100 },
                { text: "That", x: 51, y: 15, speed: 150 },
                { text: "Body", x: 41, y: 25, speed: 100 }
            ], triggered: false
        },

        {
            time: 5, items: [
                { text: "C'mon", x: 41, y: 15, speed: 150 },
                { text: "C'mon", x: 41, y: 20, speed: 100 }
            ], triggered: false
        },
                {
            time: 3, items: [
                { text: "Rock", x: 31, y: 15, speed: 100 },
                { text: "That", x: 51, y: 15, speed: 150 },
                { text: "Body", x: 41, y: 25, speed: 100 }
            ], triggered: false
        },
    ]

    audio.addEventListener('timeupdate', () => {
        const time = audio.currentTime

        text.forEach((obj, index) => {
            if (time >= obj.time && !obj.trigger) {
                obj.trigger = true
                obj.items.forEach((item, i) => {
                    const delay = 150 * i
                    setTimeout(() => createPopup(item.text, item.x, item.y, item.speed), delay);
                });
            }
        })
    })
    audio.play();
}





let angle = 0;
        const bottle = document.querySelector('#bottle');
        const btn = document.querySelector('#btn');

        btn.addEventListener('click', function () {
            angle = angle + 4 * 360 + Math.random() * 360;
            bottle.style.transform = `rotate(${angle}deg)`;
        });
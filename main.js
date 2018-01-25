const keyboard = {
    topRow: "qwertyuiop[]\\",
    midlleRow: "asdfghjkl;'",
    bottomRow: "zxcvbnm,./",
    creatKeys: function (row, placement) {
        let key;
        for (keyNumber = 0; keyNumber < row.length; keyNumber++) {
            key = document.createElement('div');
            key.textContent = row[keyNumber];
            key.classList.add('key');
            placement.appendChild(key);
        }
    },
    creatLayout: function () {
        let keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        document.body.appendChild(keyboard);
        for(let i = 0; i < 3; i++) {
           let = keyboard.innerHTML += '<div class="row"></div>';
        }
        const ROWS = document.querySelectorAll('.row');
        this.creatKeys(this.topRow, ROWS[0]);
        this.creatKeys(this.midlleRow, ROWS[1]);
        this.creatKeys(this.bottomRow, ROWS[2]);
        const SPACE = document.createElement('div');
        SPACE.classList.add('key');
        SPACE.style.width = "350px";
        SPACE.innerHTML = " ";
        keyboard.appendChild(SPACE);
        const TYPEAREA = document.createElement('pre');
        TYPEAREA.classList.add('type-area');
        keyboard.before(TYPEAREA);
        
        const typing = (event) => {
            let symbol = event.target.innerHTML;
            if (event.target.classList.contains('key')){
                TYPEAREA.textContent += symbol;
            
            }
        };
        keyboard.addEventListener('click', typing);
    }
}
keyboard.creatLayout();
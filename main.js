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
    }
}
keyboard.creatLayout();
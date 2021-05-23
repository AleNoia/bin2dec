function bin2dec() {
    this.binSeletor = document.querySelector('.bin'); // Binary number
    this.resSelector = document.querySelector('.result'); // Result div
    let dec = 0; // Result

    // ======================================== [START CONVERT]
    this.start = () => {
        this.binSeletor.focus();
        this.listenConvertEvent();
        this.listenEnter();
    }
    
    // ======================================== [LISTEN THE CONVERT EVENT]
    this.listenConvertEvent = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('convert')) this.convert();
        })
    }

    // ======================================== [LINTER ENTER TO CALL CONVERT FUNCTION]
    this.listenEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.convert()
        })
    }

    // ======================================== [CONVERT FUNCTION]
    this.convert = () => {
        let bin = this.binSeletor.value
        for (var i = 0; i < bin.length; i++) {
            // CONVERT
            dec = dec + parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i); // CONVERT
        }
        // PUTTING RESULTS IN THE DIV
        this.resSelector.innerHTML = dec 
    }
}

const binTwoDec = new bin2dec();
binTwoDec.start();
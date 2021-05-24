function bin2dec() {
    this.binSeletor = document.querySelector('.bin'); // Binary number
    this.resSelector = document.querySelector('.result'); // Result div
    let dec = 0; // Result

    // ======================================== [START CONVERT]
    this.start = () => {
        this.binSeletor.focus(); //Starts focus on input
        this.listenConvertEvent();
        this.listenEnter();
    }

    // ======================================== [LISTEN THE CONVERT EVENT]
    this.listenConvertEvent = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('convert')) this.convert();
            if (el.classList.contains('copy')) this.copyResult();
        })
    }

    // ======================================== [LISTEN ENTER TO CALL CONVERT FUNCTION]
    this.listenEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.convert()
            if (e.keyCode === 67) this.copyResult()
        })
    }

    // ======================================== [CONVERT FUNCTION]
    this.convert = () => {
        dec = 0
        let bin = this.binSeletor.value
        let test = /^[01]+$/g.test(bin);

        // Conditional to accept only 0 and 1
        if (!test) {
            this.resSelector.value = "Enter only 1 or 0";
            return;
        }

        try {
            for (var i = 0; i < bin.length; i++) {
                // CONVERT
                dec = dec + parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
            }
        } catch {
            this.resSelector.value = "Error"
        }
        // PUTTING RESULTS IN THE DIV
        this.resSelector.value = dec
    }

    // ======================================== [COPY]
    this.copyResult = () => {
        let copyValue = this.resSelector;
        copyValue.select();
        document.execCommand('copy');
    }

}

const binTwoDec = new bin2dec();
binTwoDec.start();

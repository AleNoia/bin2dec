function bin2dec() {
    let dec = 0;
    this.binSeletor = document.querySelector('.bin');
    let bin = this.binSeletor.value

    this.start = () => {
        this.binSeletor.focus();
        for (var i = 0; i < bin.length; i++) {
            dec = dec + parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
        }
    }

}

const binTwoDec = new bin2dec();
binTwoDec.start();
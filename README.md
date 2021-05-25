# 👨‍💻 Bin2dec

Bin2Dec allows the user to enter binary digits, 0's and 1's, and then displays its decimal equivalent, in any sequence and then displays its decimal equivalent implemented with JavasCript.

![image](https://user-images.githubusercontent.com/82424777/119282290-7ea1db00-bc0f-11eb-9ac3-96a094b0ff29.png)
 
[App-ideas](https://github.com/florinpop17/app-ideas) repository project / **Tier: beginner**

If you want to contact, mail me or send a message on Twitter

📧 igornoiasilva@gmail.com / ☕ [@IgorNoiaSilva](https://twitter.com/IgorNoiaSilva)

***
# 📌 Table of Contents
* 💡 [Features](#features)
* 🎯 [Purpose](#Purpose)
* 🛠 [Installation](#Installation)
* 📝 [Utilization](#Utilization)
* 🤝 [Contributing](#Contributing)
* 🧾 [License](#License)
***

# <a name="features"></a>💡 Features

* ⇆ Convert a binary number to decimal
* 📋 Copy the result

***

# <a name="Purpose"></a>🎯 Purpose

My purpose with this project is how to do a binary number converter.

During this project I learned too:

  * learn more about Javascript 
  * make a different UI
  * how to copy a value from an element

***

# <a name="Installation"></a>🛠 Installation

You need to download [git](https://git-scm.com) initially

Run this command to clone the repository:

```git

git clone https://github.com/AleNoia/bin2dec.git

```

***

# <a name="Utilization"></a>📝 Utilization

It is a very simple to use Bin2Dec

### 1. Insert the binary number into the first input
### 2. Click the convert button
```javascript
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
```
### 3. The result will come out in the second input
### 4. You can copy the result

 ![image](https://user-images.githubusercontent.com/82424777/119283158-88790d80-bc12-11eb-84fa-49092da4bf9b.png)

```javascript
// ======================================== [COPY]
this.copyResult = () => {
    let copyValue = this.resSelector;
    copyValue.select();
    document.execCommand('copy');
}
```

***
# <a name="Contributing"></a>🤝 Contributing

Feel free to contribute 🙂

***
# <a name="License"></a>🧾 License

Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/bin2dec/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 👋

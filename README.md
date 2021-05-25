<h1 align="center">
    👨‍💻 Bin2dec
</h1>
<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AleNoia/bin2dec?color=%2304D361"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/AleNoia/bin2dec"> <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AleNoia/bin2dec"> <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md">
  <img src="https://img.shields.io/badge/App%20Ideas%20-Beginner-%2304D361">
</a>
</p>

Bin2Dec allows the user to enter binary digits, 0's and 1's, and then displays its decimal equivalent, in any sequence and then displays its decimal equivalent.

![image](https://user-images.githubusercontent.com/82424777/119282290-7ea1db00-bc0f-11eb-9ac3-96a094b0ff29.png)

***
# 📌 Table of Contents
* 💡 [Features](#features)
* 🎯 [Purpose](#Purpose)
* 🛠 [Installation](#Installation)
* 📝 [Utilization](#Utilization)
* 🤝 [Contributing](#Contributing) 
* 🛠 [Technologies Used](#TechnologiesUsed)
* 👋 [Author](#Author)
* 🧾 [License](#License)
***

# <a name="features"></a>💡 Features

* ⇆ Convert a binary number to decimal
* 📋 Copy the result

***

# <a name="Purpose"></a>🎯 Purpose

My purpose with this project is how to do a binary number converter.

During this project I learned too:

  * more about Javascript 
  * make a different UI
  * how to copy a value from an element

***

# <a name="Installation"></a>🛠 Installation

You need to download [git](https://git-scm.com) initially

Run this command to clone the repository:

```git

git clone https://github.com/AleNoia/bin2dec.git

```
### 🎲 Runnig
Start the ```index.html``` file in the ```src``` folder

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
# <a name="TechnologiesUsed"></a>🛠 Technologies used

Technologies that were used in the construction of the project:

- [HTML](https://html.com)
- [SCSS](https://sass-lang.com)
- [JavaSript](https://www.javascript.com)

***
# <a name="Contributing"></a>🤝 Contributing

1. Fork the project.
2. Create a new branch with your changes: ```git checkout -b my-feature```
3. Save your changes and create a commit message telling you what you did: ```git commit -m" feature: My new feature "```
4. Submit your changes: ```git push origin my-feature```

> If you have any questions check [this guide](https://github.com/unform/unform/blob/main/.github/CONTRIBUTING.md) on how to contribute
 
Feel free to contribute 🙂

***
# <a name="Author"></a>👋 Author

### [Igor Noia Silva](https://github.com/AleNoia)

If you want to contact, mail me or send a message on Twitter

[![Gmail Badge](https://img.shields.io/badge/-alexandreigor88@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:alexandreigor88@gmail.com)](mailto:alexandreigor88@gmail.com)  ![badge](https://img.shields.io/twitter/url?label=%40IgorNoiaSilva&style=social&url=https%3A%2F%2Ftwitter.com%2FIgorNoiaSilva)

***
# <a name="License"></a>🧾 License

Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/bin2dec/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 👋

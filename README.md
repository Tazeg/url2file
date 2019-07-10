# Welcome to url2file 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

[![Twitter: JeffProd](https://img.shields.io/twitter/follow/JeffProd.svg?style=social)](https://twitter.com/JeffProd)

> Download any file on the internet with progress status

### 🏠 [Homepage](https://jeffprod.com)

## Install

```sh
npm install url2file
```

## Usage

```javascript
const { Download } = require('url2file');

let mydl = new Download('https://github.githubassets.com/images/icons/emoji/unicode/1f680.png', '/home/user/rocket.png');
mydl.on('error', (err) => {
  console.error(err)
})
mydl.on('progress', (percent) => {
  console.log(percent + '%');
})
mydl.on('end', () => {
  console.log('ended')
});
```

## Test

```sh
npm run test
```

## Author

👤 **Jean-François**

* Twitter: [@JeffProd](https://twitter.com/JeffProd)
* Github: [@Tazeg](https://github.com/Tazeg)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/Tazeg/url2file/issues).

## Show your support

Give a ⭐️ if this project helped you!

[DONATE](https://en.jeffprod.com/donate/)


## 📝 License

Copyright © 2019 [@JeffProd](https://github.com/Tazeg).

This project is [SEE LICENSE IN LICENSE](https://github.com/Tazeg/url2file/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
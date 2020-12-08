# Tenor API

![Tenor](https://user-images.githubusercontent.com/17960677/101523435-9c0b2180-39ae-11eb-9544-b83cceaf6457.png)

>**Unofficial Tenor API**

## Example

The Following Code snipet will help you understand how to use this.

```js 
var Tenor = require("tenor-api");
var tenor = new Tenor();

(async function() {
  await tenor.login("username","password");
  // or
  await tenor.addToken("token");

  await tenor.upload("path_to_media");
})();
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Form-Data

## Credits

* [Tenor](https://tenor.com) For Creating an excellent Platform.

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information


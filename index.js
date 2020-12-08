var axios = require("axios");
var fd = require("form-data");
var fs = require("fs");

module.exports = class Tenor {
  constructor() {}

  async login(username,password) {
    this.username = username;
    this.password = password;
    var token = await axios({
      url: 'https://www.riffsy.com/keyboard.login?username='+this.username+'&password='+this.password
    });
    this.token = token.data.auth.token;
    this.uid = token.data.user.id;
    return token.data;
  }

  async addToken(token) {
    this.token = token;
    var uid = await axios({
      url: 'https://www.riffsy.com/keyboard.user?token='+this.token
    });
    this.uid = uid.data.user.id;
    return uid.data;
  }

  async upload(path,tags) {
    var data = new fd();
    data.append("token",this.token);
    data.append("collectionid","keyboarduser-"+this.uid);
    data.append("stream","savedriffs");
    data.append("tags",tags || "gif");
    data.append("platform","android");
    data.append("file",fs.createReadStream(path));
    var result = await axios({
      url: 'https://www.riffsy.com/keyboard.uploadgifandroid',
      method: 'POST',
      data: data,
      headers: data.getHeaders()
    });
    return result.data;
  }
}

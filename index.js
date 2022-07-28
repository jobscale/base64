class Base64 {
  constructor() {
    this.base64 = this;
  }

  encode(str) {
    if (typeof window !== 'undefined') {
      return btoa(unescape(encodeURIComponent(str)));
    }
    return Buffer.from(str).toString('base64');
  }

  decode(str) {
    if (typeof window !== 'undefined') {
      return decodeURIComponent(escape(atob(str)));
    }
    return Buffer.from(str, 'base64').toString();
  }
}

module.exports = new Base64();

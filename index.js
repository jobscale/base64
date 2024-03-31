(() => {
  class Base64 {
    constructor() {
      this.base64 = this;
      this.Base64 = Base64;
    }

    encode(str) {
      if (typeof window !== 'undefined') {
        return btoa(unescape(encodeURIComponent(str)));
      }
      return Buffer.from(str).toString('base64');
    }

    decode(str) {
      if (typeof window !== 'undefined') {
        return decodeURIComponent(String.escape(atob(str)));
      }
      return Buffer.from(str, 'base64').toString();
    }
  }

  const base64 = new Base64();
  if (typeof module !== 'undefined') module.exports = base64;
  if (typeof window !== 'undefined') window.base64 = base64;
})();

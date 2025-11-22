export class Base64 {
  constructor() {
    this.base64 = this;
    this.Base64 = Base64;
  }

  encode(bin) {
    if (typeof window === 'undefined') {
      return Buffer.from(bin).toString('base64');
    }

    let binary = '';
    const bytes = typeof bin === 'string'
      ? new TextEncoder().encode(bin)
      : new Uint8Array(bin);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  decode(str, type) {
    if (typeof window === 'undefined') {
      const buffer = Buffer.from(str, 'base64');
      return type === 'utf-8' ? buffer.toString('utf-8') : buffer;
    }

    const binary = atob(str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    if (type === 'utf-8') {
      return new TextDecoder('utf-8').decode(bytes);
    }
    return bytes.buffer;
  }
}

export const base64 = new Base64();
export default {
  Base64,
  base64,
};

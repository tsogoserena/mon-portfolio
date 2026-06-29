import { jwtDecode } from "jwt-decode";

class Utils {
  static isTokenExpired(token: string) {
    if (!token) return true;

    try {
      const decoded: { exp: number } = jwtDecode(token);

      return Date.now() / 1000 > decoded.exp;
    } catch {
      return true;
    }
  }
}

export default Utils;

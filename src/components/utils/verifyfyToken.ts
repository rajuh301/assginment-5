import { jwtDecode, JwtPayload } from 'jwt-decode'; // Use named import

export const verifyToken = (token: string): JwtPayload |any| null => {
  try {
    return jwtDecode<JwtPayload>(token); 
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

// Importa la librería 'jsonwebtoken' para trabajar con tokens JWT
import jwt from "jsonwebtoken";

// Importa la clave secreta del token desde la configuración de la aplicación
import { TOKEN_SECRET } from "../config.js";

// Define un middleware llamado 'authRequired'
export const authRequired = (req, res, next) => {
  // Obtiene el token desde las cookies de la solicitud
  const { token } = req.cookies;

  // Si no hay token, responde con un código de estado 401 (No autorizado)
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  // Verifica la validez del token utilizando la clave secreta
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    // Si hay un error en la verificación, responde con un código de estado 403 (Prohibido)
    if (err) return res.status(403).json({ message: "Invalid token" });

    // Si el token es válido, agrega la información del usuario a la solicitud ('req.user')
    req.user = user;

    // Llama a la función 'next()' para pasar al siguiente middleware o ruta
    next();
  });
};

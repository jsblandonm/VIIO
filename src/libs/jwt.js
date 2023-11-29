// Importa la constante TOKEN_SECRET del archivo de configuración
import { TOKEN_SECRET } from "../config.js";

// Importa la biblioteca 'jsonwebtoken'
import jwt from "jsonwebtoken";

// Define la función 'createAccessToken' que toma un objeto 'payload' como parámetro
export function createAccessToken(payload) {
  // Retorna una nueva promesa que ejecuta la lógica de creación del token
  return new Promise((resolve, reject) => {
    // Utiliza el método 'sign' de 'jsonwebtoken' para crear un token
    jwt.sign(
      // Payload: La información que se incluirá en el token (por ejemplo, datos del usuario)
      payload,

      // Clave secreta para firmar el token (extraída del archivo de configuración)
      TOKEN_SECRET,

      // Configuración adicional, como el tiempo de expiración (en este caso, 1 día)
      {
        expiresIn: "1d",
      },

      // Callback que se ejecuta después de crear el token
      (err, token) => {
        // Si hay un error, rechaza la promesa con el error
        if (err) reject(err);

        // Si no hay error, resuelve la promesa con el token creado
        resolve(token);
      }
    );
  });
}

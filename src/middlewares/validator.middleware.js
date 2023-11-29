// Define una función de middleware llamada 'validateSchema' que toma un esquema como parámetro
export const validateSchema = (schema) => (req, res, next) => {
  try {
    // Intenta analizar y validar el cuerpo de la solicitud con el esquema proporcionado
    schema.parse(req.body);

    // Si la validación tiene éxito, pasa al siguiente middleware o ruta
    next();
  } catch (error) {
    // Si hay errores de validación, responde con un código de estado 400 (Solicitud incorrecta)
    // y devuelve los mensajes de error en formato JSON
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};

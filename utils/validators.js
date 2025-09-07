const validators = {
  user: (user) => {
    if (!user.username) return "El nombre de usuario es obligatorio";
    if (!user.email) return "El email es obligatorio";
    if (!user.password || user.password.length < 6) return "La contraseña debe tener al menos 6 caracteres";
    return null;
  },
  character: (character) => {
    if (!character.name) return "El nombre es obligatorio";
    if (character.age && character.age < 0) return "La edad no puede ser negativa";
    return null;
  },
  location: (location) => {
    if (!location.name) return "El nombre es obligatorio";
    if (location.dangerLevel && !["Bajo", "Medio", "Alto"].includes(location.dangerLevel)) {
      return "El nivel de peligro debe ser Bajo, Medio o Alto";
    }
    return null;
  }
};

module.exports = validators;
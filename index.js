const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const characterRoutes = require("./routes/characterRoutes");
const locationRoutes = require("./routes/locationRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>🌿 The Last of Us API</h1>
    <p>Bienvenido a la API de The Last of Us. Endpoints disponibles:</p>
    <ul>
      <li><a href="/api/characters">/api/characters</a></li>
      <li><a href="/api/locations">/api/locations</a></li>
    </ul>
    <footer style="margin-top:30px;">
      <p>👨‍💻 Alumno: Santiago Medina</p>
      <p>📘 Materia: Aplicaciones Híbridas</p>
      <p>👨‍🏫 Docente: [Completar]</p>
      <p>📝 Comisión: [Completar]</p>
    </footer>
  `);
});

app.use("/api/characters", characterRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
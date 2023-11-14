import { conn } from "../db.js";


export const getTiempos = async (req, res) => {
  const [rows] = await conn.query('SELECT * FROM tiemposjuego ORDER BY TiempoCompletado ASC')
  res.json(rows)
}

export const createUsuario = async (req, res) => {
  const { NombreUsuario } = req.body;
  const [rows] = await conn.query(
    "INSERT INTO usuarios (NombreUsuario) SELECT ? FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE NombreUsuario = ?)",
    [NombreUsuario, NombreUsuario]
  );
  if (rows.affectedRows > 0) {
    res.send({
      id: rows.insertId,
      NombreUsuario
    });
  } else {
    res.status(400).send("El nombre de usuario ya existe. Por favor, elige otro nombre de usuario.");
  }
};


export const createPuntajes = async (req, res) => {
  const { UsuarioID, UserName, TiempoCompletado } = req.body;
  const [rows] = await conn.query(
    "INSERT INTO tiemposjuego (UsuarioID, UserName, TiempoCompletado) VALUES (?, ?, ?)",
    [UsuarioID, UserName, TiempoCompletado]
  );
  res.send({
      id:rows.insertId,
      UserName, 
      TiempoCompletado
  });
}

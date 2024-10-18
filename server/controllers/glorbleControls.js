import { pool } from "../config/database.js";

const getAllGlorbles = async (_,  response) => {
  const allQuery = `SELECT * FROM glorbles ORDER BY id ASC`

  try {
    const data = await pool.query(allQuery);
    response.status(200).json(data.rows);
  } catch (error) {
    response.status(409).json({
      error: error.message
    });
  }
}

const getGlorbleById = async (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id) || id <= 0) {
    return response.status(400).json({ error: "Invalid Glorble ID" });
  }

  try {
    const singleQuery = `SELECT * FROM glorbles WHERE id = $1`;

    const result = await pool.query(singleQuery, [id]);
    if (!result.rows.length) {
      return response.status(404).json({
        message: "Glorble not found! :("
      });
    }
    response.status(200).json(result.rows[0]);
  } catch (error) {
    response.status(409).json({
      error: error.message
    });
  }
}

const createGlorble = async (request, response) => {
  try {
    const { name, color, hat, shoes, glasses, price } = request.body;

    const insertQuery = `
      INSERT INTO glorbles (name, color, hat, shoes, glasses, price)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    await pool.query(insertQuery, [name, color, hat, shoes, glasses, price]);
    response.status(201);
  } catch (error) {
    console.error('Error creating Glorble :( - ', error);
    response.status(409).json({
      error: error.message
    });
  }
}

const changeGlorble = async (request, response) => {
  const { name, color, hat, shoes, glasses, price } = request.body;
  const id = parseInt(request.params.id);

  if (isNaN(id) || id <= 0) {
    return response.status(400).json({ error: "Invalid Glorble ID" });
  }
  try {
    const changeQuery = `
    UPDATE glorbles
    SET 
        name = $1,
        color = $2,
        hat = $3,
        shoes = $4,
        glasses = $5,
        price = $6
    WHERE id = $7
  `;

    const results = await pool.query(changeQuery, [name, color, hat, shoes, glasses, price, id]);
    response.status(200).json(results.rows[0]);
  } catch (error) {
    response.status(409).json({
      error: error.message
    });
  }
}

const deleteGlorble = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const deleteQuery = `DELETE FROM glorbles WHERE id = $1`;

    const results = await pool.query(deleteQuery, [id]);
    response.status(200).json(results.rows[0]);
  } catch (error) {
    response.status(409).json({
      error: error.message
    });
  }
}

export {
  getAllGlorbles,
  getGlorbleById,
  createGlorble,
  changeGlorble,
  deleteGlorble
}
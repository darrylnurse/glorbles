import { pool } from "./database.js";

const createGlorblesTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS gorbles;

        CREATE TABLE IF NOT EXISTS gorbles (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            color VARCHAR(255) NOT NULL,
            hat VARCHAR(255),
            shoes VARCHAR(255),
            glasses VARCHAR(255)
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("Glorbles table created successfully.");
  } catch(error) {
    console.error("Error creating glorbles table", error);
  }
}

createGlorblesTable().catch(console.error);
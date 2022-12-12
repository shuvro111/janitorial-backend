import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const db = process.env.db;
const secret = process.env.JWT_SECRET;
const client = process.env.CLIENT_BASE_URL;

export default { port, db, secret, client };

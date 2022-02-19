import express from 'express';
import { router } from './routes';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config()


createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [
        `src/domain/entities/*.ts`
    ]
}).then(() => {
    console.log('Connected to database');
})

const app = express()

app.use(express.json())
app.use(router)

export { app }
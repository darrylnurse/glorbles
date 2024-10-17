import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import glorbleRouter from "./routes/glorbleRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', glorbleRouter);

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    );
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})
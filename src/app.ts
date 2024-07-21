import express from 'express'
import routes from './routes/index';
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",routes);

export default app;
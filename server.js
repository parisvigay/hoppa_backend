import 'dotenv/config.js'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import './models/Pub.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
import express, {type Express,} from "express";
import morgan from "morgan";
import helmet from "helmet";

import authRouter from "./src/routes/User.ts"
import apiRouter from "./src/routes/Api.ts";
import factRouter from "./src/routes/Facts.ts"
import speciesRouter from "./src/routes/Species.ts";
import {authApiKey} from "./src/middleware/Auth.ts";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"))
app.use(helmet())
app.set("trust proxy", true)


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

// Auth Routes
app.use("/auth", authRouter)
app.use("/api", apiRouter)
app.use("/fact", authApiKey, factRouter)
app.use("/species", authApiKey, speciesRouter)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
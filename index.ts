import express, {type Express} from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import authRouter from "./src/routes/User";
import apiRouter from "./src/routes/Api";
import factRouter from "./src/routes/Facts";
import speciesRouter from "./src/routes/Species";
import analyticsRouter from "./src/routes/Analytics";
import {authApiKey} from "./src/middleware/Auth";

const app: Express = express();

// CORS configuration - be more specific in production
app.use(
    cors({
        origin: process.env.NODE_ENV === 'production'
            ? ['https://penguins.boatmans.org', 'https://www.penguins.boatmans.org']
            : true,
        credentials: true,
    }),
);

app.use(express.json());

// Only use morgan in development to avoid serverless function timeouts
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan("dev"));
}

app.use(helmet());
app.set("trust proxy", true);

// Health check endpoint
app.get("/", (req, res) => {
    res.json({
        message: "PenguinAPI is running!",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
});

// API Routes
app.use("/auth", authRouter);
app.use("/api/v1", apiRouter);
app.use("/api/v1/fact", factRouter);
app.use("/api/v1/species", authApiKey, speciesRouter);
app.use("/api/v1/analytics", analyticsRouter);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        error: {
            name: "InternalServerError",
            message: process.env.NODE_ENV === 'production'
                ? "An unexpected error occurred"
                : err.message,
            status: 500
        }
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: {
            name: "NotFoundError",
            message: `Route ${req.originalUrl} not found`,
            status: 404
        }
    });
});

// Only listen in development
if (process.env.NODE_ENV !== 'production') {
    const port = Number(process.env.PORT) || 3000;
    app.listen(port, "0.0.0.0", () => {
        console.log(`Listening on port ${port}`);
    });
}


export default app;
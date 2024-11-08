import { createWriteStream } from "fs";
import pino from "pino";
const stream = createWriteStream("./logs/app.log");

const logger = pino({
    level: process.env.LOG_LEVEL || "info",
    transport: {
        target: "pino-datadog",
        options: {
            service: "my-app",
            env: process.env.NODE_ENV || "development",
            ddsource: "node.js",
            ddtags: "source:my-app"
        }
    }
}, stream);

const customFormat

export default logger;
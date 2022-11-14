import { config } from "dotenv";

config();

export default {
    SECRET: 'wayapp-api',
    PORT:  process.env.PORT || 4000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/wayappdb"
}

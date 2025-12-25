import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: [
            "http://localhost:5173", 
            "http://localhost:3000", 
            "http://localhost:5174"
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }
));


//API Route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the backend server!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => { // Listen on all network interfaces to allow access from other containers
    console.log(`Server is running on port ${PORT}`);
});
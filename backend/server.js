const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/{*splat}", (req, res) =>
{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((err, req, res, next) =>
{
    if (!err.status)
    {
        res.status(500).json({ error: "Internal Server Error" });

        return;
    }

    res.status(err.status).json({ error: err.message });
});

const PORT = process.env.PORT || 11004;

app.listen(PORT, () =>
{
    console.log(`Running on port ${PORT}`);
});

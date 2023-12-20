const cors = require("cors");
const express = require("express");
const app = express();

app.listen(process.env.PORT || 8080, () =>
    console.log("Nailscape API: http://localhost:8080")
);

app.use(cors());

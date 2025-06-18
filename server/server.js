const cors = require('cors');
const express = require("express");
const app = express();
const port = 3000;
const corsOption = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOption));

app.listen(port, ()=>{
    console.log(`Server Is running on port ${port}`);
})
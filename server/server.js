const cors = require('cors');
const express = require("express");
const app = express();
const port = 3000;
const terminals = require("./temp_data.json");
const corsOption = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOption));

app.listen(port, ()=>{
    console.log(`Server Is running on port ${port}`);
})

app.get('/api/terminals', (req, res)=>{
    res.status(200).send(terminals)
});
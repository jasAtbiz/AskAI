const express = require("express");
const cors = require("cors");
require('dotenv').config()

const PORT =  8000;

const app = express();

// It parses/reades incoming JSON requests and puts the parsed/read data in req.
app.use(express.json());
app.use(cors());

app.post("/completions", async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            message: [{role: "user", content: "Hey, how are you buddy ?"}],
            max_tokens: 100
        })
    }
    
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        res.send(data);
    }catch(err) {
        console.log("err", err)
    }
})

app.listen(PORT, () => {
    console.log(`Your server is running on PORT http://localhost:${PORT}`);
})

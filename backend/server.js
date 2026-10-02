const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/submit" , (req , res) => {
    const {name , email , subject , message} = req.body;

    const data = fs.readFileSync("data.json" , "utf-8");

    const user = JSON.parse(data);

    user.push({
        name : name,
        email : email,
        subject : subject,
        message : message,
    });

    fs.writeFileSync("data.json" , JSON.stringify(user , null , 2));

    res.json({
        success :  true,
    });
});

app.post("/api/testimonials" , (req , res) => {
    const {name , designation , review} = req.body;

    const data =  fs.readFileSync("./test.json" , "utf-8");

    const testimonials = JSON.parse(data);

    const newTestimonial = {
        id: Date.now(),
        name,
        designation,
        review
    };

    testimonials.testimonials.push(newTestimonial);

    fs.writeFileSync("./test.json" , JSON.stringify(testimonials , null , 2));


    res.status(201).json(newTestimonial);
});

app.get("/api/testimonials", (req, res) => {
  const data = fs.readFileSync("./test.json", "utf-8");

  const testimonials = JSON.parse(data);

  res.json(testimonials.testimonials);
});

app.listen(3000 , () => {
    console.log(`Server is running on http://localhost:3000`);
});
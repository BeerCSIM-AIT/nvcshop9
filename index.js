const express = require('express');
const app = express();
// const ejs = require('ejs');

app.set('view engine', 'ejs');

// app.use((request, response) => {
//     response.send("Hello Express! Ho ho ho ...")
// });

app.get("/", (request, response)=>{
    // response.send("Home");
    response.render('index');
});

app.get("/about", (request, response)=>{
    // response.send("About");
    response.render('about');
});

app.get("/product/:id", (request, response)=>{
    let id = request.params.id;
    // response.send("Product Number:  " + id);
    response.render('product',{ pid: id } );
});

app.listen(3000, ()=>{
    console.log("App is running on port 3000.");
    console.log("Good");
} );





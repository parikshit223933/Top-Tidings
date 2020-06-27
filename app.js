const express       = require("express");
const app           = express();
const routes        = require("./src/backEnd/routes") //it will automatically take index name file
const PORT          = process.env.PORT || "5000";

app.use(express.json()); //parse body
app.use(express.urlencoded({ extended: false }));
require("./src/backEnd/routes")(router);

app.use('/', routes);

//Listen SERVER
app.listen(PORT, (error)=>
{
    if(error)
    {
        console.log(`Error in running the server @ port ${PORT}`);
        return;
    }
    console.log(`Server is running on the port ${PORT}`);
})
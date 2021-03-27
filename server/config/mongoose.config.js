const mongoose = require('mongoose');
const dbname = "products"

mongoose.connect("mongodb://localhost/" + dbname, {
useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Established connection to the database"))
    .catch( (err) => console.log("Having issues connecting the to database", err));
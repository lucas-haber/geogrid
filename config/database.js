const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://geogrid:VkvFTNDwNUI3t3cP@cluster0.j23hohs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        useNewUrlParser: true
    })
    .then(() => console.log("CARALHO MERMÃOOOOOOO"))
    .catch((err) => console.log(err))

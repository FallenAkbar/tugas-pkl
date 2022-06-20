import database from "./database.js"

import Laptop from "./models/Laptop.js"

database.sync({force : true})
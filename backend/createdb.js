import sqlite3 from "sqlite3"
import {open} from "sqlite"
import path from "node:path"


    
   export let db=await open({
        filename:path.join("Database.db"),
        driver:sqlite3.Database
    })


await db.exec(`CREATE TABLE IF NOT EXISTS data(
   user INTEGER,
   companyname TEXT,
   position TEXT,
   status INTEGER,
   date TEXT)`)




   
    




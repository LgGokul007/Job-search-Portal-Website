import { db } from "./createdb.js";


async function access() {

    try {

        const deleteDb = await db.exec(`ALTER TABLE users`)
        console.log("table created")
    }

    catch (err) {
        console.log(err)
    }

}
access()
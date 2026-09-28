import { db } from "../createdb.js"

export async function PostApiController(req, res) {
  

    try {

        if (!req.session.userId) {
            return res.status(400).json({
                "status": "failed",
                "message": "not logged in"
            })
        }
        else {
            const { companyname, position, status, date } = req.body

            const inserted = await db.run(`INSERT INTO data(user,companyname,position,status,date) VALUES(?,?,?,?,?)`,
                [req.session.userId, companyname, position, status, date])


            if (inserted.changes === 0) {
               return res.status(400).json({
                    "status": "failed",
                    "message": "not inserted into db"
                })
            }
            else {
                return res.json({
                    "status": "success",
                    "message": "data enterd db"

                })
            }

        }
    }
    catch (err) {
        res.json({
            "status": "failed",
            "message": err
        })
    }
}
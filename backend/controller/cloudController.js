import cloudinary from "../config/cloudinary.js"

export async function cloudController(req,res){
    if(!req.file){
        return res.json({
            "status":"failed",
            "message":"no image found"
        })
    }

    try{

    let result=await new Promise((resolve,reject)=>{

    const stream=cloudinary.uploader.upload_stream({folder:"Job portal app"},(error,success)=>{
        if(error){
            reject(error)
        }
        else{
            resolve(success)
        }
    })
    stream.end(req.file.buffer)

    })

    return(result.secure_url)

}
catch(err){
    console.log(err)
}

}
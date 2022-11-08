
const {Router} =require("express")
const { JobModel } = require("../models/jobPosting.model")

const sortByDateController = Router()

sortByDateController.get("/get", async (req,res)=>{


const {sortBy} = req.query

console.log(sortBy)

if(sortBy==="asc"){
    const searched_data = await JobModel.find().sort({postedAt :1})
console.log(searched_data)

    res.send({"search_data":searched_data})
}

if(sortBy ==="desc"){
    const searched_data = await JobModel.find().sort({postedAt :-1})
    console.log(searched_data)
    
        res.send({"search_data":searched_data})
}

})

module.exports = {
    sortByDateController
}


const {Router, response} =require("express")
const { JobModel } = require("../models/jobPosting.model")

const searchByLanguageController = Router()


searchByLanguageController.get("/get",async (req,res)=>{

    // const {language} = req.query

    const searched_data = await JobModel.find(req.query)

    res.send({"searched_data":searched_data})
})

module.exports ={
    searchByLanguageController
}

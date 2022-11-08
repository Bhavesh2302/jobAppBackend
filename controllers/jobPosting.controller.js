

const {Router} =require("express")
const { JobModel } = require("../models/jobPosting.model")

const jobPostingController = Router()


jobPostingController.get("/get",async (req,res)=>{

    const jobPostings = await JobModel.find(req.query).limit(10)
    console.log(jobPostings)


    res.send({"jobPostings":jobPostings})
})

jobPostingController.post("/create" , async (req,res)=>{

    const new_posts = new JobModel(req.body)
    await new_posts.save()
    console.log(new_posts)

    res.send({"msg":"Job Posting Created"})
})

module.exports = {
    jobPostingController
}
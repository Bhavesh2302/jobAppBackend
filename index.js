
const express =require("express")

require("dotenv").config()
const cors =require("cors")
const { connection } = require("./configs/db")
const { jobPostingController } = require("./controllers/jobPosting.controller")
const { sortByDateController } = require("./controllers/sortByDate.model")
const { searchByLanguageController } = require("./controllers/searchByLanguage.controller")
const app =express()

const PORT = process.env.PORT || 7500

app.use(cors())

app.use(express.json())

app.use("/jobPosts",jobPostingController)
app.use("/sort",sortByDateController)
app.use("/search",searchByLanguageController)

app.get("/",(req,res)=>{
    res.send("job app")
})
app.listen(PORT, async ()=>{
    try {
        await connection
        console.log("http://localhost:7500")
    } catch (error) {
        console.log(error)
    }
})
const express = require("express");
// const jwt=require("jwt");
const cors=require("cors");
const {createTodo}=require("./types");
const {todo}=require("./db");
const app=express();
const port=3000
app.use(cors());
app.use(express.json());



app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success ){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    const data=await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false,
    })
    res.json({
        title:data.title,
        description:data.description,
        msg:"Todo created"
    })
})


app.get("/todos", function(req,res){
    try{
        todo.find({}).then(function(data){
            res.json({
                data,
            })
        })
}
catch(e){
    res.json({
        msg:"Something unexpected happened",
    })
}
})


app.put("/completed",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success ){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true,
    })
    res.json({
        msg:"Todo marked as completed",
    })

})

app.listen(port);
console.log(`Server is listening on the port ${port}`)

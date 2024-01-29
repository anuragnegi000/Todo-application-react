import {useState} from "react";
export function CreateTodo(props){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div>
        <input type="text" placeholder="Title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br></br>
        <input type="text" placeholder="Description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}></input><br></br>

        <button onClick={function(){
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description,
                }),headers:{
                    "Content-type":"application/json "
                }
            }).then(async function(res){
                const json=await res.json();
                alert("Todo added");
            })
        }}>Add todo</button>
    </div>
}
import { BugReportTwoTone } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

function Pagenation(){
    const [result,setResult]=useState(null)
    function handleDelete(event) {
        var status = window.confirm("do you want to delete " + event.currentTarget.getAttribute("em"))
        //alert(event.currentTarget.getAttribute("em"))
        if(status == true)
        axios.delete("http://localhost:8080/delete", {params:{
            email: event.currentTarget.getAttribute("em")
        }}).then((res)=>{
            console.log(res.data)
            setResult(null)
        })
    }

    function handleEdit(event) {
        var email = event.currentTarget.getAttribute("em")
        var name = event.currentTarget.getAttribute("name")
        var password = event.currentTarget.getAttribute("pass")
        var role = event.currentTarget.getAttribute("role")
        document.getElementById("idemail").value=email
        document.getElementById("idname").value=name
        document.getElementById("idpass").value=password
        document.getElementById("idrole").value=role
        document.getElementById("idupdate").style.display="block"
    }

    function handleUpdate(){
       var email= document.getElementById("idemail").value
       var name= document.getElementById("idname").value
       var password= document.getElementById("idpass").value
       var role= document.getElementById("idrole").value
       axios.put("http://localhost:8080/update",{
        email:email,
        name:name,
        password:password,
        role:role
       }).then((res)=>{
        console.log(res.data)
        setResult(null)
       })


    }

    function page(p){
        axios.get("http://localhost:8080/page",{params:{
            p:p,
            l:2
        }}).then((res)=>{
             console.log(res.data)
             setResult(res.data)
        })
    }
    if (result== null)
     return (
     <div>
        Data Fetching
        <button onClick={()=>{page(0)}} >Page 1</button>
        <button onClick={()=>{page(1)}} >Page 2</button>
        <button onClick={()=>{page(2)}} >Page 3</button>
     </div>
     );
     else{
        return(
            <div>
                <table border="1">
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                { 
                //JSON.stringify(result)
                result.map((obj)=>{
                    return(
                        <tr>
                            <td>{obj.name}</td>
                            <td>{obj.role}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                            <td> <i className="fa fa-edit" onClick={handleEdit} em={obj.email} name ={obj.name} pass = {obj.password} role = {obj.role}></i> </td>
                            <td> <i className="fa fa-trash" onClick={handleDelete} em={obj.email}></i> </td>
                        </tr>
                    )
                })
                }
                </table>
                This is Show Page
                <br/><br/>
                <div style ={{display:"none"}} id ="idupdate">
                    email : <input type = "text" id = "idemail" disabled />
                    name : <input type = "text" id = "idname" />
                    password : <input type = "password" id = "idpass" />
                    role : <input type = "text" id = "idrole" />
                    <button onClick={handleUpdate}>update</button>
                </div>
                
            </div>
        );
     }
}
export default Pagenation
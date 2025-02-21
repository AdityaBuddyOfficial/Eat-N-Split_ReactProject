// import "./Style.css"

import { useState } from "react"
import Button from "./button"

const FormAddFriend = (props:any) => {

    const[name,setName]=useState("");
    const[imageUrl,setImageUrl]=useState("https://i.pravatar.cc/48?u=118836");

const add="Add"

function handleNewUser(e:any)
{
    e.preventDefault();

    if(!name ||!imageUrl)return

    const newUser={
        name,imageUrl,balance:0,id:crypto.randomUUID
    }

props.setFriendsData(newUser)
setName('');

}  
    return (
        <>
            <form className='form-add-friend' onSubmit={handleNewUser}>
                <label>😎 Friend Name</label>
                <input type="text" value={name} onChange={(e:any)=>setName(e.target.value)}/>
                <label>📸 Image Url</label>
                <input type="text" value={imageUrl} onChange={(e:any)=>setImageUrl(e.target.value)} />

                <Button data={add} ></Button>
            </form>
        </>
    )
}

export default FormAddFriend

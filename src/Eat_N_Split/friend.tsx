import Button from "./button"
import"./Style.css"

const Friend = (props:any) => {
const select="select"
const close="close";



// console.log("🚀 ~ Friend ~ props.isSplitFormOpen in friendComp:", props.isSplitFormOpen.id
// )
let isOpen=false;
if (props.isSplitFormOpen) {
    isOpen=props.isSplitFormOpen.id===props.friend.id;
} else {
  console.log("🚀 ~ Friend ~ props.isSplitFormOpen is null");
}


   
  return (
<>
<li>
   <img src={props.friend.image} alt={props.friend.name} />
   <h3>{props.friend.name}</h3>

   {props.friend.balance<0 && 
   <p className="red"> You owe {props.friend.name} {Math.abs(props.friend.balance)}€</p>}

   {props.friend.balance>0 && 
   <p className="green">{props.friend.name} owes you {Math.abs(props.friend.balance)}€</p>}

   {props.friend.balance===0 && 
   <p className="red">You and {props.friend.name} are even</p>}

<Button data={isOpen?close:select} function={()=>props.openSplitForm(props.friend)}/>
   </li>
</>
  )
}



export default Friend

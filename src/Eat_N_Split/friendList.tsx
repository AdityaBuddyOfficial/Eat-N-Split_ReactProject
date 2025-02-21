import Friend from "./friend"


const FriendList = (props:any) => {
  
  return (
   <>
   <ul>
   {props.friend.map((friend:any)=>(
    <Friend friend={friend} key={friend.id}  openSplitForm={props.openSplitForm} isSplitFormOpen={props.isSplitFormOpen} />
   ))}
   </ul>
  
   </>
  )
}
  
export default FriendList

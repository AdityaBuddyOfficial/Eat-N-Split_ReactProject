

import { useState } from 'react';
import Button from './Eat_N_Split/button';
import FormAddFriend from './Eat_N_Split/formAddFriend';
import FormSplitBill from './Eat_N_Split/formSplitBill';
import FriendList from './Eat_N_Split/friendList';
import "./Eat_N_Split/Style.css"

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
const [friendsData,setFriendsData]=useState(initialFriends)
  console.log("🚀 ~ App ~ friendsData:", friendsData)
  const [isAddFormOpen, setIsAddFormOpen] = useState(true)
  const[isSplitFormOpen,setIsSplitFormOpen]=useState(null)
  console.log("🚀 ~ App ~ isSplitFormOpen:", isSplitFormOpen)

  function handleAddForm()
  {
    setIsAddFormOpen(true)
  }
  function handleAddFormOff()
  {
    setIsAddFormOpen(false)
  }

  function addNewFriend(friend:any)
  {
    setFriendsData((e)=>[...friendsData,friend])
  }

  function openSplitForm(userData:any)
  {
    setIsSplitFormOpen((e:any)=>e && e.id===userData.id?null:userData)
  }

//   function handleSplit(value:any)
//   {
// console.log("value",value)
// setFriendsData(friend=>friend.map((friend)=>friend.id===isSplitFormOpen?.id?{ ...friend, balance: friend.balance + value }
// : friend))


//   }
  function handleSplit(value:any) {
    setFriendsData((friends) =>
      friends.map((friend) =>
        friend?.id === isSplitFormOpen?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setIsSplitFormOpen(null);
  }



  const Add_Friend = "Add Friend";
  const close_tag="Close form";

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendList friend={friendsData}  openSplitForm={ openSplitForm} isSplitFormOpen={isSplitFormOpen} />
          <Button data={isAddFormOpen?close_tag:Add_Friend} function={!isAddFormOpen? handleAddForm:handleAddFormOff}></Button>

        </div>
{isSplitFormOpen &&       <FormSplitBill isSplitFormOpen={isSplitFormOpen} handleSplit={handleSplit} />}
  
      </div>

      {isAddFormOpen &&
      <>

        < FormAddFriend setFriendsData={addNewFriend} />
        {/* <Button data={close_tag} function={handleAddFormOff}/> */}
        </>
      }

      
    </>
  )
}

export default App

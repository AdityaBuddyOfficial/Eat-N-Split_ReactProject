import React, { useState } from 'react'
import Button from './button'

const FormSplitBill = (props: any) => {

  console.log("🚀 ~ FormSplitBill ~   props.isSplitFormOpen:", props.isSplitFormOpen)

  const split_Bill = "Split Bill"

  const [BillValue, setBillValue] = useState();
  console.log("🚀 ~ FormSplitBill ~ BillValue:", BillValue)
  const [myExpense, setMyExpense] = useState();
  console.log("🚀 ~ FormSplitBill ~ myExpense:", myExpense)
  const friendExpense = Number(BillValue) - Number(myExpense)
  const [paying, setPaying] = useState("user");
  console.log("🚀 ~ FormSplitBill ~ paying:", paying)


  function handleSubbmit(e) {
    e.preventDefault();
if(!BillValue || !myExpense)return
props.handleSplit(paying==="user"?friendExpense:-myExpense)
  }
  return (
    <>
      <form className='form-split-bill' onSubmit={handleSubbmit} >
        <h2>Split a bill with {props.isSplitFormOpen.name}</h2>
        <label>🧾 Bill Value</label>
        <input type="text" value={BillValue} onChange={(e: any) => setBillValue(e.target.value)} />

        <label>🙋‍♂️ Your Expense</label>
        <input type="text" value={myExpense} onChange={(e: any) => setMyExpense(Number(e.target.value) > BillValue ? myExpense : Number(e.target.value))} />

        <label>👯 Your Friend Expense</label>
        <input type="text" value={friendExpense} disabled />

        <label >🤑 who is paying the bill</label>
        <select value={paying} onChange={(e: any) => setPaying(e.target.value)} >
          <option value="user">
            you
          </option>
          <option value="friend">
            friend
          </option>
        </select>

        <Button data={split_Bill} function={props.handleSplit}/>
      </form>
    </>
  )
}


export default FormSplitBill

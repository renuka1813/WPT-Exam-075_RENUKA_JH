import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [meassage,setMessage]=useState("");
  const [meassageList,setMessageList]=useState("[]");
  const processmessage =(e)=>{
    setMessage(e.target.value);
  }
  const handlesend=()=>{
    const newList=[meassage,...messageList];
    setmeassageList(newList);
    setMessage("");
  }
  return 
  <div>
    <header>
      MyChatApp
    </header>
    <div>
      <input type ="text" value={meassage} placeholder ="chat here..."  onchange={processmessage}/>
      <input type ="button"  value="send" onClick={handlesend}/>
    </div>
    {messageList.map((item,index)=>(
      <div key = {index}>{item}</div>))}
  </div>
 }
 


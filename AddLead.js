import {useState} from "react";

function AddLead(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[source,setSource]=useState("");
const[notes,setNotes]=useState("");

const submitLead=()=>{

alert("Lead Added");

setName("");
setEmail("");
setSource("");
setNotes("");
};

return(

<div className="form">

<h2>Add New Lead</h2>

<input
placeholder="Client Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Source"
value={source}
onChange={(e)=>setSource(e.target.value)}
/>

<textarea
placeholder="Notes"
value={notes}
onChange={(e)=>setNotes(e.target.value)}
></textarea>

<button onClick={submitLead}>
Add Lead
</button>

</div>

);
}

export default AddLead;

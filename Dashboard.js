import Navbar from "./Navbar";
import AddLead from "./AddLead";
import LeadCard from "./LeadCard";

function Dashboard(){

const leads=[
{
id:1,
name:"Rahul Sharma",
email:"rahul@gmail.com",
source:"Website",
status:"New",
notes:"Interested in Web Development"
},
{
id:2,
name:"Priya Reddy",
email:"priya@gmail.com",
source:"LinkedIn",
status:"Contacted",
notes:"Requested pricing details"
}
];

return(

<div>

<Navbar/>

<div className="dashboard">

<AddLead/>

<div className="cards">

{
leads.map((lead)=>(
<LeadCard
key={lead.id}
lead={lead}
/>
))
}

</div>

</div>

</div>

);
}

export default Dashboard;

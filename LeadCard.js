function LeadCard({lead}){

return(
<div className="card">

<h3>{lead.name}</h3>

<p>Email: {lead.email}</p>

<p>Source: {lead.source}</p>

<p>Notes: {lead.notes}</p>

<span className="status">
{lead.status}
</span>

</div>
);
}

export default LeadCard;

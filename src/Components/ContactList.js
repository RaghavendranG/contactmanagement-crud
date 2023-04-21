import React from "react";
import Base from "../Base/Base";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";


const ContactList = ({ contactData, setContactData }) => {

  const history = useHistory()

  const removeContact = (id) => {
    const deletedContact = contactData.filter((contact) => contact.id !== id)
    setContactData(deletedContact);

  }

  console.log(contactData);
  return (
    <Base title="Contact List">
    <div className="card-content">
    {contactData.map((contact, idx) => (
      <Card sx={{ maxWidth: 345 }} key={contact.id}>
        <CardActionArea className="card-value">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              First Name : {contact.firstname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Name : {contact.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contact No : {contact.contactno}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="btn">
          <Button size="small" variant="contained" color="secondary" onClick={() => history.push(`/edit-contact/${idx}`)}>
            Edit
          </Button>
          <Button size="small" variant="contained" color="error" onClick={() => removeContact(contact.id)}>
            Delete
          </Button>
          <Button size="small" variant="contained" color="success" onClick={() => history.push(`/view-contact/${idx}`)}>
            View
          </Button>
        </CardActions> 
      </Card>
    )
    )
    }
    </div>
    </Base>

    
  );
};

export default ContactList;

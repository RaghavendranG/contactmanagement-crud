import React, { useState } from "react";
import Base from "../Base/Base";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const AddContact = ({ contactData, setContactData }) => {

    const history = useHistory()

    const[id , setID] = useState("")
    const[firstname , setFirstName] = useState("")
    const[lastname , setLastName] = useState("")
    const[contactno , setContactNo] = useState("")
    const[address , setAddress] = useState("")
    const[group , setGroup] = useState("")

    const addContact = () => {
        const newContact = {
            id,
            firstname,
            lastname,
            contactno,
            address,
            group
        }

        setContactData([...contactData, newContact]);

        history.push('/contact-list')

    }

  return (
    <Base
      title="Add New Contact"
      description="Please fill the below input boxes"
    >
      <div className="input-field">
        <div>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Id"
            variant="outlined"
            onChange={(event) => setID(event.target.value)}
            value={id}
            size="small"
          />
        </div>
        <div>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstname}
            size="small"
          />
        </div>
        <div>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(event) => setLastName(event.target.value)}
            value={lastname}
            size="small"
          />
        </div>
        <div>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            onChange={(event) => setContactNo(event.target.value)}
            value={contactno}
            size="small"
          />
        </div>
        <div>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Address"
            variant="outlined"
            onChange={(event) => setAddress(event.target.value)}
            value={address}
            size="small"
          />
        </div>
        <div>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Group"
            variant="outlined"
            onChange={(event) => setGroup(event.target.value)}
            value={group}
            size="small"
          />
        </div>
        <Button variant="contained" color="primary" onClick={addContact}>
          Add Contact
        </Button>
      </div>
    </Base>
  );
};

export default AddContact;

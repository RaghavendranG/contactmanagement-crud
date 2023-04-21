import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from "@mui/material";
import { useHistory, useParams } from 'react-router-dom';

const EditContact = ({ contactData, setContactData }) => {

    const {id} = useParams();

    const history = useHistory();

    const selectedContact = contactData[id]

    const[idx , setID] = useState("")
    const[firstname , setFirstName] = useState("")
    const[lastname , setLastName] = useState("")
    const[contactno , setContactNo] = useState("")
    const[address , setAddress] = useState("")
    const[group , setGroup] = useState("")

useEffect(() => {

    setID(selectedContact.id)
    setFirstName(selectedContact.firstname)
    setLastName(selectedContact.lastname)
    setAddress(selectedContact.address)
    setContactNo(selectedContact.contactno)
    setGroup(selectedContact.group)
}, [])

    const updateContact = () => {

        const updatedContact = {
            id : idx,
            firstname,
            lastname,
            contactno,
            address,
            group
        }
        
        contactData[id] = updatedContact

        setContactData([...contactData])

        history.push('/contact-list')

    }

  return (
    <Base
    title="Edit Contact"
    description="Update the contact here">
<div className="input-field">
        <div>
          <TextField
          disabled
            className="text-field"
            id="outlined-basic"
            label="Id"
            variant="outlined"
            onChange={(event) => setID(event.target.value)}
            value={idx}
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
        <Button variant="contained" color="success" onClick={updateContact}>
          Update Contact
        </Button>
      </div>
    </Base>
  )
}

export default EditContact
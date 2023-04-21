import React from 'react'
import Base from '../Base/Base'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

const ViewContact = ({contactData}) => {

    const history = useHistory()
    const {id} = useParams()

    const selectedContact = contactData[id]

  return (
    <Base
    title='View Contact card'> 
    <div className='card'>
<Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          First Name : {selectedContact.firstname}
          
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Last Name : {selectedContact.lastname}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Contact No : {selectedContact.contactno}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Address : {selectedContact.address}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Group : {selectedContact.group}
        </Typography>
      </CardContent>
      <CardActions className='dashboard-btn'>
        <Button size="small" variant='contained' onClick={() => history.push('/contact-list')}>Back to list</Button>
      </CardActions>
    </Card>
    </div> 
    </Base>
  )
}

export default ViewContact
import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
  const history = useHistory()
  return (
    <Base 
    title="Contact Management System"
    description="Click the below button to get to the contact list"  
    >
    <div className='dashboard-btn'>
    <Button variant='contained' color='primary' onClick={() => history.push('/add-contact')}>Add Contact</Button>
    <Button variant='contained' color='primary' onClick={() => history.push('/contact-list')}>Contact List</Button>
    </div>
    </Base>
  )
}

export default Dashboard
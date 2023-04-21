import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Base = ({title,description,children}) => {
    const history = useHistory()
  return (
    <div>
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Button color='inherit' onClick={() => history.push('/')}>Dashboard</Button>
                <Button color='inherit' onClick={() => history.push('/contact-list')}>Contact List</Button>
                <Button color='inherit' onClick={() => history.push('/add-contact')}>Add Contact</Button>
            </Toolbar>
        </AppBar>
        <div className='base'>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className='main-section'>
                    <h2>{description}</h2>
                    <div className='childeren-segment'>{children}</div>
                </div>
        </div>
    </div>
  )
}

export default Base
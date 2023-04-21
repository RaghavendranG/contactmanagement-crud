import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

const ErrorPage = () => {
    const history = useHistory()
  return (
    <Base
    title="Lost your way"
    description="Click below button to get back to dashboard">
<Button variant='contained' color='primary' onClick={() => history.push('/')}>Dashboard</Button>
    </Base>
  )
}

export default ErrorPage
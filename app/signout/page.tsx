import React from 'react'
import Signout from '../components/signout/SignoutView'
import { authenticateClient } from '../lib/auth'

const page = async () => {

  await authenticateClient()
  
  return (
    <Signout />
  )
}

export default page
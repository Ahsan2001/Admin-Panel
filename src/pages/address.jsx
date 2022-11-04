import React from 'react'
import { AddressInner } from '../components'
import Layout from '../layout'
import Title from '../utils/title'

const Address = () => {
 Title("Address")
  return (
      <Layout>
          <AddressInner />
      </Layout>
  )
}

export default Address
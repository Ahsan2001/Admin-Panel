import React from 'react'
import { AddressInner, HeaderTop } from '../components'
import Layout from '../layout'
import Title from '../utils/title'

const Address = () => {
 Title("Address")
  return (
      <Layout>
          <HeaderTop />
          <AddressInner />
      </Layout>
  )
}

export default Address
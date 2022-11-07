import React from 'react'
import { HeaderTop, OrderTable } from '../components'
import Layout from '../layout'
import Title from '../utils/title'

const Order = () => {
    Title("Order")
return (
    <Layout>
        <HeaderTop />
        <OrderTable />
    </Layout>
  )
}

export default Order
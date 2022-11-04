import React from 'react'
import { OrderTable } from '../components'
import Layout from '../layout'
import Title from '../utils/title'

const Order = () => {
    Title("Order")
return (
    <Layout>
        <OrderTable />
    </Layout>
  )
}

export default Order
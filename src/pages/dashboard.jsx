import React from 'react'
import { HeaderTop } from '../components'
import Layout from '../layout'
import  Title  from '../utils/title'

const Dashboard = () => {
  Title("Dashboard")
  
  return (
    <Layout>
      <HeaderTop />
    </Layout>
  )

}

export default Dashboard
import React from 'react'
import { DashboardInner, HeaderTop } from '../components'
import Layout from '../layout'
import  Title  from '../utils/title'

const Dashboard = () => {
  Title("Dashboard")
  
  return (
    <Layout>
      <HeaderTop />
      <DashboardInner />
    </Layout>
  )

}

export default Dashboard
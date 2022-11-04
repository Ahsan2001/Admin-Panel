import React from 'react'
import { DashboardInner } from '../components'
import Layout from '../layout'
import  Title  from '../utils/title'

const Dashboard = () => {
  Title("Dashboard")
  
  return (
    <Layout>
      <DashboardInner />
    </Layout>
  )

}

export default Dashboard
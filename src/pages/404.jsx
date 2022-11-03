import React from 'react'
import { NotFound } from '../components'
import Title from '../utils/title'


const ErrorPage = () => {
    Title("Page Not Found")
    return <NotFound />
}

export default ErrorPage
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="Jamz Yaneza, Threat Research Manager, posing on a couch and smiling at the camera, local image"
        src="../images/JamzYaneza.jpg"
      />
      <StaticImage
        alt="Jamz Yaneza, Threat Research Manager, posing on a couch and smiling at the camera, remote image"
        src="https://careers.trendmicro.com.ph/assets/img/contents/03%20Meet%20the%20Trenders/JamzYaneza.jpg"
      />      
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
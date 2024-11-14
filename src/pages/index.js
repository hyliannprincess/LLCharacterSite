import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../style/index.css'
import YouTube from 'react-youtube';

const IndexPage = () => {
  return (
    <main>
      <Layout>
      

      <StaticImage id="banner"
        alt="cringe"
        src="../images/aqours.webp"
      />
      <StaticImage class="logo"
        alt="cringe2"
        src="../images/sunshineLogo.webp"
      />


      <p>At Uranohoshi Girls' High School, a private school in the seaside neighborhood of Uchiura at Numazu City,<br/><br/>
      second-year student Chika Takami tries to start her own School Idol Club. <br/><br/>
        Inspired by the famous school idol group μ's before them, nine high school girls, 
        form their own idol group called Aqours.</p>

      <YouTube videoId="BlKZfUWN69M" class="video"/>

    </Layout>
    
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

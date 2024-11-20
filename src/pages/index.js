import * as React from "react"
import {Link} from 'gatsby'
import {
  logo,
  seriesList,
  seriesPreview,
  seriesImage,
  roundedImage,
  museBorder,
  aqoursBorder,
  liellaBorder,
  nijigasakiBorder,
} from '../css/index.module.css'
import {StaticImage} from 'gatsby-plugin-image';



const IndexPage = () => {
  return (
    <main>
      <StaticImage className={logo} src="../images/LLLogo.png" quality={100} width={1200} height={392}/>
      <ul className={seriesList}>
        <li className={seriesPreview}>
          <Link to ='/muse'>
            <StaticImage className={`${seriesImage} ${roundedImage} ${museBorder}`} src="../images/muse.jpg"/>
          </Link>
        </li>

        <li className={seriesPreview}>
          <Link to ='/aqours'>
            <StaticImage className={`${seriesImage} ${roundedImage} ${aqoursBorder}`} src="../images/aqours.jpg"/>
          </Link>
        </li>
        <li className={seriesPreview}>
          <Link to ='/nijigasaki'>
            <StaticImage className={`${seriesImage} ${roundedImage} ${nijigasakiBorder}`} src="../images/niji.jpg"/>
          </Link>
        </li>
        <li className={seriesPreview}>
          <Link to ='/liella'>
            <StaticImage className={`${seriesImage} ${roundedImage} ${liellaBorder}`} src="../images/liella.jpg"/>
          </Link>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

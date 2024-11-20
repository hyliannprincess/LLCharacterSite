import * as React from "react"
import '../css/index.css'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image';



const IndexPage = () => {
  return (
    <main>
      <ul id="series-list">
        <li class="series-preview" id="sip">
          <Link to ='/muse'>
            <StaticImage class="rounded-image series-image" src="../images/muse.jpg"/>
          </Link>
        </li>

        <li class="series-preview" id="sunshine">
          <Link to ='/aqours'>
            <StaticImage class="rounded-image series-image" src="../images/aqours.jpg"/>
          </Link>
        </li>
        <li class="series-preview" id="nijigasaki">
          <Link to ='/nijigasaki'>
            <StaticImage class="rounded-image series-image" src="../images/niji.jpg"/>
          </Link>
        </li>
        <li class="series-preview" id="superstar">
          <Link to ='/liella'>
            <StaticImage class="rounded-image series-image" src="../images/liella.jpg"/>
          </Link>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

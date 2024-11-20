import * as React from "react"
import Layout from '../components/layout'
import {
  specialBorder,
  dataDisplacement,
  pageBackground,
  scrollingBackground,
  pageColor,
  footerColor,
} from '../css/aqours.module.css'
import { graphql } from 'gatsby'



const AqoursPage = ({ data }) => {
  const pageOpts={
    height: '576',
    width: '1024',
    playerVars:{
      color: 'white',
      list: 'PLhK1A0LlLOWHYLG2bzaV1HwhPf4_NDoCr',
      listType: 'playlist',
    }
  }
  const characters = data.Anilist.MediaCharacters.characters.nodes
  const staff = data.Anilist.MediaStaff.staff.nodes
  const summary = "<h4>Uranohoshi Girls’ High School, a private school in the seaside neighborhood of Uchiura at Numazu city, Shizuoka prefecture.<br/><br/>A small high school in a corner of Suruga Bay, it is home to nine teens,<br/>led by second-year student Chika Takami, driven by one seriously big dream:<br/><br/>To become the next generation of bright, sparkling “school idols”!<br/><br/>As long as we don’t give up, any dream can come true...<br/>All we have to do now is keep pushing hard for glory!<br/><br/>Now their “School Idol Project” begins to make their dreams come true!<br/></h4><br/>"
  const aqoursStyle =
  {
    specialBorder: specialBorder,
    dataDisplacement: dataDisplacement,
    pageBackground: pageBackground,
    scrollingBackground: scrollingBackground,
    pageColor: pageColor,
    footerColor: footerColor,
  }
  return (
    <main>
    <Layout opts={pageOpts} data={data} characters={characters} staff={staff} summary={summary} pageStyle={aqoursStyle}>


    </Layout>
    
    </main>
  )
}

export const query = graphql`
  query {
    Anilist {
      MediaCharacters: Media(id: 21584) {
        characters(page: 1, perPage: 9, sort: ROLE) {
          nodes {
            id
            name {
              first
              full
              native
            }
            image {
              large
            }
            gender
            dateOfBirth {
              day
              month
            }
            bloodType
            description(asHtml: true)
          }
        }
      }
      MediaStaff: Media(id: 21584) {
        staff(page: 1, perPage: 9, sort: ROLE_DESC) {
          nodes {
            name {
              first
              full
              native
            }
            image {
              large
            }
            primaryOccupations
          }
        }
      }
    }
    showLogo: file(relativePath: {eq: "sunshineLogo.webp"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    groupLogo: file(relativePath: {eq: "aqoursLogo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    banner: file(relativePath: {eq: "aqours.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default AqoursPage

export const Head = () => <title>Aqours</title>

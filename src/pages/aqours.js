import * as React from "react"
import Layout from '../components/layout'
import '../css/aqours.css'
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
  const summary = "<h4>At Uranohoshi Girls' High School, a private school in the seaside neighborhood of Uchiura at Numazu City,<br/><br/>second-year student Chika Takami tries to start her own School Idol Club. <br/><br/>Inspired by the famous school idol group μ's before them, nine high school girls, form their own idol group called Aqours.</h4><br/>"
  return (
    <main>
    <Layout opts={pageOpts} data={data} characters={characters} staff={staff} summary={summary}>


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
    scroll: file(relativePath: {eq: "aqoursScroll.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default AqoursPage

export const Head = () => <title>Aqours</title>

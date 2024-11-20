import * as React from "react"
import Layout from '../components/layout'
import '../css/muse.module.css'
import { graphql } from 'gatsby'



const MusePage = ({ data }) => {
  const pageOpts={
    height: '576',
    width: '1024',
    playerVars:{
      color: 'white',
      list: 'PLhK1A0LlLOWGVz4MXM57sZQiP_1ZwX9CT',
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
      MediaCharacters: Media(id: 15051) {
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
      MediaStaff: Media(id: 15051) {
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
    showLogo: file(relativePath: {eq: "sipLogo.webp"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    groupLogo: file(relativePath: {eq: "museLogo.webp"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    banner: file(relativePath: {eq: "muse.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    scroll: file(relativePath: {eq: "museScroll.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default MusePage

export const Head = () => <title>Muse</title>

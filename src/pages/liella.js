import * as React from "react"
import Layout from '../components/layout'
import '../css/liella.module.css'
import { graphql } from 'gatsby'



const LiellaPage = ({ data }) => {
  const pageOpts={
    height: '576',
    width: '1024',
    playerVars:{
      color: 'white',
      list: 'PLhK1A0LlLOWHK2z3UoXMYcIJ42sAbzzqS',
      listType: 'playlist',
    }
  }
  const characters = data.Anilist.MediaCharacters.characters.nodes
  const staff = data.Anilist.MediaStaff.staff.nodes
  const summary = "<h4>At Uranohoshi Girls' High School, a private school in the seaside neighborhood of Uchiura at Numazu City,<br/><br/>second-year student Chika Takami tries to start her own School Idol Club. <br/><br/>Inspired by the famous school idol group μ's before them, nine high school girls, form their own idol group called Aqours.</h4><br/>"
  const cutStaff = staff.slice(3);
  return (
    <main>

    <Layout opts={pageOpts} data={data} characters={characters} staff={cutStaff} summary={summary}>


    </Layout>
    
    </main>
  )
}

export const query = graphql`
  query {
    Anilist {
      MediaCharacters: Media(id: 155502) {
        characters(page: 1, perPage: 11, sort: ROLE) {
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
      MediaStaff: Media(id: 140642) {
        staff(page: 1, perPage: 12, sort: ROLE_DESC) {
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
    showLogo: file(relativePath: {eq: "superstarLogo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    groupLogo: file(relativePath: {eq: "liellaLogo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    banner: file(relativePath: {eq: "liella.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    scroll: file(relativePath: {eq: "liellaScroll.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default LiellaPage

export const Head = () => <title>Leilla</title>

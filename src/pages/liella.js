import * as React from "react"
import Layout from '../components/layout'
import {
  specialBorder,
  dataDisplacement,
  pageBackground,
  scrollingBackground,
  pageColor,
  footerColor,
} from '../css/liella.module.css'
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
  const summary = "<h4>The first students have arrived at Yuigaoka Girls’ High School, a new academy built on the crossroads of three Tokyo neighborhoods－Omotesando, Harajuku, and Aoyama.<br/><br/>With no history, no upperclassmen to rely on, and no name to speak of, this school’s totally starting from scratch!<br/>In the midst of this, a team of five girls led by Kanon Shibuya discover “school idols.”<br/><br/>－I love singing! I really do! And I want to accomplish something with it!<br/><br/>So the hopes of these stars, still small in stature, begin to accumulate…and so begins the “School Idol Project” of five girls with a blank slate and infinite potential.<br/><br/>Time for our Love Live to take flight!</h4><br/>"
  const cutStaff = staff.slice(3);
  const liellaStyle =
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

    <Layout opts={pageOpts} data={data} characters={characters} staff={cutStaff} summary={summary} pageStyle={liellaStyle}>


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
  }
`

export default LiellaPage

export const Head = () => <title>Liella</title>

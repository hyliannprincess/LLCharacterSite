import * as React from "react"
import Layout from '../components/layout'
import {
  specialBorder,
  dataDisplacement,
  pageBackground,
  scrollingBackground,
  pageColor,
  footerColor,
} from '../css/muse.module.css'
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
  const summary = "<h4>The story is set in Tokyo, where an old school right in between the neighborhoods of<br/>Akihabara, Kanda and Jinbocho is in danger of consolidation and closure.<br/><br/>Nine girls have stepped up<br/>to defy the imminent danger facing their school.<br/><br/>“If we want to protect our beloved school, we need to do what we can?<br/>we need to become idols!”<br/>Hoping against hope there’s something they can do about this,<br/>the girls strive to become famous,<br/>spread the word about their school, attract more students, and save the day.<br/><br/>Now their “School Idol Project” begins to make their dreams come true!<br/>“Make our dreams come true!”</h4><br/>"
  const museStyle =
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
    <Layout opts={pageOpts} data={data} characters={characters} staff={staff} summary={summary} pageStyle={museStyle}>


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
  }
`

export default MusePage

export const Head = () => <title>Muse</title>

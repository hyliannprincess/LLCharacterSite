import * as React from "react"
import Layout from '../components/layout'
import {
  specialBorder,
  dataDisplacement,
  pageBackground,
  scrollingBackground,
  pageColor,
  footerColor,
} from '../css/nijigasaki.module.css'
import { graphql } from 'gatsby'



const NijigasakiPage = ({ data }) => {
  const pageOpts={
    height: '576',
    width: '1024',
    playerVars:{
      color: 'white',
      list: 'PLhK1A0LlLOWFYvFlLt6owPCQTAFrWgLnN',
      listType: 'playlist',
    }
  }
  const characters = data.Anilist.MediaCharacters.characters.nodes
  const staff = data.Anilist.MediaStaff.staff.nodes
  const summary = "<h4>Nijigasaki High School, located on the island of Odaiba in Tokyo, is popular for its variety of class subjects and the freedom given to students.<br/><br/>Second-year student Yu Takasaki has been turned on to the charms of school idols, so she knocks on the door of the “School Idol Club” with her old friend Ayumu Uehara.<br/><br/>Sometimes friends, sometimes rivals, the members of this club each bring their own thoughts and motivations to their lives.<br/><br/>“If I can cheer on people who're pursuing their dreams…”<br/><br/>“The first School Idol Project featuring twelve girls (plus one) where everyone comes together to make dreams come true.”<br/><br/>“Let my sound reach you!”<br/><br/>It's time to chase after your dreams again!</h4><br/>"
  const cutStaff = staff.slice(1);
  const nijiStyle =
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

    <Layout opts={pageOpts} data={data} characters={characters} staff={cutStaff} summary={summary} pageStyle={nijiStyle}>


    </Layout>
    
    </main>
  )
}

export const query = graphql`
  query {
    Anilist {
      MediaCharacters: Media(id: 133891) {
        characters(page: 1, perPage: 13, sort: ROLE) {
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
      MediaStaff: Media(id: 133891) {
        staff(page: 1, perPage: 13, sort: ROLE_DESC) {
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
    showLogo: file(relativePath: {eq: "sicLogo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    groupLogo: file(relativePath: {eq: "nijiLogo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    banner: file(relativePath: {eq: "niji.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default NijigasakiPage

export const Head = () => <title>Nijigasaki</title>

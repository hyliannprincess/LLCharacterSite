import * as React from "react"
import { useState } from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../css/index.css'
import YouTube from 'react-youtube'
import { graphql } from 'gatsby'



const CharacterPreview = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characterData, setCharacterData] = useState({
    name: "",
    charDesc: "",
    charImage: "",
  });

  const handleOpen = () => {
    if (!isOpen)
    {
      setCharacterData({
        name: node.name.first,
        charDesc: node.description,
        charImage: node.image.large,
      });
      setIsOpen(true);
    }
    else
    {
      setCharacterData({
        name: null,
        charDesc: null,
        charImage: null,
      });
      setIsOpen(false);
    }
    
  };
  

  return (
    <div>
      <li className="character-preview" id={node.name.first}onClick={handleOpen}>
        <img className="rounded-image character-image" src={node.image.large}/>
      </li>
      {isOpen && (
        <div className="character-data">
          <div className="character-info">
            <h2 id="character-name">{characterData.name}</h2>
            <p id="character-desc">{characterData.charDesc}</p>
          </div>
          <img id ="character-img" src={characterData.charImage} alt={characterData.name} />
        </div>
      )}
    </div>
  );
};

const IndexPage = ({ data }) => {
  const opts={
        height: '576',
        width: '1024',
        playerVars:{
          list: 'PLhK1A0LlLOWHYLG2bzaV1HwhPf4_NDoCr',
          listType: 'playlist',
        },
      
  }


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


      <h4>At Uranohoshi Girls' High School, a private school in the seaside neighborhood of Uchiura at Numazu City,<br/><br/>
      second-year student Chika Takami tries to start her own School Idol Club. <br/><br/>
        Inspired by the famous school idol group μ's before them, nine high school girls, 
        form their own idol group called Aqours.</h4>
        <br/>
      <div class="video-container">
        <YouTube class="video" opts={opts}/>
      </div>


      
      <div id="content">
        <h1>Idols</h1>
        <ul id="character-list">
          {
            data.Anilist.Media.characters.nodes.map((node) => (
              <CharacterPreview key={node.id} node={node} />
            ))
          }
        </ul>

        

        <div class="scrolling-image"></div>

        <h1>Seiyuu</h1>
        <ul id="seiyuu-list">
          {
            data.Anilist.Media.staff.nodes.map((node) => (
              <li class="seiyuu-preview" id={node.name.first}><h2>{node.name.full}</h2><img class="rounded-image" src={node.image.large}/><h3>Voice Actress</h3></li>
            ))
          }
        </ul>
        
        <div id="footer">
          <button class="bttn">Button</button>
        </div>

    </div>


    </Layout>
    
    </main>
  )
}

export const query = graphql`
  query {
    Anilist {
      Media(id: 21584) {
        characters(page: 1, perPage: 9) {
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
            description 
          }
        }
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
          }
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>

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
    setCharacterData({
      name: node.name.first,
      charDesc: node.description,
      charImage: node.image.large,
    });
    setIsOpen(true);
  };

  return (
    <div>
      <li
        className="character-preview"
        id={node.name.first}
        onClick={handleOpen}
      >
        <StaticImage
          className="rounded-image character-image"
          src="../images/characterImages/characterPlaceholder.webp"
        />
      </li>
      {isOpen && (
        <div className="character-info">
          <h2 id="character-name">{characterData.name}</h2>
          <p id="character-desc">{characterData.charDesc}</p>
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
        <div id="character-info">
            <h2 id="character-name">Johnhane</h2>
            <p id="character-desc">a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a </p>
        </div>

      <div id="character-img-container">
        <StaticImage id="character-img" src="../images/characterImages/chikaPreview.webp"/>
      </div>

        <ul id="character-list">
          {
            data.Anilist.Media.characters.nodes.map((node) => (
              <CharacterPreview key={node.id} node={node} />
            ))
          }
        </ul>

        

        <div class="scrolling-image"></div>

        <ul id="seiyuu-list">
          {
            data.Anilist.Media.staff.nodes.map((node) => (
              <li class="seiyuu-preview" id={node.name.first}><h2>{node.name.full}</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
            ))
          }
        </ul>
        
        <div id="footer">
          <button class="bttn">More Info</button>
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
        staff(page: 1, perPage: 9) {
          nodes {
            name {
              first
              full
              native
            }
          }
        }
      }
    }
  }
`

const characters = [
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
  {
      name: "John",
      charPreview: "../images/characterImages/characterPlaceholder.webp",
      charImage: "../images/characterImages/characterPlaceholder.webp",
      charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
  },
]


export default IndexPage

export const Head = () => <title>Home Page</title>

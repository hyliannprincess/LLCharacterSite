import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../css/index.css'
import YouTube from 'react-youtube';

const IndexPage = () => {
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
        <StaticImage id="character-img" src="../images/characterImages/idolTemp.png"/>
      </div>

        <ul id="character-list">
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
          <li class="character-preview"><StaticImage class="rounded-image character-image" src="../images/characterImages/characterPlaceholder.webp"/></li>
        </ul>

        <button class="bttn">More Info</button>

        <div class="scrolling-image"></div>

        <ul id="seiyuu-list">
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
          <li class="seiyuu-preview"><h2>Aika Kobayashi</h2><StaticImage class="rounded-image" src="../images/seiyuuImages/aikaKobayashi.webp"/><h3>Yoshiko Tsushima</h3></li>
        </ul>
        
        <div id="footer">
          
        </div>

    </div>


    </Layout>
    
    </main>
  )
}
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

const listContainer = document.getElementById("character-list");

function populateList(characters)
{
  console.log(listContainer)
  characters.forEach((character) => {
      const listElement = document.createElement("li");
      listElement.classList.add("character-preview");
      listElement.id = character.name;

      const imageElement = document.createElement("img");
      imageElement.src = character.charPreview;
      listElement.appendChild(imageElement);

      listElement.addEventListener("click", () => {
          showCharacter(character);
      });

      listContainer.appendChild(listElement);
  });
}

function showCharacter(character)
{
  const charName = document.getElementById("character-name");
  const charInfo = document.getElementById("character-desc");
  const charImg = document.getElementById("character-img");

  charName.innerHTML = character.name;
  charInfo.innerHTML = character.charDesc;
  charImg.src = character.charImage;
}



export default IndexPage

export const Head = () => <title>Home Page</title>

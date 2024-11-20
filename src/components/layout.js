import { useState } from "react"
import * as React from 'react'
import {
  mainPage,
} from './layout.module.css'
import './layout.css'
import { GatsbyImage,StaticImage} from 'gatsby-plugin-image';
import YouTube from 'react-youtube'
import {Link} from 'gatsby'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="headingFont"
      rel="preload"
      href="../fonts/headingFont.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="paragraphFont"
      rel="preload"
      href="../fonts/paragraphFont.TTF"
      as="font"
      type="font/TTF"
      crossOrigin="anonymous"
    />,
  ]);
};
const characterStateArray = []
const CharacterPreview = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  characterStateArray.push(setIsOpen)
  const [characterData, setCharacterData] = useState({
    name: "",
    charDesc: "",
    charImage: "",
  });
  const handleOpen = () => {
    if (!isOpen)
    {
      setCharacterData({
        name: node.name.full,
        charDesc: node.description,
        charImage: node.image.large,
      });
      characterStateArray.forEach((element) => element(false));
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
      characterStateArray.forEach((element) => element(false));
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
            <div id="character-desc" dangerouslySetInnerHTML={{ __html: characterData.charDesc }}/>
          </div>
          <img id ="character-img" src={characterData.charImage} alt={characterData.name} />
        </div>
      )}
    </div>
  );
};

const Layout = ({ pageTitle, children, opts, data, characters, staff, summary}) => {
    return (
        <div className={mainPage}>
        <main>
          <GatsbyImage id="banner"
            image={data.banner.childImageSharp.gatsbyImageData}
            alt="Banner"
          />
          <GatsbyImage class="logo"
            image={data.showLogo.childImageSharp.gatsbyImageData}
            alt="Show Logo"
          />

          <div id="series-desc" dangerouslySetInnerHTML={{ __html: summary }}/>

          <div class="video-container">
            <YouTube class="video" opts={opts}/>
          </div>
          <GatsbyImage class="logo"
            image={data.groupLogo.childImageSharp.gatsbyImageData}
            alt="Group Logo"
          />

          <ul id="character-list">
            {
              characters.map((node) => (
                <CharacterPreview key={node.id} node={node} />
              ))
            }
          </ul>
          <div className="scrolling-image">
            <GatsbyImage
            image={data.scroll.childImageSharp.gatsbyImageData}
            />
          </div>
          <ul id="seiyuu-list">
            {
              staff.map((node) => (
                <li class="seiyuu-preview" id={node.name.first}><h2>{node.name.full}</h2><img class="rounded-image seiyuu-image" src={node.image.large}/><h3>{node.primaryOccupations[0]}</h3></li>
              ))
            }
          </ul>
          <div id="footer">
            <ul id="series-list">
                <li class="series-preview" id="sip">
                  <Link to ='/muse'>
                    <StaticImage class="rounded-image series-image" src="../images/muse.jpg"/>
                  </Link>
                </li>

                <li class="series-preview" id="sunshine">
                  <Link to ='/aqours'>
                    <StaticImage class="rounded-image series-image" src="../images/aqours.jpg"/>
                  </Link>
                </li>
                <li class="series-preview" id="nijigasaki">
                  <Link to ='/nijigasaki'>
                    <StaticImage class="rounded-image series-image" src="../images/niji.jpg"/>
                  </Link>
                </li>
                <li class="series-preview" id="superstar">
                  <Link to ='/liella'>
                    <StaticImage class="rounded-image series-image" src="../images/liella.jpg"/>
                  </Link>
                </li>
            </ul>
          </div>

          {children}
        </main>
        </div>
    )
}

export default Layout
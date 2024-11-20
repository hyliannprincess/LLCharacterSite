import { useState } from "react"
import * as React from 'react'
import {
  webpage,
  mainPage,
  banner,
  logo,
  seriesDesc,
  videoContainer,
  video,
  characterList,
  characterPreview,
  characterImage,
  characterData,
  characterInfo,
  characterName,
  characterDesc,
  characterImg,
  seiyuuPreview,
  seiyuuList,
  seiyuuImage,
  footer,
  seriesList,
  seriesImage,
  seriesPreview,
  museBorder,
  aqoursBorder,
  nijigasakiBorder,
  liellaBorder,
  roundedImage,
  scrollingImage,
} from './layout.module.css'
import { GatsbyImage,StaticImage} from 'gatsby-plugin-image';
import YouTube from 'react-youtube'
import {Link} from 'gatsby'

const characterStateArray = []
const CharacterPreview = ({ node, pageStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  characterStateArray.push(setIsOpen)
  const [charData, setCharData] = useState({
    name: "",
    charDesc: "",
    charImage: "",
  });
  const handleOpen = () => {
    if (!isOpen)
    {
      setCharData({
        name: node.name.full,
        charDesc: node.description,
        charImage: node.image.large,
      });
      characterStateArray.forEach((element) => element(false));
      setIsOpen(true);
    }
    else
    {
      setCharData({
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
      <li className={characterPreview} onClick={handleOpen}>
        <img className={`${characterImage} ${roundedImage} ${pageStyle.specialBorder}`} src={node.image.large}/>
      </li>
      {isOpen && (
        <div className={`${characterData} ${pageStyle.dataDisplacement}`}>
          <div className={characterInfo}>
            <h2 className={characterName}>{charData.name}</h2>
            <div className={characterDesc} dangerouslySetInnerHTML={{ __html: charData.charDesc }}/>
          </div>
          <img className ={`${characterImg} ${pageStyle.specialBorder}`} src={charData.charImage} alt={charData.name} />
        </div>
      )}
    </div>
  );
};

const Layout = ({ pageTitle, children, opts, data, characters, staff, summary, pageStyle}) => {
    return (
      <div className={`${webpage} ${pageStyle.pageBackground}`}>
        <div className={`${mainPage} ${pageStyle.pageColor}`}>
        <main>
          <GatsbyImage className={banner}
            image={data.banner.childImageSharp.gatsbyImageData}
            alt="Banner"
          />
          <GatsbyImage className={logo}
            image={data.showLogo.childImageSharp.gatsbyImageData}
            alt="Show Logo"
          />

          <div className={seriesDesc} dangerouslySetInnerHTML={{ __html: summary }}/>

          <div className={videoContainer}>
            <YouTube className={video} opts={opts}/>
          </div>
          <GatsbyImage className={logo}
            image={data.groupLogo.childImageSharp.gatsbyImageData}
            alt="Group Logo"
          />

          <ul className={characterList}>
            {
              characters.map((node) => (
                <CharacterPreview key={node.id} node={node} pageStyle={pageStyle}/>
              ))
            }
          </ul>
          <div className={`${scrollingImage} ${pageStyle.scrollingBackground}`}></div>
          <ul className={seiyuuList}>
            {
              staff.map((node) => (
                <li className={seiyuuPreview}><h2>{node.name.full}</h2><img className={`${seiyuuImage} ${roundedImage} ${pageStyle.specialBorder}`}src={node.image.large}/><h3>{node.primaryOccupations[0]}</h3></li>
              ))
            }
          </ul>
          <div className={`${footer} ${pageStyle.footerColor}`}>
            <ul className={seriesList}>
                <li className={seriesPreview}>
                  <Link to ='/muse'>
                    <StaticImage className={`${seriesImage} ${roundedImage} ${museBorder}`} src="../images/muse.jpg"/>
                  </Link>
                </li>

                <li className={seriesPreview}>
                  <Link to ='/aqours'>
                    <StaticImage className={`${seriesImage} ${roundedImage} ${aqoursBorder}`} src="../images/aqours.jpg"/>
                  </Link>
                </li>
                <li className={seriesPreview}>
                  <Link to ='/nijigasaki'>
                    <StaticImage className={`${seriesImage} ${roundedImage} ${nijigasakiBorder}`} src="../images/niji.jpg"/>
                  </Link>
                </li>
                <li className={seriesPreview}>
                  <Link to ='/liella'>
                    <StaticImage className={`${seriesImage} ${roundedImage} ${liellaBorder}`} src="../images/liella.jpg"/>
                  </Link>
                </li>
            </ul>
          </div>

          {children}
        </main>
        </div>
      </div>
    )
}

export default Layout
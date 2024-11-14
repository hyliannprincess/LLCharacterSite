import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  mainPage,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
    return (
        <div className={mainPage}>
            
        <main>
            {children}
        </main>
        </div>
    )
}

export default Layout
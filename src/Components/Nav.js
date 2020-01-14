import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CardTitle} from 'shards-react'

export default class Nav extends Component{
  
  render(){
    return(
      <nav>
        <Link style={styles.link} to="/"><h1 style={styles.link}>Rick and Morty</h1></Link>
        <ul className="nav-links">
          <Link style={styles.link} to="/characters"><li>Characters</li></Link>
          <Link style={styles.link} to="/episodes"><li>Episodes</li></Link>
        </ul>
      </nav>
    )
  }
}

const styles = {link:{
  textDecoration: 'none',
  color: 'white'
}}
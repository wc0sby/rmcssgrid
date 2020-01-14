import React, { Component } from 'react'
import Card from './CharacterCard'
import '../App.css'

export default class Characters extends Component{

  state = {
    characters: []
  }

  componentDidMount() {
     this.getCharacters()
  }
  getCharacters = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/')
    const characters = await data.json()
    this.setState({characters: characters.results})
  }

  renderCharacters = () => {
    return this.state.characters.map(i => {
      return <Card key={i.id}
                name={i.name}
                img={i.image}
                species={i.species}
                status={i.status}
                episodeCount={i.episode.length}>
              </Card>
              
    })
  }

  render(){
    return(
      <div>
        <div className='card-container'>
          {this.renderCharacters()}
        </div>
      </div>
    )
  }
}

const styles = {
  paraFont: {
    color: 'grey'
  }
}
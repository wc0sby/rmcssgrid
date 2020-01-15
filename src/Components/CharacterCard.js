import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import '../App.css'


export default function BasicCardExample(props) {
  return (
    <div style={styles.card}>
      <div className='card-container'>
        <div className='card-sides'>
          <div className='card-front'>
            <Card style={{ maxWidth: "300px" }}>
              <CardHeader>{props.name}</CardHeader>
              <CardImg src={props.img}/>
              <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <p>{`Species: ${props.species}`}</p>
                <p>{`Status: ${props.status}`}</p>
              </CardBody>
              <CardFooter>{`Episode Count: ${props.episode.length}`}</CardFooter>
            </Card>
          </div>
          <div className='card-back'>
            <Card style={{ minWidth: "300px", maxHeight: '650px'}}>
              <CardHeader>{props.name}</CardHeader>
              {/* <CardImg/> */}
              <CardBody>
                <CardTitle>Episodes:</CardTitle>
                {props.episode.map(i=><li>{i}</li>)}
              </CardBody>
              <CardFooter>{`Episode Count: ${props.episode.length}`}</CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
    
  );
}

const styles={
  card:{
    marginBottom: 10
  }
}
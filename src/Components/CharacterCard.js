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


export default function BasicCardExample(props) {
  console.log(props)
  return (
    <div style={styles.card}>
      <Card style={{ maxWidth: "300px" }}>
        <CardHeader>{props.name}</CardHeader>
        <CardImg src={props.img}/>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <p>{`Species: ${props.species}`}</p>
          <p>{`Status: ${props.status}`}</p>
        </CardBody>
        <CardFooter>{`Episode Count: ${props.episodeCount}`}</CardFooter>
      </Card>
    </div>
    
  );
}

const styles={
  card:{
    marginBottom: 10
  }
}
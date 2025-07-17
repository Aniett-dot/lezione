import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CardBook} from ".components/CardBook";

function Home() {



  async function fetchData(){
try {
    const response = await fetch ('https://openlibrary.org/search.json?q=harry+potter')
    if (!response.ok){
         throw new Error ('Network response was not ok');
    }
    else {

    const data = await response.json();
    setBooks(data.docs);
     }

}
catch (error) {
    console.error ('There has been a problem with your fetch operation:', error);
}
  }  

 

  useEffect (() => {
    fetchData ();
  }, []);


return (

    <Container>
    
        <h1 className=" text-center py-5">Home Page</h1>
        <CardBook book={books} />
    </Container>
);




}
export default Home;
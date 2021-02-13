import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch, faUsers ,faComment } from "@fortawesome/free-solid-svg-icons";
import LogoTwittor from "../../assets/png/logo.png";
import LogoWhiteTwittor from "../../assets/png/logo-white.png";

import "./SignInSingUp.scss";

export default function SignInSingUp() {
    return (
        <Container className= "signin-signup" fluid>
            <Row>
                <LeftComponent></LeftComponent>
                <RightComponent></RightComponent>
            </Row>
        </Container>
    );
}

function LeftComponent(){
    return (
        <Col className="signin-signup__left" xs= {6}>
            <img src={LogoTwittor} alt ="Twittor"></img>
            <div>
            <h2 >
                <FontAwesomeIcon icon={faSearch} />
                Sigue lo que te interesa</h2>
                
            <h2>  <FontAwesomeIcon icon={faUsers} /> Enterate de que esta hablando la gente</h2>
            <h2> <FontAwesomeIcon icon={faComment} />Unete a la conversacion </h2>

            </div>
        </Col>
    )
}


function RightComponent(){
    return (
        <Col className="signin-signup__right" xs={6}>
           <div>
               <img src={LogoWhiteTwittor} alt="Twittor" ></img>
               <h2>Mira lo que esta pasando en este momento</h2>
               <h3>Unete a tewittor hoy mismo</h3>
               <Button variant="primary">
                   Registrate
               </Button>
               <Button variant="outline-primary">
                   inicia sesion
               </Button>
           </div>
        </Col>
    )
}

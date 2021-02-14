import React, {useState} from 'react';
import{ Row, Col, Form, Button,Spinner} from "react-bootstrap";

import "./SignUpForm.scss"

export default function SignUpForm(props) {
    const { setShowModal} =props;
    
    const [formData, setFormData] = useState(initialFormValue());

    const onSubmit = e => {
        e.preventDefault(); 
        setShowModal(false);
        console.log(formData);

    };
       
    const onChange= e =>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
  
    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>

                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Control 
                        type	="text" 
                        placeholder="Nombre" 
                        defaultValue ={formData.nombre}
                        name="nombre"

                        />
                        </Col><Col>
                        <Form.Control 
                        type	="text" 
                        placeholder="Apellidos" 
                        defaultValue ={formData.apellidos}
                        name="apellidos"
                        />
                        </Col>
                    </Row>

                </Form.Group>

                <Form.Group>
                    <Form.Control 
                    type="emil" placeholder="Correo "
                    defaultValue ={formData.email}
                    name="email"
                        
                    
                    />
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Control type	="password" placeholder="Contraseña" 
                        defaultValue ={formData.password}
                       name="password"
                        />
                        </Col><Col>
                        <Form.Control type	="password" placeholder="Repetir Contraseña" 
                        defaultValue ={formData.repeatpasword}
                       name="repeatpassword"
                         />
                        </Col>
                    </Row>

                </Form.Group>


                <Button variant ="primary" type="submit">
                    Registrate
                </Button>
            </Form>
            
        </div>
    )
}

function initialFormValue() {

return{
    nombre:"",
    apellidos:"",
    email:"",
    password:"",
    repeatpassword:""
}
    
}

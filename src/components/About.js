import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class About extends(Component){
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
            <div className="container">
                <div className="row row-content justify-content-center">
                    <div className="col-12 col-md-8">
                        <Card style={{background:'#FAF0E6', borderColor: '#FAF0E6'}}>
                            <CardImg top width="100%" src="/assets/img/Foto.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Fredy Alberto </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Data Sciencs y Estudiante de ingeniería de sistemas</CardSubtitle>
                                <CardText>
                                        Soy científico de datos y estudiante de Ingeniería de sistemas e
                                        informática de la Universidad Nacional de Colombia con
                                        conocimientos en Visión por computador, ciencia de datos y
                                        Desarrollo web. Soy una persona con competencias para orientar el
                                        cumplimiento de los objetivos a través del mejoramiento continuo y
                                        el trabajo en equipo, abierto a nuevas experiencias de aprendizaje
                                        para la búsqueda de soluciones
                                        <hr></hr>
                                        <p><i className="fa fa-phone"></i>: +57 310 4586939</p>
                                        <p><i className="fa fa-envelope "></i>: fororozcol@gmail.com</p>
                                    </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default About;
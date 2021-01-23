import React, { Component } from "react";
import { Button, Col, Label, Row } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import axios from "axios";

let NO_CONSULTA = {value: 0, imapar:0, gemelos:1};
let SI_CONSULTA = {value: 1, imapar:0, gemelos:1};


    function RenderImpar({data, num, selectDb, select}){
        //Renderea los números en la pantalla, en caso que no hayan valores, renderea en blanco
      console.log('RenderImpar')
      console.log(data, num, select, selectDb)
      let elements = null
      if (data.length != 0){
          if (Number(selectDb) === NO_CONSULTA.value){

             elements = data.map( (element) => {
                return(<div>
                        {Number(select) === 0? <li>{element}</li>: <li>{element[0]} , {element[1]}</li>}
                    </div>
                )})
          }else{
               elements = data
          }

        return (
          <div className="col-12 col-md-12 mt-2">
            <p>Los números primos de  {num}</p>
            <ul>{elements}</ul>
          </div>
        )
      }else{
        return(
          <div></div>
        )
      }
    }
//Validación de formulario
let required = (val) => val  && val.length;
let isNumber = (val) => !isNaN(Number(val));


    class Home extends Component {
      constructor(props){
        super(props);
        this.state = {
          data: [],
          _select:0,
          _numero:'',
          _selectDb:0,
      };
        this.handleSubmit = this.handleSubmit.bind(this)
      }


        handleSubmit(event){
            //Procesa las peticiones que se llenan en el forumulario
            console.log("Procesando submit")
            
            if(Number(event.selectDb) === NO_CONSULTA.value){
                //Aqui no se hace la petición a la base de datos

                if(Number(event.select) === NO_CONSULTA.imapar){
                    //Solicitud a los valores pares
                    axios({
                        method:'GET',
                        url: `http://127.0.0.1:8000/numeros/impar/${event.numero}`
                    }).then(res => {
                        this.setState({data:res.data,
                                        _select: event.select,
                                        _numero: event.numero,
                                        _selectDb: event.selectDb
                                       })
                    }).catch(err => console.log(err))
                    }
                    else {
                        //Solicitud a los números gemelos
                        axios({
                            method:'GET',
                            url: `http://127.0.0.1:8000/numeros/gemelos/${event.numero}`
                        }).then(res => {
                            var nums = new Array(res.data)
                            this.setState({data:res.data,
                                _select: event.select,
                                _numero: event.numero,
                                _selectDb: event.selectDb
                               })
                 }).catch(err => console.log(err))
                 }
            }
            else {
                //Se hace petición a la base de datos

                if(Number(event.select) === NO_CONSULTA.imapar){
                    //Solicitud a los valores pares
                    axios({
                        method:'GET',
                        url: `http://127.0.0.1:8000/numeros/regi-impar/${event.numero}`
                    }).then(res => {
                        this.setState({data:res.data,
                                        _select: event.select,
                                        _numero: event.numero,
                                        _selectDb: event.selectDb
                                    })
                    }).catch(err => console.log(err))
                    }
                    else {
                        //Solicitud a los números gemelos
                        axios({
                            method:'GET',
                            url: `http://127.0.0.1:8000/numeros/regi-gemelos/${event.numero}`
                        }).then(res => {
                            var nums = new Array(res.data)
                            this.setState({data:res.data,
                                        _select: event.select,
                                        _numero: event.numero,
                                        _selectDb: event.selectDb
                                    })
                        }).catch(err => console.log(err))
                    }

            }
        };
      
      render(){
        return(
          <div className="container">
              <div className="Row row-content">
                <LocalForm  onSubmit={(event) => this.handleSubmit(event)}>
                    <Row  className="form-group">
                        <Label  md={2} for="numero">Ingrese Número</Label>
                        <Col sm={10}> 
                        <Control.text model=".numero" name="numero" id="numero" placeholder="Ingrese un Número" className="form-control" validators={{
                            required, isNumber
                        }}/>
                        <Errors className="text-danger"
                                model=".numero"
                                show="touched"
                                messages={{
                                    required: 'Se requiere',
                                    isNumber: 'Debe ser un número'
                                }}
                        />
                        </Col>
                    </Row >
                    <Row  className="form-group">
                        <Label  md={2} for="seleccion">¿Qué quieres ver?</Label>
                        <Col sm={10}> 
                        <Control.select model=".select" name="select" id="select" onChange={this.handleChangeSelect}>
                            <option value="0">Numeros Impares</option>
                            <option value="1">Numeros Impares Gemelos</option>
                        </Control.select >
                        </Col>
                    </Row >
                    <Row  className="form-group">
                        <Label  md={2} for="seleccion">¿Consultar en la Base de datos?</Label>
                        <Col sm={10}> 
                            <Control.select  model=".selectDb" name="selectDb" id="selectDb" onChange={this.handleChangeSelect}>
                                <option value="0">No</option>
                                <option value="1">si</option>
                            </Control.select >
                        </Col>
                    </Row >
                    <Button>Sumbit</Button>
                </LocalForm>
                <div className="row">
                    <Col sm={10}>
                    <RenderImpar data={this.state.data} num={this.state._numero}  selectDb={this.state._selectDb} select={this.state._select}/>
                    </Col>
                </div>
              </div>
          </div>
        )
      }
    }
export default Home
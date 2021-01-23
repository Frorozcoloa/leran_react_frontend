import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import axios from "axios";

let NO_CONSULTA = {value: 0, imapar:0, gemelos:1};
let SI_CONSULTA = {value: 1, imapar:0, gemelos:1};


    function RenderImpar({data, num, selectDb, select}){
      console.log('RenderImpar')
      console.log(data, num, select, selectDb)
      let elements = null
      if (data.length != 0){
          if (selectDb === NO_CONSULTA.value){

             elements = data.map( (element) => {
                return(<div>
                        {select === 0? <li>{element}</li>: <li>{element[0]} , {element[1]}</li>}
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

    class Home extends Component {
      constructor(props){
        super(props);
        this.state = {
          numero: '',
          select: 0,
          selectDb: 0,

          data: [],
          _select:0,
          _numero:'',
          _selectDb:0,
      };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
      }

        handleSubmit(event){
            console.log(event.target.selectDb.selectedIndex)
            this.setState({})
            if(event.target.selectDb.selectedIndex === NO_CONSULTA.value){
                //Aqui no se hace la petición a la base de datos
               ;

                if(event.target.select.selectedIndex === NO_CONSULTA.imapar){
                    //Solicitud a los valores pares
                    axios({
                        method:'GET',
                        url: `http://127.0.0.1:8000/numeros/impar/${event.target.numero.value}`
                    }).then(res => {
                        this.setState({data:res.data,
                                        _select: event.target.select.selectedIndex,
                                        _numero: event.target.numero.value,
                                        _selectDb: event.target.selectDb.selectedIndex
                                       })
                    }).catch(err => console.log(err))
                    }
                    else {
                        //Solicitud a los números gemelos
                        axios({
                            method:'GET',
                            url: `http://127.0.0.1:8000/numeros/gemelos/${event.target.numero.value}`
                        }).then(res => {
                            var nums = new Array(res.data)
                            this.setState({data:res.data,
                                        _select: event.target.select.selectedIndex,
                                        _numero: event.target.numero.value,
                                        _selectDb: event.target.selectDb.selectedIndex})
                        }).catch(err => console.log(err))
                    }

            }
            else {
                //Se hace petición a la base de datos

                if(event.target.select.selectedIndex === NO_CONSULTA.imapar){
                    //Solicitud a los valores pares
                    axios({
                        method:'GET',
                        url: `http://127.0.0.1:8000/numeros/regi-impar/${event.target.numero.value}`
                    }).then(res => {
                        this.setState({data:res.data,
                                        _select: event.target.select.selectedIndex,
                                        _numero: event.target.numero.value,
                                        _selectDb: event.target.selectDb.selectedIndex
                                       })
                    }).catch(err => console.log(err))
                    }
                    else {
                        //Solicitud a los números gemelos
                        axios({
                            method:'GET',
                            url: `http://127.0.0.1:8000/numeros/regi-gemelos/${event.target.numero.value}`
                        }).then(res => {
                            var nums = new Array(res.data)
                            this.setState({data:res.data,
                                        _select: event.target.select.selectedIndex,
                                        _numero: event.target.numero.value,
                                        _selectDb: event.target.selectDb.selectedIndex})
                        }).catch(err => console.log(err))
                    }

            }
           

            event.preventDefault()
        }
      
      handleChangeSelect(event){
        console.log('Activando cambio de estado de Select')
        this.setState({ [event.target.name]: event.target.selectedIndex} )
      }

      handleChange(event){
        console.log('Activando cambio de estado')
        this.setState({ [event.target.name]: event.target.value} )
      }

      render(){
        return(
          <div className="container">
              <div className="Row row-content">
                <Form  onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label  md={2} for="numero">Ingrese Número</Label>
                    <Col sm={10}> 
                    <Input type="text" name="numero" id="numero" placeholder="Ingrese un Número" value={this.state.numero} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label  md={2} for="seleccion">¿Qué quieres ver?</Label>
                    <Col sm={10}> 
                    <Input type="select" name="select" id="select" onChange={this.handleChangeSelect}>
                        <option id="1">Numeros Impares</option>
                        <option id="2">Numeros Impares Gemelos</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label  md={2} for="seleccion">¿Consultar en la Base de datos?</Label>
                    <Col sm={10}> 
                        <Input type="select" name="selectDb" id="selectDb" onChange={this.handleChangeSelect}>
                            <option id="1">No</option>
                            <option id="2">si</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button>Sumbit</Button>
                </Form>
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
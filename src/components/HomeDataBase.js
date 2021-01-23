import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import axios from "axios";


    function RenderImpar({data, num, select}){
      console.log('RenderImpar')
      if (data.length != 0){
        console.log(data)
          const elements = data.map( (element) => {
          return(<div>
              {select === 0? <li>{element}</li>: <li>{element[0]} , {element[1]}</li>}
            </div>
          )})
          console.log(data)

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

          data: [],
          _select:0,
          _numero:''
      };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
      }


      handleChangeSelect(event){
        console.log('Activando cambio de estado de Select')
        console.log(event.target.selectedIndex)
        this.setState({ [event.target.name]: event.target.selectedIndex} )
      }

      handleChange(event){
        console.log('Activando cambio de estado')
        console.log(event.target.numero.value)

        if(event.target.select.selectedIndex === 0){
          axios({
            method:'GET',
            url: `http://127.0.0.1:8000/numeros/regi-impar/${event.target.numero.value}`
          }).then(res => {
              this.setState({data:res.data,
                            _select: event.target.select.selectedIndex,
                            _numero: event.target.numero.value})
          }).catch(err => console.log(err))
        }else{
          axios({
            method:'GET',
            url: `http://127.0.0.1:8000/numeros/regi-gemelos/${event.target.numero.value}`
          }).then(res => {
            this.setState({data:res.data,
                          _select: event.target.select.selectedIndex,
                          _numero: event.target.numero.value})
          }).catch(err => console.log(err))
       }

        event.preventDefault()
      }


      render(){
        return(
          <div className="container">
              <div className="Row row-content">
                  <p>Este Campo es para los valores se guardan en la base de datos, y dado el caso que ya se guardó, solo se pregunta</p>
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
                <Button>Sumbit</Button>
                </Form>
                <div className="row">
                    <Col sm={10}>
                    <RenderImpar data={this.state.data} num={this.state._numero} select={this.state._select}/>
                    </Col>
                </div>
              </div>
          </div>
        )
      }
    }
export default Home      }

      handleSubmit(event){
        console.log('Sumbit')
        console.log(event.target.numero.value)

        if(event.target.select.selectedIndex === 0){
          axios({
            method:'GET',
            url: `http://127.0.0.1:8000/numeros/impar/${event.target.numero.value}`
          }).then(res => {
              this.setState({data:res.data,
                            _select: event.target.select.selectedIndex,
                            _numero: event.target.numero.value})
          }).catch(err => console.log(err))
        }else{
          axios({
            method:'GET',
            url: `http://127.0.0.1:8000/numeros/gemelos/${event.target.numero.value}`
          }).then(res => {
            this.setState({data:res.data,
                          _select: event.target.select.selectedIndex,
                          _numero: event.target.numero.value})
          }).catch(err => console.log(err))
       }

        event.preventDefault()
      }


      render(){
        return(
          <div className="container">
              <div className="Row row-content">
                  <p>Este Campo es para el primer ejercios donde solo se le pregunta a Django sobre los valores</p>
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
                <Button>Sumbit</Button>
                </Form>
                <div className="row">
                    <Col sm={10}>
                    <RenderImpar data={this.state.data} num={this.state._numero} select={this.state._select}/>
                    </Col>
                </div>
              </div>
          </div>
        )
      }
    }
export default Home
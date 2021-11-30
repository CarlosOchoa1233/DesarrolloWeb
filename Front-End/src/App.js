import React from 'react';

class App extends React.Component{
  constructor(){
  super()
  this.state={
    equipo:'',
    jugador:'',
    division:'',
    nombrePersona:''

  }  
}

handleInput=(e)=>{
  const {value,name} = e.target;
  this.setState({
      [name]:value
  });

}


//Renderizar el componente
render(){
  console.log(this.state)
  return(
    <div className="card">
      <h1>NFL Site</h1>
      <form className="card-body">

        <h2>Selecciona tu equipo</h2>
        <input onChange={this.handleInput} name = "equipo" className="form-control" type="text" />
        
        <h2>Selecciona tu jugador</h2>
        <input onChange={this.handleInput} name = "jugador" className="form-control" type="text" />
        
        <h2>Selecciona la division</h2>
        <input onChange={this.handleInput} name = "division" className="form-control" type="text" />
        
        <h2>Tu nombre</h2>
        <input onChange={this.handleInput} name = "nombrePersona" className="form-control" type="text" />
        
        <h2> </h2>
        <button className="btn btn-primary" type="submit" >Guardar Registro</button>
        <button className="btn btn-primary" type="submit" >Borrar Registro</button>
        <button className="btn btn-primary" type="submit" >Actualizar Registro</button>
      </form>
    </div>
  
  )

  }
}

export default App;

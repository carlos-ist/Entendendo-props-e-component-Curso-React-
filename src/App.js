import React, {Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre
                    name={this.props.nome}
                    age={this.props.idade}
                    profession={this.props.cargo}
                />
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
           
           <div>
                <h2> Olá sou o {this.props.name} </h2>
                <h3> Cargo: {this.props.profession}</h3>
                <h3> Idade: {this.props.age} anos </h3>
            
            </div>

        );
    }
}


function App(){
    return(
        <div>

            <h1>Conheça nossa equipe:</h1>
            <hr/>

            <Equipe 
                nome="Matheus" 
                cargo="Programador"
                idade="24"
            />

            <Equipe 
                nome="Lucas" 
                cargo="Designer"
                idade="15"
            />

        </div>

    )
}

export default App;
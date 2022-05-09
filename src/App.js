import React from 'react';

// Em uma única linha não precisa abrir bloco.
//const Bemvindo = () => <h2>Bem-Vindo(a)</h2>

/*
const Bemvindo = (props) => {
    return(
      <div>
          <h2>Bem-vindo(a) {props.nome} </h2>
          <h3>Tenho {props.idade} Anos</h3>
      </div>
    );
}
*/

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social fb={props.facebook} li={props.linkedin} yt={props.youtube}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
       
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook  </a>
            <a href={props.li}>LinkedIn  </a>
            <a href={props.yt}>Youtube  </a>
        </div>
    );

 
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <hr/>
            <Equipe nome="Matheus" cargo="Programador" idade="29"
                    facebook="http:\\google.com" linkedin="http:\\google.com" youtube="http:\\google.com"
            />
            <Equipe nome="Lucas" cargo="Designer" idade="15"
                    facebook="http:\\google.com" linkedin="http:\\google.com" youtube="http:\\google.com"
            />
        </div>
    );
}

export default App;
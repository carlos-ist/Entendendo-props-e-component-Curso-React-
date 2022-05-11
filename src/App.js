import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        
        //Atributos
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }

        //Métodos
        this.cadastrar=this.cadastrar.bind(this); //Método cadastrar

    }

    //Execução do Método
    cadastrar(event){
        /*
        console.log(this.state.nome+this.state.email+this.state.senha);
        alert('Clicou');
        */
        const {nome,email,senha} = this.state;

        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        }else{
            this.setState({error: 'Por favor, verifique se todos os campos foram preenchidos e tente novamente.'})
        }

       
        event.preventDefault(); // Para página não atualizar
 
    } 

    render(){
        return(
            <div>
                <h1>Novo Usuário:</h1>

                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <br/>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} 
                            onChange={(e)=>this.setState({nome: e.target.value})}/>

                    <br/>
                    <label>Email:</label>
                    <input type="email" value={this.state.email}
                            onChange={(e)=>this.setState({email: e.target.value})} />
                
                    <br/>
                    <label>Senha:</label>
                    <input type="password" value={this.state.senha}
                            onChange={(e)=>this.setState({senha: e.target.value})} />

                    <br/>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
               


            </div >
           

        );
    }
}

export default App;
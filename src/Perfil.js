import React, {Component} from 'react'
import PrimarySearchAppBar from './components/Navbar'
import FotoPerfil from './components/FotoPerfil'
import Doacoes from './components/Doacoes'
import Informacoes from './components/Informacoes'


class Perfil extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.nome = props.nome;
        this.local = props.local;
        this.idade = props.idade;
    }
    render(){ 
        return (
            <div>
        <PrimarySearchAppBar/>
        <FotoPerfil fotoperfil={this.props.fotoperfil}/>  
        <Informacoes nome={this.props.nome} idade={this.props.idade} local={this.props.local}/>
        <Doacoes />

        
        
        
            
            
            </div>
          
            
            )
    }
       
    
}

export default Perfil
import React, {Component} from 'react'
import PrimarySearchAppBar from './components/Navbar'
import FotoPerfil from './components/FotoPerfil'
import Doacoes from './components/Doacoes'
import Informacoes from './components/Informacoes'
import Avatar from '@material-ui/core/Avatar';


class Perfil extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            local: '',
            idade: '',
        };
    }

    updateData() {
        let id = localStorage.getItem("userID");
        var URL = "https://hidden-atoll-76455.herokuapp.com/get-profile/" + id;
        fetch(URL).then((responseText) => responseText.json()).then(function (data) {
            this.setState({
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                local: 'Recife - PE',
                idade: data.birthday
            });
        }.bind(this));
    }

    render(){
        this.updateData();
        return (
            <div>
                <PrimarySearchAppBar/>
                <FotoPerfil name={this.state.name}/>
                <Informacoes nome={this.state.name} idade={this.state.idade} local={this.state.local}/>
                <Doacoes />
            </div>


            )
    }
}

export default Perfil
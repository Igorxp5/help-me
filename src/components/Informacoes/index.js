import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';




class Informacoes extends Component{
    render() {
        return(
            <div>
               

                <span style={{ fontFamily: 'Didact Gothic'
        ,textAlign: 'center', color: '424242', display: 'block', fontSize: 20}}>{this.props.nome}</span>
                <span style={{fontFamily: 'Didact Gothic', textAlign: 'center', color: '424242', display: 'block'}}>{this.props.idade} anos</span>
                <span style={{fontFamily: 'Didact Gothic', textAlign: 'center', color: 'A3A3A3', display: 'block'}}>{this.props.local} <span style={{color: 'ccc'}}><i class="fas fa-map-marker-alt" color={'ccc'}></i></span></span>

                <br />
                <hr style={{color: '#EAEAEA', opacity: '0.4', width:'60%', size:'0.5px', display: 'block', margin: '0 auto'}} />
                <p style={{paddingLeft: 35, paddingTop: 20 ,fontFamily: 'Didact Gothic', textAlign: 'left', color: '424242', fontSize: 20}}>Doações</p>


            </div>
        )
    }
}

export default Informacoes


import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
    render() {
      if(this.props.encabezado){
        return (
          <div className={'banner'}>{this.props.encabezado}</div>
          );
      } else {
        return (
          <div className={'banner'}>{this.props.fecha}</div>
          );
      }
    }
  }
  var tiempoTranscurrido = Date.now();
  var hoy = new Date(tiempoTranscurrido).toLocaleDateString().toString();
  Banner.propTypes ={
    encabezado:PropTypes.string,
    fecha:PropTypes.string
  };

  Banner.defaultProps = {
    fecha: hoy
  };
  export default Banner;
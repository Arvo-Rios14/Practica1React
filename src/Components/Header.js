import React,{Component} from 'react';
import logo from '../Images/tecLogo.png' 

class Header extends Component {
    render() {
      return (
        <div className={'header'}>

            <img id={'tecImage'} src={logo} alt={'Logo del ITT'}/>

        </div>
        );
    }
  }

 
  export default Header;
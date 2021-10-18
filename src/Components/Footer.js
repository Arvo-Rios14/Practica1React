import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {

        return (
            this.props.pieDePagina
        );
    }
}


Footer.propTypes = {
    pieDePagina: PropTypes.object
};


export default Footer;
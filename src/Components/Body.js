import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
    render() {

        return (
            <div className={'Body'}>
                <p>{this.props.practica}</p>
                <ol>
                    {
                        this.props.temas.map((tema, index) => {
                            return <li key={index}>{tema}</li>
                        })
                    }
                </ol>
            </div>
        );
    }
}

Body.propTypes = {
    temas: PropTypes.array,
    practica:PropTypes.string
};


export default Body;
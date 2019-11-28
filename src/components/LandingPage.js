import React, { Component } from 'react';
import styles from './stylo.css';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div className="home">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="information-banner">
                            <h1 className="name-title"> <b>Marlon Fuentes</b></h1>
                            <img src="https://i.imgur.com/ygQCiF9.png"/>
                            <h2 className="description"><b>Freelance Developer · React "Master" · Killer of Dragons</b></h2>
                            <hr/>
                            <div className="quick-links">
                                <a href="https://github.com/fuentesmarlon/" target="_blank">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/marlon-fuentes-lopez-2719b8176" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>                            
                            </div>
                            <h4>
                                Welcome!
                            </h4>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default LandingPage;
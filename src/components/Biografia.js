import React, { Component } from 'react';
import styles from './stylo.css';
import { Grid, Cell} from 'react-mdl';


class Biografia extends Component{
    render(){
        return(
            <div className="bio">
                <Grid className="bio-grid">
                    <Cell col={4}>
                    <div className="basic-info">
                            <img src="https://i.imgur.com/QeR6igF.jpg"/>
                            <h3>Marlon Fuentes</h3>
                            <h4>Computer Scientist</h4>
                            <hr/>
                            <p>Results oriented, proactive and creative.
                                 Attitude of service and good human relations.
                                 Focused on growing as a professional.
                            </p>
                            <hr/>
                            <h5>Phone Number</h5>
                            <p>(+502) 3312 - 4219</p>
                            <hr/>
                            <h5>E-mail</h5>
                            <p>marlonfuenteslp@gmail.com</p>
                        </div>
                    </Cell>
                    <Cell col={8}>
                        <div className="important-info">
                            <br/>
                            <h3> EDUCATION</h3>
                            <hr/>
                            <h4> 2015 - Present</h4>
                            <p> Computer Science Major - Universidad del Valle de Guatemala</p>
                            <h4> 2009 - 2014</h4>
                            <p> High School - Colegio Internacional Manos a la Obra</p>
                            <h4> 2003 - 2008</h4>
                            <p> Middle School - Colegio San Juan de Dios</p>
                            <br/>
                            <h3>EXPERIENCE</h3>
                            <hr/>
                            <h4> 2019 - Present</h4>
                            <p> Business Intelligence Analyst - Tigo Guatemala</p>
                            <h4> 2018 - 2019</h4>
                            <p> Teacher's Aid - Universidad del Valle de Guatemala</p>
                            <h4> 2014 - 2015</h4>
                            <p> Costumer Service Agent - Allied Global Call Center</p>
                            <br/>
                        </div>
                    </Cell>
                </Grid>
            </div>



        );
    }
}
export default Biografia;
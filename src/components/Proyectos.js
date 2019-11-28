import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu,IconButton, CardText} from 'react-mdl';

class Proyectos extends Component{
    constructor(props){
        super(props);
        this.state={ activeTab:0};
    }

    render(){
        return(
            <div className="projects">
                <Grid className="projects-grid">
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://i.blogs.es/28e48f/terminal2_650/450_1000.png) center / cover'}}>Server Admin</CardTitle>
                                <CardText>
                               Learn to how to use commands for remote server administration, while also testing the connection to it. 
                                </CardText>
                            <CardActions border>
                                <Button colored><a href="http://34.210.35.174/15240/laboratorio02/lab2.txt" class="button">Demo</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://devmagazine.co/wp-content/uploads/2018/06/html.jpg) center / cover'}}>HTML Only</CardTitle>
                                <CardText>
                                Interactive Short Story made only using HTML.
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="http://34.210.35.174/15240/lab3/index.html" class="button">Demo</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>    
                    
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://blog.aulaformativa.com/wp-content/uploads/2016/09/definicion-usos-ventajas-lenguaje-css3-que-es.jpg) center / cover'}}>CSS Only</CardTitle>
                                <CardText>
                                Drawing made using only CSS.
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="http://34.210.35.174/15240/lab4/index.html" class="button">Demo</a></Button>
                                
                            </CardActions>
                        </Card>
                    </Cell>
                    
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover'}}>JS Only</CardTitle>
                                <CardText>
                                This is a chat which connection was made only with javascript as backend, html and css as frontend.
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="http://34.210.35.174/15240/lab5/index.html" class="button">Demo</a></Button>
                                
                            </CardActions>
                        </Card>
                    </Cell>
                    
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>React Memory Game</CardTitle>
                                <CardText>
                                Memory game developed using the react framework.
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="http://34.210.35.174/15240/lab6/index.html" class="button">Demo</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://user-images.githubusercontent.com/7836623/48658871-4707b600-ea49-11e8-8a08-39e1a318c442.png) center / cover'}}>Linting</CardTitle>
                                <CardText>
                                Using linting to fix a project's structure. For this one, eslint was implemented
                                and using the Airbnb structure.
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="https://github.com/fuentesmarlon/glitch-uvg-web-2019" class="button">Github</a></Button>
                                
                            </CardActions>
                        </Card>
                    </Cell>

                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://www.fastechsol.com/wp-content/uploads/2017/04/1491739011_maxresdefault.jpg) center / cover'}}>Website Clone</CardTitle>
                                <CardText>
                                Cloning a popular website, trying to imitate the closest to the page chosen using react. This is case was instagram.
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="http://34.210.35.174/15240/proyecto01/index.html" class="button">Demo</a></Button>
                                
                            </CardActions>
                        </Card>
                    </Cell>

                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://debuggercafe.com/wp-content/uploads/2018/12/1-e1543731175208.png) center / cover'}}>Boilerplate</CardTitle>
                                <CardText>
                                Developing a reusable boilerplate, for future projects and easy deployment. 
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="https://github.com/fuentesmarlon/proyecto_01_web" class="button">Github</a></Button>
                                
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#ffff',height:'176px', background:'url(https://naftic.com/wp-content/uploads/2019/09/que-es-un-crm.png) center / cover'}}>CRM</CardTitle>
                                <CardText>
                                CRM platform developed using python. Makes request to data sources and makes on-demand analysis. 
                                </CardText>
                            <CardActions border>
                            <Button colored><a href="https://github.com/Carlosc23/CRM" class="button">Github</a></Button>
                                
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        
        );
    }
}
export default Proyectos;
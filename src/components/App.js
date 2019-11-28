import React,{ Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Main.js'
import { Link} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <div className="demo-big-content">
            <Layout>
                <Header className="headerino" title={<Link style={{textDecoration:'none',color:'white'}}to="/">Marlon Fuentes | Portfolio</Link> }
                scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/biografia">Biography</Link>
                        <Link to="/proyectos">Projects</Link>
                    </Navigation>
                </Header>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
        );
    }
}

export default App;

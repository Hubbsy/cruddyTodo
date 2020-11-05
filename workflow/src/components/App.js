// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import { Container, Row} from 'reactstrap';

import View from './Views.jsx'
import InputFields from './InputFields.jsx'

class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      name: '',
      task: '',
      priority: '',
      complete: false,
      list: []
    }
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <Container>
        <Row>
          <View/>
        </Row>
        <Row>
          <InputFields/>
        </Row>
      </Container>
    )
  }
}

export default App;

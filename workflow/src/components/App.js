// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import { Container, Row} from 'reactstrap';

import Views from './Views.jsx'
import InputFields from './InputFields.jsx'

class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      list: []
    }

    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {

  }

  addTodo(item) {
    const newTodo = this.state.list.concat(item);
    this.setState({
      list: newTodo
    })
  }


  
  render() {
    return (
      <Container>
        <Row>
          <Views tasks={this.state.list}/>
        </Row>
        <Row>
          <InputFields addTodo={this.addTodo}/>
        </Row>
      </Container>
    )
  }
}

export default App;

import React from 'react';
import {Form, Input, FormGroup, Label, Col, Button } from 'reactstrap';


class InputFields extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const key = e.target.name; 
    const value = e.target.value; 
    this.setState({
      [key]: value
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state)
  }


  render() {
    return (
      <Col>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>List todo here
              <Input type="textarea" name="task" onChange={this.handleChange}  value={this.state.task}></Input>
            </Label>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form> 
      </Col>
    )
  }
}



export default InputFields; 
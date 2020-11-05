import React from 'react';
import {Form, Input, FormGroup, Label, Col, Button } from 'reactstrap';


const InputFields = () => {
  return (
    <Col>
      <Form>
        <FormGroup>
          <Label>List todo here</Label>
          <Input type="textarea"></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form> 
    </Col>
  )
}



export default InputFields; 
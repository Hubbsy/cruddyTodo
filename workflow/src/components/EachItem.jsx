import React from 'react';
import {Col} from 'reactstrap'




const EachItem = (props) => {
  console.log(props)
  return (
    <>
    <Col>
    
      <div>{props.task.task}</div>
  
    </Col>
</>
  );
}



export default EachItem;
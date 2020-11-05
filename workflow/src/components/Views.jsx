import React from 'react';
import {Row} from 'reactstrap';

import EachItem from './EachItem.jsx';





const Views = (props) => {
  console.log(props)
  return (
    <Row>
        {props.tasks.map(task => {
          return (
            <EachItem task={task} />
          ) 
        })}
    </Row>
  )
};




export default Views; 
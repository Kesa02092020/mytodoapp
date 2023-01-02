import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const todolist = ({todo, removeTodo,changeTodo}) => {

  const handlecheckchange = () =>{
    if(todo.done)
      return null
    changeTodo(todo.id)
  }
  
  return (     
     <ListGroup.Item className="px-0">
        <Row>
            <Col sm="1"> 
                <Form.Check
                  type="checkbox"
                  id="check1"
                  onChange={()=>handlecheckchange()}
                  checked = {todo.done}
                />
            </Col>
            <Col sm="10" style={todo.done? {textDecoration: "line-through"} : null}>{todo.title}</Col>
            <Col sm="1"><a onClick={() => removeTodo(todo.id)}>X</a></Col>
        </Row>
    </ListGroup.Item>
  )
}

export default todolist
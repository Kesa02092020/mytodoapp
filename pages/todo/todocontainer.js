import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Addtodo from '../../component/todo/addtodo';
import Todolist from '../../component/todo/todolist'

const todolist = [
    {id:1,title:"Learn HTML",done:true},
    {id:2,title:"Learn CSS",done:true},
    {id:3,title:"Learn Javasript",done:false},
    {id:4,title:"Learn UI Component",done:true},
    {id:5,title:"Learn React",done:false},
]

const todocontainer = () => {

    const [todos,setTodos] = useState(todolist)

    const handletodo = (newTodo) => {
        const newtodolist = [...todos,newTodo]
        setTodos(newtodolist)
    }
    const removeHandletodo = (id) =>{
        const removetodolist = todos.filter((todoremove) => todoremove.id!== id)
        setTodos(removetodolist)
    }
    const handlecheckTodo = (id) =>{
        const newtodolist = todos.map((todo) =>{
            if(todo.id === id){
                return {...todo, done:!todo.done}                
            }
            else{
                return todo;
            }
            
        }         
        )
        setTodos(newtodolist)
    }
  return (
    <Container className="py-4">
        <Addtodo addTodo={handletodo} />
    <Row>
        <Col>  
            <ListGroup variant="flush" className="mb-4">
                {
                    todos.map((todo) => 
                   <Todolist key={todo.id} todo={todo} removeTodo={removeHandletodo} changeTodo={handlecheckTodo}/> 
                    )
                }
            </ListGroup>
        </Col>
    </Row>
  </Container>
  )
}

export default todocontainer
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const addtodo = ({addTodo}) => {

  const [title,setTitle] = useState('');

  const handlesubmittodo = (e) => {
    e.preventDefault();
    const newTodo = { id:Math.random(), title: title, done: false}    
    addTodo(newTodo)
    setTitle(" ");
  }

  return (
    <>
    <form onSubmit={handlesubmittodo}>
        <Row>
            <Col sm={10}>
                <input type="text" className="w-100" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Col>
            <Col sm={2}>
            <button variant="primary">ADD</button>
            </Col>
        </Row>
    </form>
    </>
  )
}

export default addtodo
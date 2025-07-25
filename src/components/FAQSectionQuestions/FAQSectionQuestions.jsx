import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function FAQSectionQuestions ({questions})  {  
  
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false)
  const handleCloseRes = () => setShow(false)
  const handleClose = () => setShowDelete(false);
  const [idDelete, setIdDelete] = useState(true);
  const excluir = (id) => {
    setShowDelete(true);
    setIdDelete(id)
  };
  const [data, setData] = useState([{
    id: '',
    question: '',
    answer: '',
    author: '',
    questionCreatedAt: '',
    answerCreatedAt: '',
    font: '',
    status: ''
  }])

  const [dataResponse, setDataResponse] = useState("")

  useEffect(() => {    
    if(data[0].id != '') return setShow(true);
    
  }, [data])

  const answerQuestions = (id) => {
    fetch(`http://localhost:3000/faq/${id}`)
    .then((res) => res.json())
    .then((data) => {setData(data)

      console.log(data);
      
    })    

  };

  const deleteQuestion = (id) => {
    fetch(`http://localhost:3000/faq/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      alert('Pergunta deletada com sucesso!')
      window.location.reload()
    })
  }

  const sendResponse = (id) => {
    console.log(id);
    
    fetch(`http://localhost:3000/faq/answer/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answer: dataResponse})
    }).then(() => handleClose())
    .catch(e => alert("Ocorreu um erro"))
  }

  const loadData = (data) => {
    console.log(data.length > 0);
    
    if(data.length > 0) {
      {return data.map((data) => { 
          return (
            <tr>
            <td className='text-center'>{data.id}</td>
            <td className='text-center'>{data.author}</td>
            <td className='text-center'>{data.question}</td>
            <td className='d-flex gap-2 justify-content-center'>
              <Button variant="primary" onClick={() => answerQuestions(data.id)} active={false}>Responder</Button>
              <Button variant='danger' onClick={() => excluir(data.id)}>Deletar</Button>  
            </td>
            </tr>
          )
        })}
    } else {
        return (
          <tr>
            <td colSpan={4} className="text-center">
              Todas as perguntas foram respondidas
            </td>
          </tr>
        )

    }
  }

      return(
        <>


      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => deleteQuestion(idDelete)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>

      <h1>Perguntas frequentes não respondidas</h1>
      <hr/>
      <Table striped hover responsive >
      <thead>
        <tr > 
          <th className='text-center'>ID</th>
          <th className='text-center'>Author</th>
          <th className='text-center'>Question</th>
          <th className='text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        {loadData(questions)}
      </tbody>
    </Table>
    
    <Modal show={show} onHide={handleCloseRes}>

      <Modal.Header closeButton>
        <Modal.Title>Responder Pergunta</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Label>Autor da pergunta: {data[0].author}</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Pergunta</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={ data[0].question  }
              readOnly
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Digite a resposta</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => {
              console.log(e.target.value);
              
              setDataResponse(e.target.value)
              }}/>

          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseRes}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => sendResponse(data[0].id)}>
          Enviar Resposta
        </Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}
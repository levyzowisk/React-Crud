import { Accordion, AccordionBody, AccordionHeader, Container } from "react-bootstrap";
import img from'../../assets/nutricionista.jpg';
import styles from "./style.module.css"
import Buttons from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


export function FAQSectionWithImage  ({questions})  {
   
    const url = 'http://localhost:3000/faq';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        question: '',
        author: ''
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).
        then(() => handleClose()).
        catch((e) => alert("Ocorreu um erro: " + e));
        
    }




    return (
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 p-4" >
            <div className="w-100 w-md50">
                <Accordion defaultActiveKey="0" >
                    {questions.map((item) => {
                        return (
                            <Accordion.Item className={styles.noborder} eventKey={item.id}>
                            <AccordionHeader> <span style={{fontFamily: "Inter", fontStyle: "normal", fontWeight: "600", fontSize: "15px"}}>{item.question} </span> </AccordionHeader>
                            <AccordionBody> {item.answer} </AccordionBody>
                          </Accordion.Item> 
                        )
                    })}
                </Accordion>

                <Buttons variant="primary" className="btn btn-primary mt-3 p-1 btn-sm" onClick={handleShow}>
                    Cadastrar Perguntar
                </Buttons>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de perguntas sobre Diabetes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sua Pergunta</Form.Label>
                        <Form.Control
                            onChange={handleInput}
                            name="question"
                            type="text"
                            placeholder="Digite aqui sua pergunta"
                            autoFocus
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleInput}
                            name="author"
                            placeholder="Digite aqui seu nome"
                        />
                        </Form.Group>

                        <Container className="d-flex gap-2">
                            <Buttons variant="secondary" onClick={handleClose}>
                                Sair
                            </Buttons>
                            <Buttons variant="primary" onClick={submitForm}>
                                Enviar
                            </Buttons>
                        </Container>


                    </Form>

                    </Modal.Body>

                </Modal>
                
               
            </div>

            <div className="d-flex justify-content-center w-100 1-md-50">
                <img className={`${styles.sizeimg} rounded`}  src={img} alt="imagem de uma nutricionista" />
            </div>
        </div>
    );
}
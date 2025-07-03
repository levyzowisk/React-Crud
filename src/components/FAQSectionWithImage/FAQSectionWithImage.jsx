import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";
import img from'../../assets/nutricionista.jpg';
import styles from "./style.module.css"
import { Button } from "../Button/Button";

import Buttons from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


export function FAQSectionWithImage  ({questions})  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 p-4" >
            <div className="w-100 w-md50">
                <Accordion defaultActiveKey="0" >
                    {questions.map((item) => {
                        return (
                            <Accordion.Item className={styles.noborder} eventKey={item.id}>
                            <AccordionHeader > <span style={{fontFamily: "Inter", fontStyle: "normal", fontWeight: "600", fontSize: "15px"}}>{item.question} </span> </AccordionHeader>
                            <AccordionBody > {item.answer} </AccordionBody>
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

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sua Pergunta</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite aqui sua pergunta"
                            autoFocus
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite aqui seu nome"
                            autoFocus
                        />
                        </Form.Group>
                    </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Buttons variant="secondary" onClick={handleClose}>
                        Sair
                    </Buttons>
                    <Buttons variant="primary" onClick={handleClose}>
                        Enviar
                    </Buttons>
                    </Modal.Footer>
                </Modal>
                
               
            </div>

            <div className="d-flex justify-content-center w-100 1-md-50">
                <img className={`${styles.sizeimg} rounded`}  src={img} alt="imagem de uma nutricionista" />
            </div>
        </div>
    );
}
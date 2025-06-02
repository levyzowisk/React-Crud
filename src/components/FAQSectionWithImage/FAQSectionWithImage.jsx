import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";
import img from'../../assets/nutricionista.jpg';
import styles from "./style.module.css"
export function FAQSectionWithImage  ({questions})  {
    return (
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 p-5" >
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
            </div>

            <div className="d-flex justify-content-center w-100 1-md-50">
                <img className={`${styles.sizeimg} rounded`}  src={img} alt="imagem de uma nutricionista" />
            </div>
        </div>
    );
}
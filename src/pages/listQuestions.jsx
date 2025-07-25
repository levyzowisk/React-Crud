import { useEffect, useState } from "react";
import { FAQSectionQuestions } from "../components/FAQSectionQuestions/FAQSectionQuestions";

export function ListQuestions() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/faq/NoResponse')
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            
        });
    }, []);
    return(
        <>
        <div className="container">
            <FAQSectionQuestions questions={data}/>
        </div>
        </>
    )
}
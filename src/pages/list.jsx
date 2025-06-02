import { useEffect, useState } from "react"
import { FAQSectionWithImage } from "../components/FAQSectionWithImage/FAQSectionWithImage";
import { SpinnerLoad } from "../components/Spinner/SpinnerLoad";

export function List() {
   const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://admin.pedabete.app.br/api/faq")
        .then(res => res.json())
        .then(res => setData(res))
      }, [])
      
      const RenderData = () => {
        if(data.length > 0) {     
          console.log(data);
          return (<><h1 className="text-center">PERGUNTAS FREQUENTES SOBRE DIABETES </h1>  <FAQSectionWithImage questions={data.slice(0,10)}/></>)
        } else {
          console.log('oi');
          return <SpinnerLoad/>  
        }
      }
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center min-vh-100'>
            <RenderData/>
        </div>
      
    )
}
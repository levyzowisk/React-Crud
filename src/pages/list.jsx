import { useEffect, useState } from "react"
import { FAQSectionWithImage } from "../components/FAQSectionWithImage/FAQSectionWithImage";
import { SpinnerLoad } from "../components/Spinner/SpinnerLoad";
import { Button } from "../components/Button/Button";

export function List() {
   const [data, setData] = useState([]);
   const [count, setCount] = useState({
    first: 0,
    end: 8
   });

    useEffect(() => {
      fetch("http://admin.pedabete.app.br/api/faq")
        .then(res => res.json())
        .then(res => setData(res))
      }, [])
      
      const RenderData = () => {
        if(data.length > 0) {  
          console.log(data.length)
          console.log(count);
             
          return (<><h1 className="text-center">PERGUNTAS FREQUENTES SOBRE DIABETES </h1>  <FAQSectionWithImage questions={data.slice(count.first, count.end)}/></>)
        } else {
          return <SpinnerLoad/>  
        }
      }

      const checkCountIncrement = () => {
        return count.end <= data.length ? false : true;
      };

      const checkCountDecrement = () => {
        return count.first <= 0 ? true : false;
      };

      const countIncrement = () => {
        setCount({end: count.end + 8, first: count.first + 8});
      };

      const countDecrement = () => setCount({end: count.end - 8, first: count.first - 8});

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center min-vh-100'>
            <RenderData/>

            <div className="container d-flex justify-content-center gap-1" >
              <Button optionDisabled={checkCountDecrement()} onClick={countDecrement} content = "-"/>
              <Button optionDisabled={checkCountIncrement()} onClick={countIncrement} content = "+"/>
            </div>


        </div>  
      
    )
}
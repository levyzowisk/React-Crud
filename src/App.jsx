import { BrowserRouter, Routes, Route } from 'react-router'
import { List } from './pages/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FAQSectionQuestions } from './components/FAQSectionQuestions/FAQSectionQuestions';

function App() {

  return (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/perguntas" element={<FAQSectionQuestions/>}/>
    </Routes>
    
  </BrowserRouter>
  )
}

export default App

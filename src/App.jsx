import { BrowserRouter, Routes, Route } from 'react-router'
import { List } from './pages/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FAQSectionQuestions } from './components/FAQSectionQuestions/FAQSectionQuestions';
import { ListQuestions } from './pages/listQuestions';

function App() {

  return (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/perguntas" element={<ListQuestions/>}/>
    </Routes>
    
  </BrowserRouter>
  )
}

export default App

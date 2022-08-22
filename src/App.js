import { useState } from 'react';
import {quotes as Quotes} from './data/quotes'
import Header from './components/header'
import './App.css'
import Container from './container/cards-container';
import Footer from './components/footer'
function App() {
  const [author,setAuthor] = useState("")
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center'}} className="App">
      <Header/>
      <Container author={author} setAuthor={setAuthor} Quotes={Quotes}/>
      <Footer/>
    </div>
  );
}

export default App;

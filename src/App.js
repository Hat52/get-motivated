import Card from './components/cards'
import {quotes as Quotes} from './data/quotes'
import './App.css'
function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center'}} className="App">
      <div className="header">
        
      </div>
      <div style={{display:"flex",flexDirection: 'column',marginBottom:"5%",paddingTop:"5%",gap:"25px" ,width:"60%"}}>
        {
          Quotes.map((card,index)=>{
            return(
              <Card index={index} data={card}/>
            )
          })
        }
      </div>
      <div className="footer">
          Developed by <a href="https://github.com/Hat52" target="_blank" rel="noreferrer" data-replace="Hamza Ali"><span>Hamza Ali</span></a>
      </div>
    </div>
  );
}

export default App;

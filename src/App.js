import Card from './components/cards'
import './App.css'
function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center'}} className="App">
      <div className="header">
        
      </div>
      <div style={{display:"flex",flexDirection: 'column',paddingTop:"5%",gap:"25px" ,width:"60%"}}>
        {
          Array(12).fill(6).map(()=>{
            return(
              <Card/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

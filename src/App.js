import Card from './components/cards'
import './App.css'
function App() {
  return (
    <div style={{display:"flex",justifyContent: 'center',alignItems: 'center',height:"100vh"}} className="App">
      <div style={{display:"flex",justifyContent: 'center',width:"60%"}}>
        <Card/>
      </div>
    </div>
  );
}

export default App;

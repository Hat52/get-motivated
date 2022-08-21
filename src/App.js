import Card from './components/cards'
import {quotes as Quotes} from './data/quotes'
import './App.css'
function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center'}} className="App">
      <div className="header"></div>
      <div style={{display:"flex",flexDirection: 'column',marginBottom:"5%",paddingTop:"5%",gap:"25px" ,width:"60%"}}>
        <div className="search_bar">
          <div className="Dropdown">
            <div>
              <label className="Dropdown_label">Author</label>
            </div>
            <button className="btn Dropdown_button">
                <span>All</span>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down btn__icon"><polyline points="6 9 12 15 18 9"></polyline></svg></i>
            </button>
            <ul className="Dropdown_items">
                {
                  Quotes.map((card)=>{
                    return(
                      <li>{card.author}</li>
                    )
                  })
                }
              </ul>
          </div>
        </div>
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

import React from 'react';
import './index.css';
import Card1 from './components/card1';
import Card2 from './components/card2';

function App() {
  return (
    <div className="App">
        <nav>
        <div className="nav-title p-2 ">
            Driver collection
        </div>
   </nav>
   
   <div className="rectangle-2">
    <div className="container "> 
         
    <div className="container m-3 row">
            <div className="col left-top-item1">
              Collection Ref No
            </div>
            <div className="col left-top-item">
              Driver User Name
            </div>
          </div>
    <section className="main-card">
        <label>Pick up details</label>
        <Card1/>
        <div className="fill-in">
           <span>
            Fill in weight, #Ref is pre populated
           </span>
        </div>
       <Card2/>
    </section>
   </div> 
   </div>
   <footer></footer>

    </div>
  );
}

export default App;

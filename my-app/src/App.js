import './App.css';
import logo1 from './download.jfif';
import logo2 from './edit.png';


import React from "react";
import { BrowserRouter as Router, Switch , Route , Link} from "react-router-dom";

export default function App() {
  return (







    <Router>
      <div>
      <div className="Head">
        <h1 className="he">Wellcome Todo</h1>
       
        <Link to="/" > <h4 className="he1">--Go First Page</h4>   <p/></Link>
     </div>












        <Switch>
          <Route path="/secondcomponents" component>
            <About />
          </Route>
          <Route path="/ThirdComponents">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






function Home() {
  return(
    <div>
     <div className="da">
         <h2 >
             Add Item
         </h2><p/>
         <Link to="/secondcomponents" ><button className="bu">click</button>   <p/></Link>
           
        <h2>
             Show Data
         </h2><p/>
         <Link to="/ThirdComponents" ><button className="bu">click</button>   <p/></Link>
        
    </div>
    </div>
);
}







function About() {
  return <div>
  <div className="da">
      <h2>
          Add Items
      </h2><p/>
      <div className="inp">
              <h5 className="lb">
                  Add item succesfully
              </h5><p/>
              <input type="text" id="fname" name="fname"></input>
         
      <button className="b1">Submit</button> <p/>
      </div>
      <div className="inp">
      <b>Show Data</b>
      <Link to="/ThirdComponents" ><button className="b2">click</button>   <p/></Link>
      
      </div>      
 </div>
 </div>;
}







function Users() {
  return <div>
 <div className="da">
       <h2>
           Add Items
       </h2>   <p/>
         <div className="inp">
             <h5>
              Update item succesfully
             </h5><p/>
             <input type="text" id="fname" name="fname"></input>
             <button className="b1">Submit</button>
             <Link to="/secondcomponents" ><button className="b1">Add</button>   <p/></Link>
         </div>
         <div className="inp">
           <b>Show Data</b><p/>
           <table className="t1">
                <tr>
                     <td>Mohd Aqib</td>
                     <td>     
                       <button className="b2e" >   <img src={logo1} className="b2ed"/>  </button> 
                        <button className="b2d">    <img src={logo2}  className="b2ed"/> </button> 
                              </td>
                 </tr>
            </table>
         </div>      
</div>
</div>;
}
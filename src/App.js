import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  constructor(){

    super();
    this.state={
      name:{
        firstName: 'Casto', lastname: 'Malimali'
      }, 
      organization:'Chanza Huru',
      
    };
  }

  render (){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>
          Hi, My name is {this.state.name.firstName}{" "}{this.state.name.lastname}. I work at {this.state.organization}
          <div>
          <button onClick={()=>{
            this.setState((state,props)=>{
              return{
                name:{firstName:'androvision',lastname:'Manchuria'}
              };
            },
             ()=>{
              console.log(this.state);
            });
          }}> 
          Change name
          </button>
          </div>
        </p>
      </header>
    </div>
  );
  }
} 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Run MY App
//         </a>
//       </header>
//     </div>
//   );
// }
// 
export default App;

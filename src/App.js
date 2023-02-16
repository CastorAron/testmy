




import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor() {

    super();
    this.state = {
      
      monsters: []

    };
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users) =>{
      this.setState(
        ()=> {
          return { monsters: users};
        },
      ()=> {
        console.log(this.state);
      }
      );
    }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
     
         <div>

          {this.state.monsters.map(s=><p key={s.id}>{s.name}</p>)}
         </div>
        
        
        </header>
      </div>
    );
  }
}

 
export default App;























// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

// class App extends Component {

//   constructor() {

//     super();
//     this.state = {
//       // name:{
//       //   firstName: 'Casto', lastname: 'Malimali'
//       // }, 
//       // organization:'Chanza Huru',
//       // monster1:{
//       //   name: 'Linda',
//       // },
//       // monster2:{
//       //   name: 'Frank',
//       // },
//       // monster3:{
//       //   name: 'Jacky'
//       // }
//       monsters: [{ id: '1', name: 'Linda' }, { id: '2', name: 'Frank' }, { id: '3', name: 'Jacky' }, { id: '4', name: 'MyNamew' }
//       ]

//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//           {/* <p>
//           Hi, My name is {this.state.name.firstName}{" "}{this.state.name.lastname}. I work at {this.state.organization}
//           <div>
//           <button onClick={()=>{
//             this.setState((state,props)=>{
//               return{
//                 name:{firstName:'androvision',lastname:'Manchuria'}
//               };
//             },
//              ()=>{
//               console.log(this.state);
//             });
//           }}> 
//           Change name
//           </button>
//           </div>
//         </p> */}
//           {/* <h1>
//           {this.state.monster1.name}
//         </h1>
//         <h1>
//           {this.state.monster2.name}
//         </h1>
//         <h1>
//           {this.state.monster3.name}
//         </h1> */}
//           <h1>
//             {
//               this.state.monsters.map(s => <p key={s.id}> {s.id}{". "}{s.name}</p>)
//             }
//           </h1>
//         </header>
//       </div>
//     );
//   }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Run MY App
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// // 
// export default App;

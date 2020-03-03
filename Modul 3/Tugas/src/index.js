import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './container/Login';
//import HelloComponent from './component/HelloComponent';
//import StateFullcomponent from './container/StateFullComponent';


//function HelloWord() {
// return <p> ini adalah function component {

// }</p>
//}

//const HelloWord = () => {
//return <p>ini adalah arrow function</p>
//}

//class Statefullcomponent extends React.Component {
//render() {
//return <p> ini adalah Statefull Component</p>
//}
//}



ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Appbar from './components/Appbar';
import Show   from  './components/Show';
import AcedemicRegistration from './components/AcedemicRegistration.js';
import StudentAttendence from './components/StudentAttendence.js';
import {home1 as Home1, home2} from './components/Home';
import Pagenation from './components/Pagenation.js';


function App({store}) {
  function Page(){
    switch(store.getState()) {
      case "Signin":
        return (<div> <Signin store={store}/> </div>);
      case "Signup":
        return (<div> <Signup /> </div>);
      case "AcedemicRegistraion":
        return(<div> <AcedemicRegistration /></div>) 
        case "StudentAttendence":
          return(<div> <StudentAttendence /></div>)   
      case "Home":
        alert(home2());
        if(localStorage.getItem("role")==1 || localStorage.getItem("role")==2)
        return (<div> <Home1 /> </div>);
        else
        return (<div> <Signin store={store}/> </div>);
      case "Show":
        if(localStorage.getItem("role")==2)
        return (<div> <Show /> </div>);
        else
        return (<div> <Signin store={store}/> </div>);
      case "Pagenation":
        if(localStorage.getItem("role")==2)
        return (<div> <Pagenation /> </div>);
        else
        return (<div> <Signin store={store}/> </div>);
      default:
        return (<div> <home2 /> </div>);
    }
  }
  return (
    <div className="App">
    <header className="App-header">
    <p>ENTERPRISE RESOURCE PLANNING</p>  
    </header>
    <div className='App-body'>
      <Appbar store = {store} />
      <Page />
    </div>
  </div>
);
}

export default App;

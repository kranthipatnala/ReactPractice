import Greet from './components/Greet'
import Welcome from './components/Welcome'
import ParentComponent from './components/ParentComponent'
import NameList from './components/NameList'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import {UserProvider} from './components/UserContext'
import TeamA from './components/TeamA'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'




function App() { 
  return (
    <div className="App"> 
          <StyleSheet test={false}/>
          <Inline/>
    </div>
  );
}

export default App;

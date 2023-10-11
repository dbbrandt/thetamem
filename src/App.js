import "./App.css"
import "@aws-amplify/ui-react/styles.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
    const signOut = () => console.log("Sign out!");
  return (
      <Router>
          <AppHeader signOut={signOut}/>
          <Routes>
              <Route path="/" element={<AppMain signOut={signOut}/>}/>
          </Routes>
      </Router>
  )
}

export default App;

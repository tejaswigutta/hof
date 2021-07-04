import logo from './logo.svg';
import './App.css';
import DisplayAll from "./components/DisplayAll.js"
import UserType from "./components/UserType.js"
import FilterNames from "./components/FilterNames.js"
import FilterAge from "./components/FilterAge.js"
import TotalYears from "./components/TotalYears.js"
function App() {
  return (
    <div className="App">
      <DisplayAll />
      <UserType />
      <FilterNames />
      <FilterAge />
      <TotalYears />
    </div>
  );
}

export default App;

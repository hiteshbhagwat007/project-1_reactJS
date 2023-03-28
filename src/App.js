import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import PropTypes from 'prop-types'


function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <TextForm heading='Enter text to process' />
    </>
  );
}

export default App;


Navbar.PropTypes = {
   title: PropTypes.string
}
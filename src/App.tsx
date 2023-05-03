import './App.css';
import Button from './components/Button';
import MapComponent from './components/Map';
import Layer from './components/Layer/FeatureLayer/ServerSide'
import { useEffect, useState } from 'react';
import Modal from './components/Modal'
import useGet from './components/hooks/useGet';

function App() {
  const fl=Layer('https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0');
  const [isOpen,setisOpen]=useState(false)
  
  const toggleModal=()=>{
    setisOpen(!isOpen)
  }
  return (
    <div className="App">
      <Button className="secondary">click me</Button>
      <MapComponent mapType="2D" basemap="streets-navigation-vector" layer={[fl]}/>
      <Modal isOpen={isOpen}><div>helu</div></Modal>
      <button onClick={toggleModal}>helli</button>
    </div>
  );
}

export default App;

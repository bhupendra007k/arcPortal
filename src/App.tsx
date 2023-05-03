import "./App.css";
import Button from "./components/Button";
import MapComponent from "./components/Map";
import Layer from "./components/Layer/FeatureLayer/ServerSide";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import useGet from "./components/hooks/useGet";
import FormModal from "./components/FormModal";
import Point from "@arcgis/core/geometry/Point";

function App() {
  const fl = Layer(
    "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
  );
  const [isOpen, setisOpen] = useState(false);
  const [stop, setStop] = useState<any>();

  const handleStop = (pointObject: any) => {
    var data=JSON.stringify(pointObject)
    var _data=JSON.parse(data)
    setStop(2)
    console.log(stop);
  };

  const toggleModal = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="App">
      <Button className="secondary">click me</Button>
      <MapComponent
        mapType="2D"
        basemap="streets-navigation-vector"
        layer={[fl]}
        handleStop={handleStop}
      />
      <Modal isOpen={isOpen}>
        <FormModal />
      </Modal>
      <button onClick={toggleModal}>helli</button>
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";

interface IDraggableProps{
    locArray:object[]
    
}

const index:React.FC<IDraggableProps>= ({locArray}:IDraggableProps) => {
  const [locationArray, setLocationArray] = useState<object[]>(Array);

  const dragItem = useRef(0);
  const dragOverItem = useRef(0);

  const handleSort = () => {
    //duplicate location array
    let _locationArray = [...locationArray];

    console.log("locationArray", _locationArray);

    //remove and save the dragged item content
    const dragItemContent = _locationArray.splice(dragItem.current, 1)[0];

    //switch position
    _locationArray.splice(dragOverItem.current, 0, dragItemContent);

    //reset the position ref
    dragItem.current = 0;
    dragOverItem.current = 0;

    //update the actual array
    setLocationArray(_locationArray);
  };

  return (
    <>
      {locationArray.map((items: any, index: any) => (
        <div
          key={index}
          // className="text-success"
          style={{ color: "green", cursor: "move" }}
          draggable
          onDragStart={(e) => (dragItem.current = index)}
          onDragEnter={(e) => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          // ref={listItem}
          onDragOver={(e) => e.preventDefault()}
        >
          {index + 1} : {items.attributes.Address} <br />
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={() => {
              console.log(index);
              // setVisitedStatus(index);
            }}
          />
        </div>
      ))}
    </>
  );
};

export default index;

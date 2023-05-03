import React from "react";

interface IDirectionProps {
  directions: [];
}

const index: React.FC<IDirectionProps> = ({ directions }: IDirectionProps) => {
  return (
    <div>
      <ul>
        {directions.map((result:any, index) => (
          <div>
            <div>{index + 1}</div>
            <li>{result[index].attribute.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default index;

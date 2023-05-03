import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";
import "../../component/ReusableComponent/cardUI.css";

interface ICardProps{
  title:string
  subtitle:string
  text:string
  url?:string
  imgURL?:string
}

const index:React.FC<ICardProps> = ({title,subtitle,text,url,imgURL}:ICardProps) => {
  return (  
    <div>
      <Card id="cardImapct" className="shadow">
        <div className="overflow">
          <CardImg
            top
            width="100%"
            style={{ height: "30vh" }}
            src={imgURL}
            id="card-img-top"
            alt="Card Image"
          />
        </div>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}</CardText>
          <Button tag={ReactLink} to={url}>
            Map
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default index;

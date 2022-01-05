import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import {Button} from "react-bootstrap";
import "./style.css";


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem(props) {
  const {
    image,
    authors,
    title,
    description,
    link
  } = props;
  const bookData = {
    image,
    authors,
    title,
    description,
    link
  }
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>{authors}</p>
            <p>{description}</p>
            <a className = "view-a" rel="noreferrer noopener" target="_blank" href={link}>
              View
            </a>
            <Button className = "save-btn" variant = "outline-info" onClick = {()=>API.saveBook(bookData)}>
              Save
              </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function ButtonSizeExample() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button variant="danger">Left</Button>
        <Button variant="outline-info">Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      {/* <ButtonGroup> */}
      <Button size="lg">1</Button>
      <Button>2</Button>
      <Button size="sm">3</Button>
      {/* </ButtonGroup> */}
    </>
  );
}

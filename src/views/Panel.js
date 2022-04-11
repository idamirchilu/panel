import { Card, Collapse, Button, Form } from "react-bootstrap";
import Icons from "./components/Icons";
import MainForm from "./components/MainForm";

export default function Panel(props) {
  return (
    <div style={{ minHeight: "150px" }}>
      <Collapse in={props.open} dimension="width">
        <div>
          <Card
            body
            style={{
              width: "400px",
              backgroundColor: "rgb(103, 103, 255)",
              direction: "ltr",
            }}
          >
            <Form.Group style={{ display: "flex", flexDirection: "column" }}>
              <Form.Label htmlFor="availability-levels">
                Availability levels:
              </Form.Label>
              <Form.Control
                className="w-50"
                id="availability-levels"
                type="text"
              />
              <Button
                style={{ marginTop: "3px", width: "18%" }}
                variant="light"
              >
                Enter
              </Button>
            </Form.Group>
            <MainForm />
            <Button className="mt-1">Submit</Button>
            <Icons />
          </Card>
        </div>
      </Collapse>
    </div>
  );
}

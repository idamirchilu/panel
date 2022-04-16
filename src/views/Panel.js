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
              color: "#fff",
              width: "400px",
              backgroundColor: "rgba(31, 8, 31, 0.83)",
              direction: "ltr",
            }}
          >
            <Form.Group>
              <Form.Label htmlFor="availability-levels">
                Availability levels:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Form.Control
                  className="w-50"
                  id="availability-levels"
                  type="text"
                />
                <Button variant="light">Enter</Button>
              </div>
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

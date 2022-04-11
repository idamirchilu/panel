import { Form } from "react-bootstrap";

export default function MainForm() {
  return (
    <Form>
      <Form.Group className="mt-1">
        <Form.Label htmlFor="title">Title:</Form.Label>
        <Form.Control className="w-50" type="text" id="title" />
      </Form.Group>
      <Form.Group className="mt-1">
        <Form.Label htmlFor="start">Start Date:</Form.Label>
        <Form.Control className="w-50" type="date" id="start" />
      </Form.Group>
      <Form.Group className="mt-1">
        <Form.Label htmlFor="end">End Date:</Form.Label>
        <Form.Control className="w-50" type="date" id="end" />
      </Form.Group>
      <Form.Group className="mt-1">
        <Form.Label htmlFor="link">Link:</Form.Label>
        <Form.Control className="w-50" type="text" id="link" />
      </Form.Group>
      <Form.Group className="mt-1">
        <Form.Check
          style={{ backgroundColor: "red", color: "red" }}
          inline
          type="radio"
        />
        <Form.Check style={{ backgroundColor: "green" }} inline type="radio" />
        <Form.Check style={{ backgroundColor: "yellow" }} inline type="radio" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Event:</Form.Label>
        <Form.Control className="w-75" as="textarea" rows="5" />
      </Form.Group>
    </Form>
  );
}

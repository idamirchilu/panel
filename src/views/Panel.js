import { Card, Collapse, Form } from "react-bootstrap";
import calendarIcon from "../icons/calendar.png";
import mapsIcon from "../icons/maps.png";
import newsIcon from "../icons/news.png";
import chatIcon from "../icons/chat.png";
import contactsIcon from "../icons/contacts.png";
import driveIcon from "../icons/drive.png";

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
            <Form.Group>
              <Form.Label>Availability levels</Form.Label>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "120px" }}
              >
                <option value="1">Father</option>
                <option value="2">Mother</option>
                <option value="3">Brother</option>
              </Form.Select>
            </Form.Group>
            <div className="icons">
              <a href="www.google.com">
                <img src={calendarIcon} alt="calendar" />
              </a>
              <a href="www.google.com">
                <img src={mapsIcon} alt="maps" />
              </a>
              <a href="www.google.com">
                <img src={newsIcon} width="45px" height="45px" alt="maps" />
              </a>
              <br />
              <a href="www.google.com">
                <img src={chatIcon} width="45px" height="45px" alt="chat" />
              </a>
              <a href="www.google.com">
                <img src={driveIcon} alt="drive" />
              </a>
              <a href="www.google.com">
                <img src={contactsIcon} alt="contacts" />
              </a>
            </div>
          </Card>
        </div>
      </Collapse>
    </div>
  );
}

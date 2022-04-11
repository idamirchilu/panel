import calendarIcon from "../../icons/calendar.png";
import mapsIcon from "../../icons/maps.png";
import newsIcon from "../../icons/news.png";
import chatIcon from "../../icons/chat.png";
import contactsIcon from "../../icons/contacts.png";
import driveIcon from "../../icons/drive.png";

export default function Icons() {
  return (
    <div
      className="icons"
      style={{
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "1rem",
      }}
    >
      <a href="www.google.com">
        <img src={calendarIcon} alt="calendar" />
      </a>
      <a href="www.google.com">
        <img src={mapsIcon} alt="maps" />
      </a>
      <a href="www.google.com">
        <img src={newsIcon} width="45px" height="45px" alt="maps" />
      </a>
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
  );
}

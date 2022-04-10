import { Button } from "react-bootstrap";
import { BsJustify, BsXLg } from "react-icons/bs";
import { useState } from "react";
import Panel from "./Panel";

export default function Home() {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  return (
    <div style={{ direction: "rtl" }}>
      <Button
        style={{ marginBottom: "4px" }}
        onClick={() => setPanelIsOpen((prev) => !prev)}
        aria-controls="example-collapse-text"
        aria-expanded={panelIsOpen}
      >
        {panelIsOpen ? <BsXLg /> : <BsJustify />}
      </Button>
      <Panel open={panelIsOpen} />
    </div>
  );
}

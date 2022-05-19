import React, { useState } from "react";
import Buttons from "./Buttons";
import MyModal from "./Modal";
import Table from "./Table";

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Schedule</h1>

      <Buttons onClick={toggle} />

      <Table />

      <MyModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Schedule;

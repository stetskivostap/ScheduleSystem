import React, { useEffect, useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

type DropdownProps = {
  data: Array<String | number>;
  onClick?: any;
};

const Dropdown1 = ({ data, onClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState(data[0]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  const handleSelect = (e: any) => {
    setSelectedValue(e.target.textContent);
    onClick(e.target.textContent);
  };
  useEffect(() => {
    setSelectedValue(data[0]);
  }, [data]);

  return (
    <Dropdown toggle={toggleOpen}>
      <DropdownToggle caret>{selectedValue}</DropdownToggle>
      <DropdownMenu className={menuClass}>
        {data.map((d: any) => (
          <DropdownItem onClick={handleSelect} key={d}>
            {d}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Dropdown1;

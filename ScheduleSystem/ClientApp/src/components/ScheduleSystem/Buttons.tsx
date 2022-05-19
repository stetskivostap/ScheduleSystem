import * as React from "react";
import { courses } from "./constants";

type ButtonsProps = {
  onClick: any;
};

const Buttons = ({ onClick }: ButtonsProps) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        Додати пару
      </button>

      {courses.map((course) => (
        <button type="button" className="btn btn-primary" key={course}>
          {course}
        </button>
      ))}
      {/* <button type="button" className="btn btn-primary">
        1 курс
      </button>
      <button type="button" className="btn btn-primary">
        2 курс
      </button>
      <button type="button" className="btn btn-primary">
        3 курс
      </button>
      <button type="button" className="btn btn-primary">
        4 курс
      </button>
      <button type="button" className="btn btn-primary">
        5 курс
      </button>
      <button type="button" className="btn btn-primary">
        6 курс
      </button> */}
    </div>
  );
};

export default Buttons;

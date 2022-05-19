import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import {
  courses,
  lecturers,
  lessons,
  speciality,
  audiences,
} from "./constants";

import Dropdown1 from "./Dropdown";
import "./Modal.css";

type ModalProps = {
  toggle: any;
  isOpen: boolean;
};

const MyModal = ({ isOpen, toggle }: ModalProps) => {
  const sname = speciality.map((s) => s.name);
  const slecturers = lecturers.map((s) => s.name);

  const [selectedSpeciality, setSelectedSpeciality] = useState(sname[0]);
  const [selectedGroup, setSelectedGroup] = useState<String[]>([]);
  const [selectedLessonType, setSelectedLessonType] =
    useState<String>("practice");
  const [audience, setAudience] = useState<String[]>(
    audiences.map((a) => a.numb)
  );
  const [selectedLecturer, setSelectedLecturer] = useState<String>(
    slecturers[0]
  );
  const [selectedLesson, setSelectedLesson] = useState<String[]>(
    lecturers[0].lessons
  );

  useEffect(() => {
    const num = speciality.findIndex((s) => selectedSpeciality === s.name);
    setSelectedGroup(
      Array.from({ length: speciality[num].countOfGroups }, (_, i) => i).map(
        (n) => `${speciality[num].shortForm} - ${n + 1}`
      )
    );

    const t = audiences.filter((item) => item.type === selectedLessonType);
    setAudience(t.map((a) => a.numb));

    // const r = lecturers.find((item) => item.name === selectedLecturer);
    setSelectedLesson(
      lecturers.filter((item) => item.name === selectedLecturer)[0].lessons
    );
  }, [selectedSpeciality, selectedLessonType, selectedLecturer]);

  console.log(
    lecturers.filter((item) => item.name === selectedLecturer)[0].lessons
  );

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} style={{ width: "fit-content" }}>
        <ModalHeader>Додати пару</ModalHeader>
        <ModalBody>
          <div className="wrapper">
            <p>Курс</p>
            <Dropdown1 data={courses} />
          </div>
          <div className="wrapper">
            <p>Спеціальність</p>
            <Dropdown1 data={sname} onClick={setSelectedSpeciality} />
          </div>
          <div className="wrapper">
            <p>Група</p>
            <Dropdown1 data={selectedGroup} />
          </div>
          <div className="wrapper">
            <p>Номер пари</p>
            <Dropdown1 data={lessons.map((lesson) => lesson.numb)} />
          </div>
          <div className="wrapper">
            <p>Викладач</p>
            <Dropdown1 data={slecturers} onClick={setSelectedLecturer} />
          </div>
          <div className="wrapper">
            <p>Лекція/Практична</p>
            {/* <Dropdown1 /> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="lessonType"
                id="lecture"
                onChange={() => setSelectedLessonType("lecture")}
              />
              <label className="form-check-label" htmlFor="lecture">
                Лекція
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="lessonType"
                id="parctice"
                onChange={() => setSelectedLessonType("practice")}
                checked
              />
              <label className="form-check-label" htmlFor="parctice">
                Практична
              </label>
            </div>
          </div>
          <div className="wrapper">
            <p>Аудиторія</p>
            <Dropdown1 data={audience} />
          </div>
          <div className="wrapper">
            <p>Назва дисципліни</p>
            <Dropdown1 data={selectedLesson} />
          </div>{" "}
          {/**/}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyModal;

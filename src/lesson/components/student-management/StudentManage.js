import React, { useEffect, useState } from "react";
import "./studentManage.css";
import CreateStudentForm from "./CreateStudentForm";
import ShowStudentDetail from "./ShowStudentDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

import Button from 'react-bootstrap/Button';

function StudentManage (props) {
  // Khởi tạo State
  const [students, setStudents] = useState([]);
  const [studentDetail, setStudentDetail] = useState(null);
  const [studentUpdate, setStudentUpdate] = useState(null);

  // Khỏi tạo giá trị student khi tải trang lần đầu
  useEffect(() => {
    const students = [
      {
        id: 1,
        name: "Nguyen Van A",
        age: 20,
        sex: true,
      },
      {
        id: 2,
        name: "Nguyen Van B",
        age: 20,
        sex: false,
      },
      {
        id: 2,
        name: "Nguyen Van C",
        age: 20,
        sex: false,
      },
    ];
    setStudents(students);
  }, []);

  // event click vào button thêm mới
  const handleCreateStudent = () => {
    setStudentUpdate(null);
  };

  // event click vào button xóa
  const handleRemoveStudent = (id) => {
    const studentsRemove = [...students];
    const indexStudent = studentsRemove.findIndex((x) => x.id === id);
    if (indexStudent > -1) {
      studentsRemove.splice(indexStudent, 1);
      setStudents(studentsRemove);
    }
  };

  // event click vào button chỉnh sửa
  const handleUpdateStudent = (id) => {
    const studentsUpdate = [...students];
    const studentUpdate = studentsUpdate.find((x) => x.id === id);
    if (studentUpdate) {
      setStudentUpdate(studentUpdate);
    }
  };

  // event click vào button chi tiết
  const handleDetailsStudent = (item) => {
    setStudentDetail(item);
  };

  // event click submit from
  const handleSubmitStudent = (item) => {
    const newStudents = [...students];

    if (studentUpdate) {
      const index = newStudents.findIndex((x) => x.id === studentUpdate.id);
      newStudents[index] = item;
    } else {
      newStudents.push(item);
    }
    setStudents(newStudents);
  };
  return (
    <div>
      <h1> Danh sách sinh viên </h1>

      <Button variant="primary" onClick={() => {
        handleCreateStudent();
      }}
      > Thêm mới </Button>
      <Table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">ID</th>
            <th className="tg-0lax">Name</th>
            <th className="tg-0lax">Age</th>
            <th className="tg-0lax">Sex</th>
            <th className="tg-0lax">Action</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((item) => (
            <tr>
              <td className="tg-0lax">{item.id}</td>
              <td className="tg-0lax">{item.name}</td>
              <td className="tg-0lax">{item.age}</td>
              <td className="tg-0lax">{item.sex}</td>
              <td className="tg-0lax">
                <Button variant="danger"
                  onClick={() => {
                    handleRemoveStudent(item.id);
                  }}
                >
                  Xóa
                </Button>


                <Button variant="warning"
                  onClick={() => {
                    handleUpdateStudent(item.id);
                  }}
                >
                  Sửa
                </Button>
                <Button variant="info"
                  onClick={() => {
                    handleDetailsStudent(item);
                  }}
                >
                  Xem chi tiet
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <CreateStudentForm
        handleSubmitStudent={handleSubmitStudent}
        studentUpdate={studentUpdate}
      />

      <ShowStudentDetail student={studentDetail} />
    </div>
  );
}

export default StudentManage;

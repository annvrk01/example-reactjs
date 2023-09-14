import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function CreateStudentForm (props) {
  const { handleSubmitStudent, studentUpdate } = props;

  const inputIdRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputGenderRef = useRef(null);
  const inputDayBirthRef = useRef(null);
  const inputAddressRef = useRef(null);

  useEffect(() => {
    if (studentUpdate) { // neu id != null la chinh sua 
      inputIdRef.current.value = studentUpdate.id;
      inputNameRef.current.value = studentUpdate.name;
      inputAgeRef.current.value = studentUpdate.age;
    } else {
      // truong hop them moi 
      inputIdRef.current.value = "";
      inputNameRef.current.value = "";
      inputAgeRef.current.value = "";
      inputGenderRef.current.value = "";
      inputDayBirthRef.current.value = "";
      inputAddressRef.current.value = "";
    }
  }, [studentUpdate]);

  const handleSubmit = (event) => {
    const student = {
      id: inputIdRef.current.value,
      name: inputNameRef.current.value,
      age: Number(inputAgeRef.current.value),
      sex: inputGenderRef.current.value.toLowerCase() === "nam" ? true : false,
      dayBirth: inputDayBirthRef.current.value,
      address: inputAddressRef.current.value,
    };
    handleSubmitStudent(student);
    inputIdRef.current.value = "";
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
    inputGenderRef.current.value = "";
    inputDayBirthRef.current.value = "";
    inputAddressRef.current.value = "";
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Form style={{ textAlign: "left" }}>
      <h2>
        {studentUpdate
          ? "Chỉnh sửa thông Tin Sinh Viên "
          : " Thêm thông Tin Sinh Viên"}
      </h2>
      <div>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupId">
            <Form.Label>Mã sinh viên :</Form.Label>
            <Form.Control type="text"  ref={inputIdRef}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Tên sinh viên:</Form.Label>
            <Form.Control type="text"  ref={inputNameRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupAge">
            <Form.Label>Tuổi:</Form.Label>
            <Form.Control type="text" ref={inputAgeRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupGender">
            <Form.Label>Giới tính:</Form.Label>
            <Form.Control type="text" ref={inputGenderRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupBirth">
            <Form.Label>Ngày sinh:</Form.Label>
            <Form.Control type="date" ref={inputDayBirthRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupAddress">
            <Form.Label>Địa chỉ:</Form.Label>
            <Form.Control type="text" ref={inputAddressRef} />
          </Form.Group>     
        </Form>
        <br />
        <br />
        <Button onClick={handleSubmit}>
          {studentUpdate ? "Chỉnh sửa" : " Thêm mới "}
        </Button>
      </div>
      <hr />
    </Form>
  );
}

export default CreateStudentForm;

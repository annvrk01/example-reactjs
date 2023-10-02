import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"

function CreateStudentForm(props) {
  const { handleSubmitStudent, studentUpdate } = props;

  //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();

  const inputIdRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputGenderRef = useRef(null);
  const inputDayBirthRef = useRef(null);
  const inputAddressRef = useRef(null);

  useEffect(() => {
    if (studentUpdate) {
      inputIdRef.current.value = studentUpdate.id;
      inputNameRef.current.value = studentUpdate.name;
      inputAgeRef.current.value = studentUpdate.age;
    } else {
      inputIdRef.current.value = "";
      inputNameRef.current.value = "";
      inputAgeRef.current.value = "";
      inputGenderRef.current.value = "";
      inputDayBirthRef.current.value = "";
      inputAddressRef.current.value = "";
    }
  }, [studentUpdate]);

  const handleSubmit = () => {
    const student = {
      id: inputIdRef.current.value,
      name: inputNameRef.current.value,
      age: Number(inputAgeRef.current.value),
      sex: inputGenderRef.current.value.toLowerCase() === "nam" ? true : false,
      dayBirth: inputDayBirthRef.current.value,
      address: inputAddressRef.current.value,
    };

    dispatch({
      type: ADD_TODO,
      payload: {
          id: 2,
          name: 'Nguyen Van B '
      }
  })
  
    handleSubmitStudent(student);
    inputIdRef.current.value = "";
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
    inputGenderRef.current.value = "";
    inputDayBirthRef.current.value = "";
    inputAddressRef.current.value = "";
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>
        {studentUpdate
          ? "Chỉnh sửa thông Tin Sinh Viên "
          : " Thêm thông Tin Sinh Viên"}
      </h2>
      <div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Mã sinh viên:</label>
          <input ref={inputIdRef} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Tên sinh viên:</label>
          <input ref={inputNameRef} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Tuổi:</label>
          <input ref={inputAgeRef} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Giới tính:</label>
          <input ref={inputGenderRef} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Ngày sinh:</label>
          <input type="date" ref={inputDayBirthRef} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Địa chỉ:</label>
          <input ref={inputAddressRef} />
        </div>

        <br />
        <br />
        <button onClick={handleSubmit}>
          {studentUpdate ? "Chỉnh sửa" : " Thêm mới "}
        </button>
      </div>
      <hr />
    </div>
  );
}

export default CreateStudentForm;

import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { STUDENT } from "../../../constants/index"
import axios from 'axios';

function CreateStudentForm (props) {

  //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const students = useSelector(state => state.students)
  let { id } = useParams();
  // khởi tạo useRef

  const inputUsernameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputRealnameRef = useRef(null);


  useEffect(() => {
    // nếu có id thuộc trường hợp chỉnh sửa
    // if (id) {
    //   const studentUpdate = students.find((x) => Number(x.id) === Number(id));
    //   if (studentUpdate) {
    //     inputIdRef.current.value = studentUpdate.id;
    //     inputNameRef.current.value = studentUpdate.name;
    //     inputAgeRef.current.value = studentUpdate.age;
    //   }
    // }
    if(!id) return;
    console.log("getting student, id = " + id);
    axios.get("http://localhost:8000/api/user/" + id, {})
    .then(
      respond => {
        let gotStudent = respond.data.data;
        console.log('respond.data',respond.data)
        inputUsernameRef.current.value = gotStudent.username;
        inputEmailRef.current.value = gotStudent.email;
        inputRealnameRef.current.value = gotStudent.realname;     

        console.log("got student, gotStudent = ",gotStudent);
      }
    );
  }, []);

  const handleSubmit = (event) => {

    const student = {
      
      username: inputRealnameRef.current.value,
      email:  inputEmailRef.current.value,
      realname: inputRealnameRef.current.value,
      password: '123456'
    };
    if (id) {
      axios.put(`http://localhost:8000/api/user/${id}`,student)
      .then(res=>{
        console.log('res',res);
        console.log(res.data)
        
    navigate('./../..')
      })
    } else {
      axios.post(`http://localhost:8000/api/user`,student)
      .then(res=>{
        console.log('res',res);
        console.log(res.data)
      })
    }

   

      dispatch({
        type: STUDENT.STUDENT_ADD,
        payload: student
      })
      


    navigate('./..')
    event.preventDefault();
    event.stopPropagation();
  };

  const handleGoBack = () => {
    navigate(-1);  // Quay lại trang trước đó
  };
  return (
    <Container>
      <Form style={{ textAlign: "left" }}>
        <h2>
          {id
            ? "Chỉnh sửa thông Tin Sinh Viên "
            : " Thêm thông Tin Sinh Viên"}
        </h2>
        <div>

          <Form>
           

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Tên sinh viên:</Form.Label>
              <Form.Control type="text" ref={inputUsernameRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAge">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" ref={ inputEmailRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupGender">
              <Form.Label>Realname:</Form.Label>
              <Form.Control type="text" ref={inputRealnameRef} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formGroupBirth">
              <Form.Label>Ngày sinh:</Form.Label>
              <Form.Control type="date" ref={inputDayBirthRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control type="text" ref={inputAddressRef} />
            </Form.Group> */}
          </Form>

          <Row >
            <Col className="d-flex gap-2">
              <Button onClick={handleSubmit}>
                {id ? "Chỉnh sửa" : " Thêm mới "}
              </Button>
              <Button variant="secondary" onClick={handleGoBack} >
                Quay lại
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </Container>
  );
}

export default CreateStudentForm;

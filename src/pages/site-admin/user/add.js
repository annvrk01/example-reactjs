import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
// import { USER } from "../../../constants/index"
import { addUser, updateUser } from "../../../redux/reducer/userSlice";

function UserAdd () {
  //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();
  const users = useSelector(state => state.users)
  const inputIdRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const handleSubmit = () => {
    const item = {
      id: inputIdRef?.current?.value,
      name: inputNameRef?.current?.value,
      age: inputAgeRef?.current?.value
    }

    if (!id) {
      const actionAdd = addUser(item);
      dispatch(actionAdd);
    } else {
      const actionUpdate = updateUser(item);
      dispatch(actionUpdate);
    }
    navigate(-1);
  }

  useEffect(() => {
    // nếu có id thuộc trường hợp chỉnh sửa
    if (!id) return;
    const user = users.find((x) => Number(x.id) === Number(id));
    if (user) {
      inputIdRef.current.value = user.id;
      inputNameRef.current.value = user.name;
      inputAgeRef.current.value = user.age;
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);  // Quay lại trang trước đó
  };

  return (
    <Container>
      <h2> Add User</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formGroupId">
          <Form.Label>ID :</Form.Label>
          <Form.Control type="text" ref={inputIdRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" ref={inputNameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control type="text" ref={inputAgeRef} />
        </Form.Group>
      </Form>

      <Row >
        <Col className="d-flex gap-2">
          <Button onClick={handleSubmit}>
          {id ? "Update" : " Add "}
          </Button>
          <Button variant="secondary" onClick={handleGoBack}  >
            Back
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default UserAdd;

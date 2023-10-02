import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { USER } from "../../../constants/index"

function UserAdd (props) {
      //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const inputIdRef = useRef(null);
    const inputNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const handleSubmit = () =>{
        console.log('inputIdRef', inputIdRef)
        const item= {
            id  : inputIdRef?.current?.value,
            name  : inputNameRef?.current?.value,
            email : inputEmailRef?.current?.value
        }
        dispatch( {
            type: USER.USER_ADD,
            payload : item
        })
        navigate("./..");
    }

  return (
    <Container>
         <h2> Add User</h2>

         <Form>
            <Form.Group className="mb-3" controlId="formGroupId">
              <Form.Label>ID :</Form.Label>
              <Form.Control type="text" ref={ inputIdRef}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text"   ref={ inputNameRef}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAge">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text"  ref={ inputEmailRef}  />
            </Form.Group>
          </Form>

          <Row >
            <Col className="d-flex gap-2">
              <Button onClick={ handleSubmit  }>
               Add
              </Button>
              <Button variant="secondary"  >
               Back
              </Button>
            </Col>
          </Row>

    </Container>
  );
}

export default UserAdd;

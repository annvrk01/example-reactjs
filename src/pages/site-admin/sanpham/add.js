import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { SANPHAM } from "../../../constants/index"
import { productActionAdd } from "./../../../redux/action/product"

function SanphamAdd (props) {
      //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const inputTenSanPhamRef = useRef(null);
    const inputGiaRef = useRef(null);
    const inputLoaiSanPhamRef = useRef(null);
    const inputSoLuongRef = useRef(null);
    const inputSttRef = useRef(null);
    const handleSubmit = () =>{
       // console.log('inputIdRef', inputGiaRef)
        const item= {
            tenSanPham  : inputTenSanPhamRef?.current?.value,
            gia  : inputGiaRef?.current?.value,
            loaiSanPham : inputLoaiSanPhamRef?.current?.value,
            soLuong : inputSoLuongRef?.current?.value,
            stt : inputSttRef?.current?.value,
        }
        dispatch( productActionAdd(item) )
        navigate("./..");
    }

  return (
    <Container>
         <h2> THEM SAN PHAM</h2>

         <Form>
         <Form.Group className="mb-3" controlId="formGroupId">
              <Form.Label>STT:</Form.Label>
              <Form.Control type="text" ref={ inputTenSanPhamRef}  />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formGroupId">
              <Form.Label>TEN SAN PHAM:</Form.Label>
              <Form.Control type="text" ref={ inputTenSanPhamRef}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>GIA:</Form.Label>
              <Form.Control type="text"   ref={ inputGiaRef}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAge">
              <Form.Label>LOAI SAN PHAM:</Form.Label>
              <Form.Control type="text"  ref={ inputLoaiSanPhamRef}  />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formGroupAge">
              <Form.Label>SO LUONG:</Form.Label>
              <Form.Control type="text"  ref={ inputSoLuongRef}  />
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

export default SanphamAdd;

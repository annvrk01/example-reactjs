import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

import { STUDENT } from "./../../../constants/index"
import ConfirmDelete from './../../../components/molecules/confirm'
import Pagination from 'react-bootstrap/Pagination';

import "./../../../scss/student-management/index.scss";
import axios from 'axios';

function StudentManage () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [idDeleta, setIdDelete] = useState(null);
  const [show, setShow] = useState(false);
  const [studentsAPI, setStudentAPI] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [active, setActive] = useState(1);
  const [limit, setLimit] = useState(5);
  const [paginations, setPaginations] = useState([]);

  useEffect(() => {
    console.log('useEffect')
    axios.get(`http://localhost:8000/api/user/all?limit=${limit}&page=1&key=Ngueyn Van A`)
      .then(res => {
        console.log(res, 'res')
        console.log(res.data)
       const page = Math.ceil( res.data.count /limit ); 
       console.log('page', page)
       let pages= [ ]
       for(let i = 1 ; i <= page ; i++){
        pages.push(i)
       }
       setPaginations(pages)
        setStudentAPI(res.data.data)
      })
      .catch(error => console.log(error));
  }, [])

  // event click vào button thêm mới
  const handleCreateStudent = (link) => {
    // xử lý chuyển trang
      navigate("add")
  };

  // event click vào button xóa
  const handleRemoveStudent = (id) => {
    setIdDelete(id)
    handleShow();

  };
  const handleSubmitConfirm = async () => {
    await axios.delete(`http://localhost:8000/api/user/${idDeleta}`)
      .then(res => {
        console.log('res', res);
        console.log(res.data)
      });

    await axios.get(`http://localhost:8000/api/user/all?limit=${limit}&page=1`)
      .then(res => {
        console.log(res, 'res')
        setStudentAPI(res.data.data)
      }).catch(error => console.log(error));

    dispatch({
      type: STUDENT.STUDENT_DELETE,
      payload: {
        id: idDeleta
      }
    })
    setIdDelete(null)
    handleClose();
  }

  // event click vào button chỉnh sửa
  const handleUpdateStudent = (id) => {
    // chuyển trang kèm theo id
    navigate("edit/" + id);
  };

  // event click vào button chi tiết
  const handleDetailsStudent = (item) => {
    navigate("detail/" + item.id);
  };

  const onLoadPagination =  async (page) =>{
    setActive(page)
    await axios.get(`http://localhost:8000/api/user/all?limit=${limit}&page=`+ page)
    .then(res => {
      setStudentAPI(res.data.data)
    }).catch(error => console.log(error));
  };



  return (
    <div>
      <Container>
        <Row  >
          <Col xs={10} ><h1> Danh sách sinh viên  </h1> </Col>
          <Col xs={2}   >
            <Button variant="primary" className="btn-create" onClick={() => {
              handleCreateStudent();
            }}
            > Thêm mới
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
            <Table className="tg">
              <thead>
                <tr>
                  <th className="tg-0lax">ID</th>
                  <th className="tg-0lax">Email</th>
                  <th className="tg-0lax">Username</th>
                  <th className="tg-0lax">Giới tính</th>
                  <th className="tg-0lax" style={{ width: 300 }}>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {studentsAPI?.map((item) => (
                  <tr>
                   
                    <td className="tg-0lax">{item.email}</td>
                    <td className="tg-0lax">{item.username}</td>
                    <td className="tg-0lax">{item.sex}</td>
                    <td className="d-flex gap-2">
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
            <Pagination>

            {paginations?.map((item) => (
            <Pagination.Item key={1} active={ item === active } onClick={ ()=> { onLoadPagination(item) }}> { item} </Pagination.Item>
            ))}
            </Pagination>
           
          </Col>
        </Row>
        <ConfirmDelete show={show} handleClose={handleClose} handleSubmitConfirm={handleSubmitConfirm}> </ConfirmDelete>
      </Container>

    </div>
  );
}

export default StudentManage;

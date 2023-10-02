import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
function Sanpham (props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sanphams = useSelector(state => state.sanphams) // get giá trị state students
    // console.log('users', users)
    const handleCreateSanpham = () => {
        navigate("add");
    }
    return (
        <div>
            <Container>
                <Row  >
                    <Col xs={10} ><h1> Danh sach san pham </h1> </Col>
                    <Col xs={2}   >
                        <Button variant="primary" className="btn-create" onClick={() => {
                            handleCreateSanpham();
                        }}
                        > Thêm mới
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Table className="tg">
                            <thead>
                                <tr><th className="tg-0lax">STT</th>
                                    <th className="tg-0lax">TEN SAN PHAM</th>
                                    <th className="tg-0lax">GIA</th>
                                    <th className="tg-0lax">LOAI SAN PHAM</th>
                                    <th className="tg-0lax">SO LUONG</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {sanphams?.map((item) => (
                                    <tr>
                                        <td className="tg-0lax">{item.Stt}</td>
                                        <td className="tg-0lax">{item.tenSanPham}</td>
                                        <td className="tg-0lax">{item.gia}</td>
                                        <td className="tg-0lax">{item.loaiSanPham}</td>
                                        <td className="tg-0lax">{item.soLuong}</td>
                                        <td className="d-flex gap-2">
                                            {/* <Button variant="danger"
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
                      </Button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Sanpham;

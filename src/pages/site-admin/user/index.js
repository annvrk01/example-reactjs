import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../redux/reducer/userSlice";
function User (props) {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log('users', users)
  const handleCreateUser = () => {
    navigate("add");
  }
  const handleRemoveUser = (id) => {
    const myAction = removeUser(id);
    dispatch(myAction);
  }

  const handleUpdateStudent = (id) => {
    // const update = 
    navigate("edit/" + id);

  }
  return (
    <div>
      <Container>
        <Row  >
          <Col xs={10} ><h1> List User </h1> </Col>
          <Col xs={2}   >
            <Button variant="primary" className="btn-create" onClick={() => {
              handleCreateUser();
            }}
            > Thêm mới
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>

            <Table className="tg">
              <thead>
                <tr>
                  <th className="tg-0lax">ID</th>
                  <th className="tg-0lax">Nam</th>
                  <th className="tg-0lax">AGE</th>
                  <th className="tg-0lax" style={{ width: 300 }}>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item) => (
                  <tr>
                    <td className="tg-0lax">{item.id}</td>
                    <td className="tg-0lax">{item.name}</td>
                    <td className="tg-0lax">{item.age}</td>
                    <td className="d-flex gap-2">
                      <Button variant="danger"
                        onClick={() => {
                          handleRemoveUser(item.id);
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
                      {/* <Button variant="info"
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

export default User;

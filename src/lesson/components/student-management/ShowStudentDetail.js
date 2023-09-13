function ShowStudentDetail(props) {
  return (
    <div>
      {props.student && (
        <div>
          <p> Tên sinh viên : {props.student?.name}</p>
          <p> Tuổi : {props.student?.age}</p>
          <p> Giới tính : {props.student?.sex ? "Nam" : "Nữ"}</p>
        </div>
      )}
    </div>
  );
}
export default ShowStudentDetail;

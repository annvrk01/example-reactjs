import React, { useEffect, useState } from "react"
import './studentManage.css'
import CreateStudentForm from "./CreateStudentForm"
import ShowStudentDetail from "./ShowStudentDetail"

function StudentManage (props) {
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState(null )

    useEffect(() => {
        const students = [
            {
                id: 1,
                name: "Nguyen Van A",
                age: 20,
                sex: true
            },
            {
                id: 2,
                name: "Nguyen Van B",
                age: 20,
                sex: false
            }
        ]
        setStudents(students)
    }, [])

    const handleCreateStudent = (newStudent) => {
        const newStudents = [...students]
        newStudents.push(newStudent)
        console.log({ newStudent });
        setStudents(newStudents)
    }

    const handleRemoveStudent = (id) => {
        setStudents(
            students.filter(a =>
                a.id !== id
            )
        )
    }

    const handleDetailsStudent = (item) =>{
        setStudent(item)
    }
    return (
        <div>
            <h1> Danh sách sinh viên </h1>
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0lax">ID</th>
                        <th className="tg-0lax">Name</th>
                        <th className="tg-0lax">Age</th>
                        <th className="tg-0lax">Sex</th>
                        <th className="tg-0lax">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map(item => (
                        <tr>
                            <td className="tg-0lax">{item.id}</td>
                            <td className="tg-0lax">{item.name}</td>
                            <td className="tg-0lax">{item.age}</td>
                            <td className="tg-0lax">{item.sex}</td>
                            <td className="tg-0lax">
                                <button onClick={() => { handleRemoveStudent(item.id) }}>Xóa</button>
                                <span> / </span>
                                <button>Sửa</button>
                                <button onClick={() =>  { handleDetailsStudent(item) }}>Xem chi tiet</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <CreateStudentForm handleCreateStudent={handleCreateStudent} />
            <ShowStudentDetail student={student} />
        </div>
    )

}

export default StudentManage
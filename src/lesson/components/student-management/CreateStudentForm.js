import { useRef  } from "react"

function CreateStudentForm(props) {
    const {handleCreateStudent} = props
    const inputIdRef = useRef(null)
    const inputNameRef = useRef(null)
    const inputAgeRef = useRef(null)
    const inputGenderRef = useRef(null)
    const inputDayBirthRef = useRef(null)
    const inputAddressRef = useRef(null)

    const handleSubmit = () => {
        const student = {
            id: inputIdRef.current.value,
            name: inputNameRef.current.value,
            age: Number(inputAgeRef.current.value),
            sex: inputGenderRef.current.value.toLowerCase() === 'nam' ? true : false,
            dayBirth: inputDayBirthRef.current.value,
            address: inputAddressRef.current.value,
        }
        handleCreateStudent(student)
        inputIdRef.current.value = ''
        inputNameRef.current.value = ''
        inputAgeRef.current.value = ''
        inputGenderRef.current.value = ''
        inputDayBirthRef.current.value = ''
        inputAddressRef.current.value = ''
    }

    return <div style={{textAlign: 'left'}}>
        <h2>Thông Tin Sinh Viên</h2>
        <div>
            <div style={{display: 'flex'}}>
                <label style={{width: 150}}>Mã sinh viên:</label>
                <input ref={inputIdRef}/>
            </div>
            <div style={{display: 'flex'}}>
                <label style={{width: 150}}>Tên sinh viên:</label>
                <input ref={inputNameRef}/>
            </div>
            <div style={{display: 'flex'}}>
                <label style={{width: 150}}>Tuổi:</label>
                <input ref={inputAgeRef}/>
            </div>
            <div style={{display: 'flex'}}>
                <label style={{width: 150}}>Giới tính:</label>
                <input  ref={inputGenderRef}/>
            </div>
            <div style={{display: 'flex'}}>
                <label style={{width: 150}}>Ngày sinh:</label>
                <input type="date"  ref={inputDayBirthRef}/>
            </div>
            <div style={{display: 'flex'}}>
                <label style={{width: 150}}>Địa chỉ:</label>
                <input  ref={inputAddressRef}/>
            </div>

            <br/>
            <br/>
            <button onClick={handleSubmit}>Tạo</button>
        </div>
    </div>
}

export default CreateStudentForm
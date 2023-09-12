import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
// import MyComponent from './lesson/components/MyComponent'
// import Session02Component from './lesson/components/Session02Component'
// import Welcome  from './lesson/components/WelcomeFN';
import StudentManage from './lesson/components/student-management/StudentManage'
function App() {
  return (
    <div className="App">
       {/* <MyComponent name="Nguyen Van D"></MyComponent>

       <Session02Component></Session02Component>
       <Welcome name ='the world' address ='DA NANG'> </Welcome> */}
       {/* <Welcome2 name ='the world' address ='DA NANG'> </Welcome2>
        */}

        <StudentManage></StudentManage>
    </div>
  );
}
export default App;

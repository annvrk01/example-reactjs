import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
import MyComponent from './lesson/components/MyComponent'
function App() {
  return (
    <div className="App">
       <MyComponent name="Nguyen Van D"></MyComponent>
    </div>
  );
}
export default App;

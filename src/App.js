import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
import MyComponent from './lesson/components/MyComponent'
import Session02Component from './lesson/components/Session02Component'
function App() {
  return (
    <div className="App">
       <MyComponent name="Nguyen Van D"></MyComponent>

       <Session02Component></Session02Component>
    </div>
  );
}
export default App;

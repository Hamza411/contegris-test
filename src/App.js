import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="task-app">
        <TaskList />
      </div>
</Provider>
  );
}

export default App;

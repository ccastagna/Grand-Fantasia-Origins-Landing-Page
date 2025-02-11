import Start from './components/start';
import Login from './components/login';
import Register from './components/register';
import PatchNotes from './components/patchNotes';
import { Route } from 'wouter';
import './App.css';

function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-green'>
      <Route path='/' component={Start} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/patchNotes' component={PatchNotes}></Route>
    </main>
  );
}

export default App;

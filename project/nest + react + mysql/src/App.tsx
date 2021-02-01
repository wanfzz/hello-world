import { renderRoutes } from 'react-router-config'
import { HashRouter, Redirect } from 'react-router-dom'
import Home from '@/container/Home';
import Login from '@/container/Login';

const routerConfig = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={"/home"} />
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  }
]

function App() {
  return (
    <div className="App">
      <HashRouter>
        {renderRoutes(routerConfig)}
      </HashRouter>
    </div>
  );
}

export default App

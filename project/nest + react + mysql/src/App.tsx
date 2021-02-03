import { renderRoutes } from 'react-router-config'
import { HashRouter, Redirect } from 'react-router-dom'
import Home from '@/container/Home';
import Login from '@/container/Login';
import { AxiosConfig } from '@/providers/axios'

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
      <AxiosConfig config={{ baseURL: 'http://localhost:3000/api/' }}>
        <HashRouter>
          {renderRoutes(routerConfig)}
        </HashRouter>
      </AxiosConfig>
    </div>
  );
}

export default App

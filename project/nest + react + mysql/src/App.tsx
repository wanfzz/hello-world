import { Provider } from 'mobx-react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { HashRouter, Redirect } from 'react-router-dom'
import Home from '@/container/Home'
import Login from '@/container/Login'
import Todo from '@/container/Todo'
import stores from './store'

const routerConfig: RouteConfig[] = [
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
  },
  {
    path: '/todo',
    component: Todo,
  }
]

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <HashRouter>
          {renderRoutes(routerConfig)}
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App

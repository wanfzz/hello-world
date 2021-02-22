import { Provider } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
import Home from '@/container/Home'
import Login from '@/container/Login'
import Todo from '@/container/Todo'
import stores from './store'
import { Route } from 'react-router'

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <HashRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/todo" component={Todo}></Route>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App

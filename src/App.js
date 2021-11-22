import PostList from './components/PostList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Header webSiteTitle='WildBlog' />
      <Switch>
        <Route exact path='/' component={PostList} />
        <Route exact path='/:id' component={PostDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

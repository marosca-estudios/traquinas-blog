import React from 'react'
import HomePage from 'pages/Home'
import PostPage from 'pages/Post'
import { Route, Switch } from 'react-router';

class App extends React.Component<{}, {}> {

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
      </Switch>
    )
  }

};

export default App

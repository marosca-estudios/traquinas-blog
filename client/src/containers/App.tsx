import React from 'react'
import HomePage from 'pages/Home'
import PostPage from 'pages/Post'
import { Route, Switch } from 'react-router';
import { listPostIds } from 'data/blogger/services';

export const PostsContext = React.createContext([]);

class App extends React.Component<{}, { postIds: any }> {
  constructor(props: any) {
    super(props);

    this.state = {
      postIds: [],
    }
  }

  componentDidMount() {
    listPostIds()
      .then((payload: any) => this.setState({
        postIds: payload.items,
      }))
  }

  render() {
    return (
      <PostsContext.Provider value={this.state.postIds}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post/:id" component={PostPage} />
        </Switch>
      </PostsContext.Provider>
    )
  }

};

export default App

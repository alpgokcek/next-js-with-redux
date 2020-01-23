import react from 'react';
import '../styles/app.scss';
import { getPosts, setPosts } from '../store/actions/posts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../constants';
import fetch from 'isomorphic-fetch';
import { Link, Router } from '../routes';


class Homepage extends React.Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(getPosts()).then(async (e) => {
      return {posts: await e};
    });
  }

  render () {
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={() => {
          Router.pushRoute('/comments');
        }}>All Comments
        </button>
        {this.props.posts.posts || this.props.posts.posts.length>0 ? this.props.posts.posts.map((post) => {
          return (
            <div className="content" key={post.id}>
              <p className="content__title" >{post.title}</p>
              <p>{post.body}</p>
              <button onClick={() => {
                Router.pushRoute('comments', {slug:post.id});
              }}>Comments on this post
              </button>
            </div>
          );
        }) : <p>No posts yet!</p>}
      </div>
    );
  }
}

export default connect(state => state)(Homepage);

/*
const mapDispatchToProps = dispatch => ({
  setPosts: bindActionCreators(setPosts, dispatch),
  getPosts: bindActionCreators(getPosts, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Homepage);

 */

/*
const postsFetch = await fetch(`${API_URL}/posts`);
    const posts = await postsFetch.json()
    store.getState();
    store.dispatch(setPosts(posts));
    return {posts}
 */

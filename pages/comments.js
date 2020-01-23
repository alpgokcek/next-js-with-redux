import react from 'react';
import '../styles/app.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getComments} from '../store/actions/comments';
import { Router } from '../routes';
import { getPosts } from '../store/actions/posts';


class Comments extends React.Component {
  static async getInitialProps ({ store, query }) {
    await store.dispatch(getComments(query.slug? Number(query.slug):undefined)).then(async (comments) => {
      return {comments: await comments};
    });
  }

  render () {
    return (
      <div>
        <h1>Comments</h1>
        <button onClick={()=>{Router.pushRoute('/')}}>Posts</button>
        {this.props.comments.comments ? this.props.comments.comments.map((comment) => {
          return (
            <div className="content" key={comment.id}>
              <p className="content__title">{comment.name} - {comment.email}</p>
              <p>{comment.body}</p>
            </div>
          );
        }) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  getComments: bindActionCreators(getComments, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);





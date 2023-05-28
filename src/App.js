import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      editedTitle: '',
      showBlock: false,
      notification: '123444',
      timer: null
    };
  }

  componentDidMount() {
    this.fetchPosts();
    this.setState({
      timer: setTimeout(() => {
        this.setState({ showBlock: false });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          posts: json
        }))
      .catch(error => {
        console.log(error);
      });
  }

  timer() {
    clearTimeout(this.state.timer);

    this.setState({
      timer: setTimeout(() => {
        this.setState({ showBlock: false });
      }, 5000)
    });
  }

  handleTitleChange = event => {
    this.setState({ editedTitle: event.target.value });
  };

  editPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: this.state.editedTitle,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        this.setState(prevState => ({
          posts: prevState.posts.map(post =>
            post.id === postId ? { ...post, title: this.state.editedTitle } : post
          ),
          editedTitle: '',
          showBlock: true,
          notification: 'The post was updated!'
        }));
        this.timer();
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost = postId => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    })
      .then(() => {
        this.setState(prevState => ({
          posts: prevState.posts.filter(post => post.id !== postId),
          showBlock: true,
          notification: 'The post was deleted!'
        }));
        this.timer();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='container'>
        {this.state.posts.map(post => (
          <div className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className='buttons'>
              <input onChange={this.handleTitleChange} />
              <button className='editButton' onClick={() => this.editPost(post.id)}>Edit</button>
              <button className='deleteButton' onClick={() => this.deletePost(post.id)}>Delete</button>
            </div>
          </div>
        ))}
        {this.state.showBlock && <div className='info'>{this.state.notification}</div>}
      </div>
    )
  }
}

export default App;

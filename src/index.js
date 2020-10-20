import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Iron Man" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora at, officiis doloribus minima eum optio dignissimos, quis perspiciatis fugit voluptatum, dolorem aut non praesentium. Tempora rerum nostrum voluptatum iusto." 
        timeAgo="6 days ago"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Harry Potter" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora at, officiis doloribus minima eum optio dignissimos, quis perspiciatis fugit voluptatum, dolorem aut non praesentium. Tempora rerum nostrum voluptatum iusto." 
        timeAgo="5 minutes ago"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Bruce Lee" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora at, officiis doloribus minima eum optio dignissimos, quis perspiciatis fugit voluptatum, dolorem aut non praesentium. Tempora rerum nostrum voluptatum iusto." 
        timeAgo="2 days ago"
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'))
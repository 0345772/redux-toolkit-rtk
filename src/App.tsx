import React from 'react';
import { CommentContainer, PostContainter, UserContainer } from './features';

function App() {
  return (
    <div className="App">
      
      <CommentContainer/>
      <PostContainter />
      <UserContainer />

    </div>
  );
}

export default App;

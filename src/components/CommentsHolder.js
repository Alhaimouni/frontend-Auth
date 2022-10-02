import React from 'react'

function CommentsHolder({ comments }) { //[array of comment object]
  return (
    <div className='commentsHolder'>
      {comments.map((comment, index) => (          //comment = {content='',userId='',postId=''}
        <div key={index}>
          <p> By User: {comment.userId}</p>
          <h3>{comment.content}</h3>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default CommentsHolder

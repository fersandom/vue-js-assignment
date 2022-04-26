const numberOfComments = (post, comments) => {
    let commentCounter = 0;
  
    for (const comment of comments) {
      if (post.id === comment.postId) {
        commentCounter++;
      }
    }
    return commentCounter;
  };

export default numberOfComments;
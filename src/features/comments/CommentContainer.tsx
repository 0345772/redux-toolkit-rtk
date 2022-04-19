import React, { useState } from 'react';
import { IComment } from '../../models';
import { commentAPI } from './commentAPI';
import { CommentItem } from './CommentItem';

export const CommentContainer = () => {
  const [limit, setLimit] = useState(10)
  const { data: comments } = commentAPI.useFetchAllCommentsQuery(limit);
  const [createComment, { isLoading }] = commentAPI.useCreateCommentMutation();
  const [updateComment, { isLoading: isLoadingComment }] = commentAPI.useUpdateCommentMutation();
  const [deleteComment, {}] = commentAPI.useDeleteCommentMutation()

  const handleCreate = async () => {
    const name = prompt()
    const email = prompt()
    const body = prompt()
    await createComment({ name, email: `${email}@gmail.com`, body } as IComment)
  }

  const handleUpdate = (comment: IComment) => {
    updateComment(comment)
  }
  const handleRemove = (comment: IComment) => {
    deleteComment(comment)
  }

  return (
    <div >
      <button onClick={handleCreate}>Add comment</button>
      <ol >
        {comments && comments.map((comment, i) =>
          <li>
            <CommentItem key={comment.id} comment={comment} num={0} remove={handleRemove} update={handleUpdate} />
          </li>

        )}
      </ol>
    </div>
  );
};

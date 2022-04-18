import React, { FC } from 'react';
import { IComment } from '../../models';

interface CommentProps {
  comment: IComment;
  num: number;
  remove: (comment: IComment) => void;
  update: (comment: IComment) => void;
}

export const CommentItem: FC<CommentProps> = ({ comment, remove, update }) => {
  const { name, email, body } = comment;

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    remove(comment)
  }

  const handleUpdate = () => {
    const name = prompt()|| '';
    const email = prompt()||'';
    const body = prompt()||'';
    update({...comment, name, email, body })
  }


  return (
    <div>

      <div
        onClick={handleUpdate}
        style={{ border: "1px solid red", padding: "15px", margin: "10px", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
        <div>{name}</div>
        <div>{email}</div>
        <div>{body}</div>
        <button
          onClick={handleRemove}
        >Delete</button>
      </div>
    </div>
  );
};

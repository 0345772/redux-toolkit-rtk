import { FC } from "react";
import { IPost } from "../../models";

interface PostItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {

  const handleUpdate = () => {
    const title = prompt() || "";
    update({
      ...post, title
    })
  }
  
  const handleRemove =  (e: { stopPropagation: () => void; }) => {
     e.stopPropagation();
     remove(post)
  }

  return (
    <div
      onClick={handleUpdate}
      style={{padding: '10px', border: "1px solid gray", display: "flex", justifyContent: 'space-between' }}
      className="post-item">
      <div> id: {post.id}</div>
      <div> header: {post.title}</div>
      <div> body: {post.body}</div>
      <button onClick={handleRemove} >Delete</button>
    </div>
  )
}

export default PostItem;
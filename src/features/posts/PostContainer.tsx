import { useState } from "react";
import { IPost } from "../../models";
import { postAPI } from "./postAPI";
import PostItem from "./PostItem";

export const PostContainter = () => {

  const [limit] = useState(10);
  const { data: posts } = postAPI.useFetchAllMyPostsQuery(limit);
  const [createPost, { isLoading }] = postAPI.useCreateMyPostsMutation();
  const [updatePost, { error }] = postAPI.useUpdateMyPostsMutation();
  const [deletePost, { }] = postAPI.useDeleteMyPostsMutation();

  const handleCreatePost = async (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    const name = prompt();
    await createPost({ title: name, body: `${name} - это новый пост` } as IPost)

  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  const handleRemove = async (post: IPost) => {
    await deletePost(post)
  }

  return (
    <div
      className="post-containter">

      <h3>Список постов:</h3>

      <button onClick={handleCreatePost}>Add Post</button>

      <ol >
        {
          posts && posts.map((post: IPost, i: any) =>
            <li key={post.id}>
              <PostItem post={post} update={handleUpdate} remove={handleRemove} />
            </li>
          )
        }
      </ol>
    </div>
  )

}

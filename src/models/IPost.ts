export interface IPost {
  update: (post: IPost) => void;
  id: number | string;
  title: string;
  body: string;
}
  

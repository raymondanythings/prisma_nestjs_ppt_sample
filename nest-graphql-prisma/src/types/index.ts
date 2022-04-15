type Nullable<T> = T | null;

export class NewPost {
  title: string;
  content: string;
}

export class UpdatePost {
  id: string;
  published?: Nullable<boolean>;
  title?: Nullable<string>;
  content?: Nullable<string>;
}

export class Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
}

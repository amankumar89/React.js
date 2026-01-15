interface ErrorMessageProps {
  title: string;
  message: string;
  onRetry: () => void;
}

interface UserProps {
  name?: string;
  email?: string;
  bio?: string;
  avatar?: string;
}

interface PostProps {
  id: string | number;
  title: string;
  content: string;
  createdAt: string;
}

interface PostsProps {
  posts: PostProps[];
}

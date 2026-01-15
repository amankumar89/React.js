/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import UserProfilePresenter from "./UserProfilePresenter";
import AppLayout from "../../../../../AppLayout";

const mockUser: UserProps = {
  name: "Aman Kumar",
  email: "aman@example.com",
  bio: "Full Stack Developer passionate about building scalable web apps and learning system design.",
  avatar: "https://i.pravatar.cc/150?img=12",
};

const mockPosts: PostProps[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    content:
      "React Hooks let you use state and lifecycle features without writing class components.",
    createdAt: "2025-01-10T10:30:00Z",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    content:
      "TypeScript adds static typing to JavaScript, improving code quality and maintainability.",
    createdAt: "2025-01-12T14:15:00Z",
  },
  {
    id: "3",
    title: "Backend with Node.js",
    content:
      "Node.js is great for building fast, scalable backend services using JavaScript.",
    createdAt: "2025-01-14T09:00:00Z",
  },
];

const UserProfileContainer = ({ userId }: { userId: string | number }) => {
  const [user, setUser] = useState<UserProps>({});
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = () => {
    try {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        setUser(mockUser);
        setLoading(false);
      }, 1500); // 2.5 seconds
    } catch {
      setError("Failed to fetch user data");
      setLoading(false);
    }
  };

  const fetchUserPosts = () => {
    setTimeout(() => {
      setPosts(mockPosts);
    }, 1500);
  };

  const handleUpdateUser = async (updatedUserData: UserProps) => {
    try {
      return new Promise<{ success: boolean }>((resolve) => {
        setTimeout(() => {
          setUser(updatedUserData);
          resolve({ success: true });
        }, 1500);
      });
    } catch {
      return { success: false, error: "Failed to update profile" };
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const handleRetry = () => {
    fetchUserData();
  };

  return (
    <AppLayout title="Container-Presenter Pattern">
      <UserProfilePresenter
        user={user}
        posts={posts}
        loading={loading}
        error={error}
        onUpdateUser={handleUpdateUser}
        onRetry={handleRetry}
      />
    </AppLayout>
  );
};

export default UserProfileContainer;

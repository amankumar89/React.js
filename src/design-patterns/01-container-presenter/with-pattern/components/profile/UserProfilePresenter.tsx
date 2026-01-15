/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import ProfileHeader from "./ProfileHeader";
import PostsList from "../post/PostsList";

const UserProfilePresenter = ({
  user,
  posts,
  loading,
  error,
  onUpdateUser,
  onRetry,
}: {
  user: UserProps;
  posts: PostProps[];
  loading: boolean;
  error: null | string;
  onUpdateUser: (
    data: UserProps
  ) => Promise<{ success: boolean; error: null | string }>;
  onRetry: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProps>({
    name: "",
    email: "",
    bio: "",
    avatar: "",
  });
  const [formError, setFormError] = useState<string | null>(null);

  // Initialize form data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        ...user,
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  }, [user]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear form error when user starts typing
    if (formError) setFormError(null);
  };

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
      setFormError(null);
    } else {
      setFormError(result.error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormError(null);
    // Reset form data
    if (user) {
      setFormData({
        ...user,
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Oops! Something went wrong"
        message={error}
        onRetry={onRetry}
      />
    );
  }

  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        formError={formError}
        onStartEdit={() => setIsEditing(true)}
        onSaveProfile={handleSaveProfile}
        onCancelEdit={handleCancelEdit}
        onInputChange={handleInputChange}
      />

      <PostsList posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;

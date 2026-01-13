import UserCard from "./UserCard";
import useGithub from "./hooks/useGithub";

const GitHubUser = ({ userName }: { userName: string }) => {
  const { user, loading, error } = useGithub({ userName });

  return (
    <div className="w-fit p-4 flex bg-gray-100">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">error in finding users.</p>}
      {user && !loading && <UserCard user={user} />}
    </div>
  );
};

export default GitHubUser;

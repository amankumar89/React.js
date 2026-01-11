type GitHubUser = {
  id: number;
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  public_repos: number;
  html_url: string;
};

type UserCardProps = {
  user: GitHubUser;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="w-80 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
      {/* Avatar */}
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 rounded-full mx-auto"
      />

      {/* Name */}
      <h2 className="mt-3 text-center text-lg font-semibold text-gray-800">
        {user.name ?? user.login}
      </h2>

      {/* Bio */}
      {user.bio && (
        <p className="mt-1 text-center text-sm text-gray-600">{user.bio}</p>
      )}

      {/* Info */}
      <div className="mt-4 space-y-1 text-sm text-gray-700">
        {user.location && (
          <p>
            📍 <span className="font-medium">{user.location}</span>
          </p>
        )}

        {user.blog && (
          <p>
            🔗{" "}
            <a
              href={
                user.blog.startsWith("http")
                  ? user.blog
                  : `https://${user.blog}`
              }
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.blog}
            </a>
          </p>
        )}

        <p>
          📦 Public Repos:{" "}
          <span className="font-semibold">{user.public_repos}</span>
        </p>
      </div>

      {/* Profile */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="block mt-4 text-center text-sm font-medium text-blue-600 hover:underline"
      >
        View GitHub Profile →
      </a>
    </div>
  );
}

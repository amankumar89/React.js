import { useEffect, useState } from "react";

interface Props {
  userName: string;
}
const useGithub = ({ userName }: Props) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchGitHubUsers(userName: string) {
      setLoading(true);
      try {
        const url = `https://api.github.com/users/${userName}`;
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
      } catch (error) {
        setError(true);
        console.error("Error fetching GitHub users:", error);
      } finally {
        setLoading(false);
      }
    }
    if (userName) fetchGitHubUsers(userName);
  }, [userName]);

  return { user, loading, error };
};

export default useGithub;

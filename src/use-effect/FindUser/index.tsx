import { useState } from "react";
import AppLayout from "../../AppLayout";
import GitHubUser from "./GithubUser";
import { useDebounce } from "./hooks/useDebounce";

const FindUser = () => {
  const [userName, setUserName] = useState<string>("");
  const debounceUserName = useDebounce(userName, 1000);

  return (
    <AppLayout title="Find Users">
      <div className="my-4">
        <input
          value={userName}
          type="text"
          placeholder="type user name..."
          className="w-4/5 h-12 border rounded-md px-2"
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="mt-4">
          {debounceUserName ? (
            <GitHubUser userName={debounceUserName} />
          ) : (
            "Please initiate a user"
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default FindUser;

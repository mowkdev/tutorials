import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { getUsers } from "./api/api.js";

const LoadingIndicator = () => {
  return <div>Loading...</div>;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const userData = await getUsers();
    setData(userData);
    setIsLoading(false);
  };

  useEffect(() => {
    void fetchData();
  }, []);

  const hasValidData = data && data.length > 0 && Array.isArray(data);

  return (
    <div className={styles["app-container"]}>
      <div>
        <h1>Users</h1>
        <div>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            hasValidData &&
            data.map((user) => {
              return (
                <div key={user.id} className={styles["user-card"]}>
                  <div>{user.name}</div>
                  <div className={styles["user-avatar"]}>
                    <img src={user.avatar} alt={user.name} />
                  </div>
                </div>
              );
            })
          )}
          <div>
            {!isLoading && !hasValidData && (
              <div className={styles["no-data"]}>
                Error loading data, please try again
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

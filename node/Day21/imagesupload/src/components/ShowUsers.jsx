import { useEffect, useState } from "react";
import axios from "axios";

const ShowUsers = ({ refresh }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsers = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/all`
      );

      setUsers(response.data);

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Failed to fetch users"
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    getUsers();

  }, [refresh]);

  return (
    <>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && users.length === 0 && (
        <p>No users found</p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        {users.map((user) => (

          <div
            key={user._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              textAlign: "center"
            }}
          >

            <img
              src={
                `${import.meta.env.VITE_IMAGE_URL}/${user.image}`
              }
              alt={user.name}
              width="150"
              height="150"
              style={{
                objectFit: "cover",
                borderRadius: "50%"
              }}
            />

            <h3>{user.name}</h3>

          </div>

        ))}

      </div>
    </>
  );
};

export default ShowUsers;
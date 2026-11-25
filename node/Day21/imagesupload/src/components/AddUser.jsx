import { useState } from "react";
import axios from "axios";

const AddUser = ({ refreshUsers }) => {

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    // Name validation
    if (
      name.trim().length < 3 ||
      name.trim().length > 50
    ) {
      return setError(
        "Name must contain 3 to 50 characters"
      );
    }

    // Image validation
    if (!image) {
      return setError("Please select an image");
    }

    // Image type validation
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp"
    ];

    if (!allowedTypes.includes(image.type)) {
      return setError("Only JPG, PNG and WEBP allowed");
    }

    // Image size validation
    if (image.size > 2 * 1024 * 1024) {
      return setError("Image size must be below 2 MB");
    }

    // Create FormData
    const formData = new FormData();

    formData.append("name", name.trim());
    formData.append("image", image);

    const form = e.currentTarget;

    try {

      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add`,
        formData
      );

      alert(response.data.message);

      setName("");
      setImage(null);

      form.reset();

      refreshUsers();

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Failed to add user"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) =>
            setImage(e.target.files[0] || null)
          }
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Add User"}
        </button>

      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </>
  );
};

export default AddUser;
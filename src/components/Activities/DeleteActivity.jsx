import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteActivity = ({ activity }) => {
  const { id } = useParams();
  const [deletedActivity, setDeletedActivity] = useState({
    name: activity.name,
    description: activity.description,
  });

  const navigate = useNavigate();

  const deleteFromDb = async (event) => {
    event.preventDefault();

    try {
      const update = await axios.delete(
        `http://localhost:3005/api/activities/${id}`,
        { ...deletedActivity }
      );
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
    deleteFromDb();
  };

  return (
    <div>
      <button
        onClick={deleteFromDb}
        className="btn btn-outline-dark btn-sm btn-floating"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteActivity;

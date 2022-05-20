import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const hobbiesList = [
  { name: "Outdoor", id: 1 },
  { name: "Mindfulness", id: 2 },
  { name: "Gaming", id: 3 },
  { name: "Sports", id: 4 },
  { name: "Sports", id: 5 },
  { name: "Workout", id: 6 },
  { name: "DIY", id: 7 },
  { name: "Networking", id: 8 },
  { name: "Other", id: 9 },
];

const avatarList = [
  { text: "Glasses_Dark", avatarId: "glassesdark", id: 1 },
  { text: "Redhair", avatarId: "redhair", id: 2 },
  { text: "Laughing", avatarId: "laughing", id: 3 },
  { text: "Moustache", avatarId: "moustache", id: 4 },
  { text: "Old Nerd", avatarId: "oldnerd", id: 5 },
  { text: "Suit", avatarId: "suit", id: 6 },
];

const SignUp = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [avatarId, setAvatarId] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const submitUserRegisteration = () => {
    signup(
      name,
      email,
      password,
      hobbies,
      avatarId,
      location,
      description
    ).then((user) => {
      props.setLoggedInUser(user);
      navigate("/");
    });
  };

  const handleChange = (newHobbiesList) => {
    const hobbyStrings = newHobbiesList.map((el) => el.name);

    setHobbies(hobbyStrings);
  };

  // const handleChange = (newAvatar) => {
  //   const
  // }

  return (
    <center>
      <div className="App card sign-up home-text" style={{ paddingBottom: 30 }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="min. 8 characters"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          Neighbourhood
          <input
            type="location"
            placeholder="ex. Kreuzberg"
            name="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label>
          Description
          <br />
          <textarea
            rows="4"
            placeholder="A bit about yourself"
            name="description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Hobbies
          <Multiselect
            name="hobbies"
            displayValue="name"
            onRemove={handleChange}
            onSelect={handleChange}
            options={hobbiesList}
          />
        </label>
        <label>
          <section>
            {" "}
            Choose an Avatar
            <div>
              {avatarList.map((avatar) => (
                <img
                  className="profile-photo-selection"
                  src={require(`./UserProfile/avatars/${avatar.avatarId}.gif`)}
                  onClick={() => setAvatarId(avatar.avatarId)}
                  key={avatar.avatarId}
                  alt={avatar.text}
                />
              ))}
            </div>
          </section>
        </label>

        <button
          className="btn btn-outline-dark btn-sm btn-floating"
          onClick={submitUserRegisteration}
        >
          Register
        </button>
      </div>
    </center>
  );
};

export default SignUp;

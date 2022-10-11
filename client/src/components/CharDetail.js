import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../App.css";
const CharDetail = (props) => {
  const [char, setAllChars] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/char/" + id)
      .then((res) => {
        console.log(res.data);
        setAllChars(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteChar = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/char/${idFromBelow}`)
      .then((res) => {
        console.log(res.data);
        const newList = char.filter((char, index) => char._id !== idFromBelow);
        setAllChars(newList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="charBox">
        <div className="Profil">
          <img className="DtP" src={char.profPic} alt="Profile Pic" />
          <div className="text-warning mt-5">
            <h2>Stats</h2>
            <h4>Strength: {char.strength}</h4>
            <h4>Dexterity: {char.dexterity}</h4>
            <h4>Constitution: {char.constitution}</h4>
            <h4>intelligence: {char.intelligence}</h4>
            <h4>Charisma: {char.charisma}</h4>
            <h4>Wisdom: {char.wisdom}</h4>
          </div>
        </div>
        <div className="Bstry">
         <h1 className="mt-5">{char.name}</h1>
          <h3 className="mt-3">Class Type: {char.classs}</h3>
          <br/>
          <h4>{char.name}'s Backstory</h4>
         <p className="mt-5 text-light">{char.desc}</p>
          <Link to={"/"}>
            <button
className="btn btn-danger"onClick={() => deleteChar(char._id)}>End {char.name}'s journey</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CharDetail;

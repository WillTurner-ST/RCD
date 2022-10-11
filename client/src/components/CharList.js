import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const CharList = () => {
  const [allChars, setAllChars] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/char")
      .then((response) => {
        console.log(response.data);
        setAllChars(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
      <div className="Boxx">
      <table className="table table-bordered table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Character Name</th>
            <th scope="col">Class</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="tdca">
          {allChars.map((char, index) => {
            return (
              <tr>
                <td className="text-warning" ><img className="propf" src={char.profPic} alt="Profile Pic" />{char.name}</td>
                <td className="text-">{char.classs}</td>
                <td className="td2">
                <td><Link to={`/${char._id}`}>Details</Link></td>
                  <Link to={`/chars/${char._id}/edit`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CharList;

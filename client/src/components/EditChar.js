import axios from "axios";
import "../App.css";
import dice from "../assets/images/Dice.png";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditChar = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [classs, setClasss] = useState("");
  const [profPic, setProfPic] = useState("");
  const [strength, setStrength] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [charisma, setCharisma] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [errors, setErrors] = useState({});
  console.log(id);
  
  const classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/char/${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setDesc(response.data.desc);
        setClasss(response.data.classs);
        setProfPic(response.data.profPic);
        setStrength(response.data.strength);
        setDexterity(response.data.dexterity);
        setConstitution(response.data.constitution);
        setCharisma(response.data.charisma);
        setIntelligence(response.data.intelligence);
        setWisdom(response.data.wisdom);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  const rollDice = (e) => {
    setStrength(Math.floor(Math.random() * 20) + 1);
    setDexterity(Math.floor(Math.random() * 20) + 1);
    setConstitution(Math.floor(Math.random() * 20) + 1);
    setCharisma(Math.floor(Math.random() * 20) + 1);
    setIntelligence(Math.floor(Math.random() * 20) + 1);
    setWisdom(Math.floor(Math.random() * 20) + 1);
    e.preventDefault();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/char/${id}`, {
        name,
        desc,
        classs,
        profPic,
        strength,
        dexterity,
        constitution,
        charisma,
        intelligence,
        wisdom,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <div>
      <div>
        <div>
          <form
            onSubmit={submitHandler}
            className="Container bg-dark text-warning "
          >
            <div className="cont">
              <div className="Fbox">
                <h4>Create Your Character</h4>
                <div className="padd">
                  <label htmlFor="name">Character Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div className="padd">
                  <label htmlFor="classs">Class</label>
                  <select
                    className="form-control"
                    onChange={(e) => setClasss(e.target.value)}
                    value={classs}
                  >
                    <option value="">Select a Class</option>
                    {classes.map((classs, i) => (
                      <option key={i} value={classs}>
                        {classs}
                      </option>
                    ))}
                  </select>
                  {errors.classs ? <p>{errors.classs.message}</p> : null}
                </div>
                <div className="padd">
                  <label htmlFor="profPic">Character Avatar</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setProfPic(e.target.value)}
                    value={profPic}
                  />
                  {errors.profPic ? <p>{errors.profPic.message}</p> : null}
                </div>
              </div>
              <div className="Fbox2">
                <h4>Create your Backstory</h4>
                <label htmlFor="profPic"></label>
                <textarea
                  rows={12}
                  type="text"
                  className="form-control"
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                />
                {errors.profPic ? <p>{errors.profPic.message}</p> : null}
              </div>
            </div>
            <div className="Fboc">
              <div className="statCont">
                <input
                onClick={rollDice}
                  className="Dice animatebutton"
                  type="image"
                  src={dice}
                  alt="Roll For Stats!"
                  id="animatebutton"
                />
                <div className="btnrdm">
                  <h4>Strength</h4>
                  <input
                  
                    type="text"
                    className="form-control inputB"
                    onChange={(e) => setStrength(e.target.value)}
                    value={strength}
                  />
                  {errors.profPic ? <p>{errors.profPic.message}</p> : null}
                </div>
                <div className="btnrdm">
                  <h4>Dexterity</h4>
                  <input
                    type="text"
                    className="form-control inputB"
                    onChange={(e) => setDexterity(e.target.value)}
                    value={dexterity}
                  />
                  {errors.dexterity ? <p>{errors.dexterity.message}</p> : null}
                </div>
                <div className="btnrdm">
                  <h4>Constitution</h4>
                  <input
                    type="text"
                    className="form-control inputB"
                    onChange={(e) => setConstitution(e.target.value)}
                    value={constitution}
                  />
                  {errors.constitution ? <p>{errors.constitution.message}</p> : null}
                </div>
                <div className="btnrdm">
                  <h4>Charisma</h4>
                  <input
                    type="text"
                    className="form-control inputB"
                    onChange={(e) => setCharisma(e.target.value)}
                    value={charisma}
                  />
                  {errors.charisma ? <p>{errors.charisma.message}</p> : null}
                </div>
                <div className="btnrdm">
                  <h4>Intelligence</h4>
                  <input
                    type="text"
                    className="form-control inputB"
                    onChange={(e) => setIntelligence(e.target.value)}
                    value={intelligence}
                  />
                  {errors.intelligence ? <p>{errors.intelligence.message}</p> : null}
                </div>
                <div className="btnrdm">
                  <h4>Wisdom</h4>
                  <input
                    type="text"
                    className="form-control inputB"
                    onChange={(e) => setWisdom(e.target.value)}
                    value={wisdom}
                  />
                  {errors.wisdom ? <p>{errors.wisdom.message}</p> : null}
                </div>
              </div>
              <div className="Fbox4">
                <button className="btn col-5 btn-warning" type="submit">
                  Edit {name}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditChar;

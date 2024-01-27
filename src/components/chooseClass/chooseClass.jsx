import { useEffect, useState } from "react";
import { classes } from "../../config/class-stats";
import "./styles.css";

export default function ChooseClass() {
  const [subClass, setSubClass] = useState("");
  const [battle, setBattle] = useState(null);
  const [tech, setTech] = useState("");
  const [persona, setPersona] = useState("");
  const [strength, setstrength] = useState(0);
  const [agility, setagility] = useState(0);
  const [intelligence, setintelligence] = useState(0);
  const [endurance, setendurance] = useState(0);
  const [luck, setLuck] = useState(0);
  const [profiencies, setProfiencies] = useState(undefined);
  const [charisma, setCharisma] = useState(0);
  const [equipment, setEquipment] = useState(null);
  const [exp, setExp] = useState(0);
  const classLookup = {
    mage: classes.mage,
    archer: classes.archer,
    alchemist: classes.alchemist,
    healer: classes.healer,
    warrior: classes.warrior,
    paladin: classes.paladin,
  };

  useEffect(() => {
    if (battle) {
      setstrength(classLookup[battle].strength);
      setagility(classLookup[battle].agility);
      setintelligence(classLookup[battle].intelligence);
      setendurance(classLookup[battle].endurance);
      setProfiencies(classLookup[battle].profiency);
      setEquipment(classLookup[battle].equipment);
    }
  }, [battle]);
  function handleSubmit(evt) {
    evt.preventDefault();
    const playerData = {
      class: {
        tech,
        battle,
        persona,
      },
      stats: {
        lv: 1,
        strength,
        agility,
        intelligence,
        endurance,
        luck,
        charisma,
        subClass,
        exp: 0,
        skills: {},
      },
    };
    localStorage.setItem("player", JSON.stringify(playerData));
  }

  return (
    <form className="table" onSubmit={handleSubmit}>
      <div className="leftRow battle">
        <div className="cell">
          <input
            type="radio"
            name="battleClass"
            id="mage"
            onClick={() => setBattle("mage")}
          />
          <label htmlFor="mage">Mage</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="battleClass"
            id="alchemist"
            onClick={() => setBattle("alchemist")}
          />
          <label htmlFor="alchemist">Alchemist</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="battleClass"
            id="warrior"
            onClick={() => setBattle("warrior")}
          />
          <label htmlFor="warrior">Warrior</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="battleClass"
            id="archer"
            onClick={() => setBattle("archer")}
          />
          <label htmlFor="archer">Archer</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="battleClass"
            id="healer"
            onClick={() => setBattle("healer")}
          />
          <label htmlFor="healer">Healer</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="battleClass"
            id="paladin"
            onClick={() => setBattle("paladin")}
          />
          <label htmlFor="paladin">Paladin</label>
        </div>
      </div>
      <div className="leftRow tech">
        <input
          type="radio"
          name="techClass"
          id="Artisan"
          onClick={() => setTech("artisan")}
        />
        <label htmlFor="Artisan">Artisan</label>
        <input
          type="radio"
          name="techClass"
          id="Poet"
          onClick={() => setTech("poet")}
        />
        <label htmlFor="Poet">Poet</label>
        <input
          type="radio"
          name="techClass"
          id="Strategist"
          onClick={() => setTech("strategist")}
        />
        <label htmlFor="Strategist">Strategist</label>
      </div>
      <div className="leftRow persona">
        <div className="cell">
          <input
            type="radio"
            name="personaClass"
            id="calm"
            onClick={() => setPersona("calm")}
          />
          <label htmlFor="calm">Tranquil Mind's Whisperer</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="personaClass"
            id="fiery"
            onClick={() => setPersona("fiery")}
          />
          <label htmlFor="fiery">Crimson Tempest</label>
        </div>
        <div className="cell">
          <input
            type="radio"
            name="personaClass"
            id="intuitive"
            onClick={() => setPersona("intuitive")}
          />
          <label htmlFor="intuitive">Echoed Observer</label>
        </div>
      </div>
      <div className="rightRow">
        <div className="statsSection">
          <h3>STATS</h3>
          <div>Strength : {strength}</div>
          <div>Agility : {agility}</div>
          <div>Intelligence : {intelligence}</div>
          <div>Endurance : {endurance}</div>
          <div>Luck : {luck}</div>
          <div>Charisma : {charisma}</div>
        </div>
        {equipment && (
          <div className="equipmentSection">
            <h3>EQUIPMENT</h3>
            {equipment.map((item) => (
              <div key={item.name}>{item.name}</div>
            ))}
          </div>
        )}
        {profiencies && (
          <div className="proficienciesSection">
            <h3>PROFICIENCIES</h3>
            {profiencies.map((profiency) => (
              <div key={profiency.name}>
                {profiency.name}: {profiency.level}
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="submit">Create Character</button>
    </form>
  );
}

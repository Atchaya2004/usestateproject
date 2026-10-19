import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  function handleSkill(skill) {
    setSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  }

  const allSkills = ["React", "Node", "Java", "SQL"];

  return (
    <div>
      {allSkills.map((skill) => (
        <label key={skill} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={skills.includes(skill)}
            onChange={() => handleSkill(skill)}
          />
          {skill}
        </label>
      ))}

      <p>Selected skills: {skills.join(", ")}</p>
    </div>
  );
}

export default Skills;
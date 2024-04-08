const Skills = (type, value) => {
  return (
    <div>
      <h4>{type}</h4>
      <div className="resume-skills-software-concepts">
        {value.map((item, index) => (
          <ul key={index} className="resume-skills-content">
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;

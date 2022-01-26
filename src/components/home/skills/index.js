//@ts-check
import React, { useEffect } from "react";
import { useUserSkills } from "../../../services/user.service";

export default function Skills() {
  const { data, getData, loading } = useUserSkills();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      {loading && <div>Loading...</div>}
      {data.map((skill) => (
        <div key={skill.ID}>{skill.Name}</div>
      ))}
    </div>
  );
}

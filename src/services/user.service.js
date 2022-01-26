//@ts-check
import { to } from "await-to-js";
import { useState } from "react";
import { useAPI } from "./api.service";

export function useUserSkills() {
  const { get } = useAPI();
  const [data, setSkills] = useState([]);
  const [loading, setSkillsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    setSkillsLoading(true);
    const [err, skills] = await to(get("/user/skills"));
    if (err) {
      setError(err);
    } else {
      setSkills(skills);
      setSkillsLoading(false);
    }
    return skills;
  }

  return {
    data,
    loading,
    error,
    getData,
  };
}

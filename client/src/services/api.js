const BASE_URL = "http://localhost:5000";

export const fetchProjects = async () => {
  const response = await fetch(`${BASE_URL}/api/projects`);
  return response.json();
};

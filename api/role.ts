// api/role.ts
import axios from 'axios';

const BASE_URL = 'http://localhost/react-paper/backend/api/role.php';

export async function createRole(role: string) {
  const res = await axios.post(BASE_URL, { role });
  return res.data;
}

export async function getRoles() {
  const res = await axios.get(BASE_URL);
  return res.data;
}

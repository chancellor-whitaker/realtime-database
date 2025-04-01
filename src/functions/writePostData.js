import { getDatabase, ref, set } from "firebase/database";

export const writePostData = ({ id, ...post }) =>
  set(ref(getDatabase(), "posts/" + id), post);

import { getDatabase, ref, set } from "firebase/database";

export default function writeData({ route, data }) {
  set(ref(getDatabase(), route), data);
}

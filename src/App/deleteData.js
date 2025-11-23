import { getDatabase, remove, ref } from "firebase/database";

export default function deleteData(route) {
  remove(ref(getDatabase(), route));
}

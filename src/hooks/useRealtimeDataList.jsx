import { getDatabase, onValue, ref, off } from "firebase/database";
import { useEffect, useState } from "react";

export const useRealtimeDataList = (path = "/posts") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, path);
    onValue(
      dbRef,
      (snapshot) => {
        const array = [];

        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const row = { ...childData, id: childKey };
          array.push(row);
        });

        setData(array);
      },
      {
        // onlyOnce: true,
      }
    );

    return () => {
      off(dbRef);
    };
  }, [path]);

  return data;
};

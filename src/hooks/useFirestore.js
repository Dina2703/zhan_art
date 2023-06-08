import { db } from "../firebase/config";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const useFirestore = (myCollection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, myCollection), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    //cleanup func. Unsubscribe from the collection when we no longer use it.
    return () => unsubscribe();
  }, [myCollection]);

  return { docs };
};

export default useFirestore;

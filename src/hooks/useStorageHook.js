import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useState, useEffect } from "react";
import { storage, db } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = ref(storage, file.name);
    const collectionRef = collection(db, "images");

    const uploadTask = uploadBytesResumable(storageRef, file);
    //upload the file
    uploadTask.on(
      "state_changed",

      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
        // console.log(snap);
      },
      (err) => {
        setErr(err);
      },

      async () => {
        //get url of an image
        const url = await getDownloadURL(storageRef);
        //add the url to firestore db
        await addDoc(collectionRef, { url, createdAt: serverTimestamp() });
        setUrl(url);
      }
    );
  }, [file]);

  //pass file and get back 3 values from the hook(function)
  return { progress, err, url };
};

export default useStorage;

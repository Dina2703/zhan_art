import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function BlogId() {
  const [postData, setPost] = useState(null);
  const [laoding, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", params.blogsId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.blogsId]);

  console.log(postData);
  if (laoding) {
    <p>Loading...😈</p>;
  }
  return <div>BlogId - {params.blogsId}</div>;
}

export default BlogId;

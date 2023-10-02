import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const PostStatus = (object) => {
  
  addDoc(dbRef, object)
    .then(() => {
      toast.success("Post Created");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPosts = (setAllPosts) => {
  
  onSnapshot(dbRef, (response) => {
    setAllPosts(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email == localStorage.getItem("userEmail");
        })[0]
    );
  });
};

import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../../firebase-config";

const collectionName = "categories";

export const getCategoryFromAPI = async () => {
  const querySnapshot = await getDocs(collection(database, collectionName));
  let categories = [];
    console.log(querySnapshot);
    
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    let category = doc.data();
    category.id = doc.id;
    categories.push(category);
  });
  return categories;
};

export const addCategoryToAPI = async (category) => {
  const docRef = await addDoc(collection(database, collectionName), category);
  console.log("Document written with ID: ", docRef.id);
};

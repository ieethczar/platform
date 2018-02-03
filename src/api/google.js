import firebase from './connection/firebase';

export function getProductById(id){
  return firebase.database().ref("videos").child(id)
    .once("value")
    .then(s=>{
      const video = s.val();
      return video;
    });
}
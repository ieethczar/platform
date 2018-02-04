import firebase from './connection/firebase';

export function getProductById(id){
  return firebase.database().ref("productos").child(id)
    .once("value")
    .then(s=>{
      const video = s.val();
      return video;
    });
}




/*
	let contenidos = this.state.contenidos;
        firebase.database().ref("productos")
        	.on("child_added", snap=>{
              	let registro = snap.val();
              	//if(!nino.photos) nino["photos"] = ["link"];
              	registro["id"] = snap.key;
              	contenidos.push(registro);
              	this.setState({contenidos});
        });

*/
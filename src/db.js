import * as firebase from "firebase";
import Event from "./models/Event";

export default class DB {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyC4TcCaEZVyaCzuKjCdOrpp0WdB4Lj9t04",
      authDomain: "eventlist-db4c9.firebaseapp.com",
      databaseURL: "https://eventlist-db4c9.firebaseio.com",
      projectId: "eventlist-db4c9",
      storageBucket: "eventlist-db4c9.appspot.com",
      messagingSenderId: "343942611360"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
    }
  }

  listAllEvents = () => {
    let db = firebase.firestore();

    return db
      .collection("EventList")
      .get()
      .then(snapshot => {
        let events = [];

        snapshot.forEach(doc => {
          let doc_data = doc.data();
          let event = new Event(doc_data.title, doc_data.description, doc.id);

          events.push(event);
        });

        return events;
      });
  };

  deleteEvent = id => {
    let db = firebase.firestore();

    return db
      .collection("EventList")
      .doc(id)
      .delete();
  };

  addEvent = theEvent => {
    let db = firebase.firestore();

    return db.collection("EventList").add({
      title: theEvent.title,
      description: theEvent.description
    });
  };
}

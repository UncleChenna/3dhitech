import * as admin from "firebase-admin";
import firebaseConfig from "../../config/firebase.config";


const dbConnection = () => {
    if ( !admin.apps.length ) {
        admin.initializeApp( { ...firebaseConfig } );
        console.log( ' successfully initialized firebase database 🦉 ' )
    }
    return admin
}




export default dbConnection
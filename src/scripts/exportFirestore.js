const admin = require('firebase-admin');
const fs = require('fs');

// Path to your service account key
const serviceAccount = require('../../kamea-56f11-firebase-adminsdk-nzeap-e6e8e0ebba.json');


// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Firestore instance
const db = admin.firestore();

// Export Firestore collection
const exportCollection = async (collectionName) => {
  const collectionRef = db.collection(collectionName);
  const snapshot = await collectionRef.get();
  const data = [];

  snapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });

  // Write data to a JSON file
  fs.writeFileSync(`${collectionName}.json`, JSON.stringify(data, null, 2));
  console.log(`Exported ${snapshot.size} documents from ${collectionName} to ${collectionName}.json`);
};

// Call the function with your collection name
exportCollection('technology');  // replace 'technology' with the name of the collection you want to export

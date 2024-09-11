const admin = require('firebase-admin');
const fs = require('fs');

// Path to the new service account key
const serviceAccount = require('../../orasempreannapolis-firebase-adminsdk-4l1ck-dc694231e6.json');


// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Firestore instance
const db = admin.firestore();

// Function to import JSON data into Firestore
const importCollection = async (collectionName, jsonFile) => {
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  const batch = db.batch();

  data.forEach(doc => {
    const docRef = db.collection(collectionName).doc(doc.id);
    batch.set(docRef, doc);
  });

  await batch.commit();
  console.log(`Imported ${data.length} documents into ${collectionName}`);
};

// Call the function with your collection names and file paths
importCollection('products', './products.json');
importCollection('technology', './technology.json');

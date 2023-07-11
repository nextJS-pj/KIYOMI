import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const {
  Next_API_KEY,
  Next_AUTH_DOMAIN,
  Next_PROJECT_ID,
  Next_MESSAGE_SENDER_ID,
  Next_STORAGE_BUCKET,
  Next_APP_ID,
  Next_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: Next_API_KEY,
  authDomain: Next_AUTH_DOMAIN,
  projectId: Next_PROJECT_ID,
  storageBucket: Next_STORAGE_BUCKET,
  messagingSenderId: Next_MESSAGE_SENDER_ID,
  appId: Next_APP_ID,
  measurementId: Next_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

let app = null
let db = null

export default function database() {
  app = app || initializeApp(config);
  db = db || getDatabase(
    app,
    process.env.NEXT_PUBLIC_REALTIME_DATABASE_URL
  );
  return db;
}

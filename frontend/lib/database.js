import { initializeApp } from "firebase/app";
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { doc, getDoc, getFirestore, updateDoc, increment, setDoc, serverTimestamp } from "firebase/firestore"
import { getDatabase, ref, set, onValue } from "firebase/database"
import isDev from "@utils/isDev";

export const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(config)
const firestore = getFirestore(app)
const db = getDatabase(app)

export const database = () => {
  return {
    getPosts: async function() {
      return new Promise((resolve, reject) => {
        const path = isDev ? 'blog-dev/posts/' : 'blog/posts/'
        const blogRef = ref(db,  path);
        onValue(blogRef, (snapshot) => {
          let data = snapshot.val()
          if (data) {
            data = Object.entries(data).map(([key, props]) => {
              return {
                slug: key,
                ...props
              }
            })
            resolve(data)
          }
          reject()
        });
      })
    },
    addPost: async function(slug, data) {
      const path  = isDev ? 'blog-dev/posts/' : 'blog/posts/'
      return await set(ref(db, path + slug), data);
    },
  }
}

export const user = () => {
  const coll = process.env.NODE_ENV === 'development' ? 'users-dev' : 'users'
  async function getUserVisitorId() {
    const fp = await FingerprintJS.load()
    const { visitorId } = await fp.get()
    return visitorId
  }
  const getVisitorId = getUserVisitorId()
  return {
    set: {
      post: function(slug) {
        return {
          like: async function() {
            return await setDoc(doc(firestore, coll, await getVisitorId), {
              [slug]: { isLiked: true, updated: serverTimestamp() }
            }, { merge: true })
          },
          dislike: async function() {
            return await setDoc(doc(firestore, coll, await getVisitorId), {
              [slug]: { isLiked: false, updated: serverTimestamp() }
            }, { merge: true })
          }
        }
      }
    },
    get: {
      post: function(slug) {
        return {
          isLiked: async function() {
            return (await getDoc(doc(firestore, coll, await getVisitorId))).get(slug)?.isLiked
          }
        }
      }
    }
  }
}

const post = (slug) => {
  const coll = process.env.NODE_ENV === 'development' ? 'posts-dev' : 'posts'
  return {
    get: {
      views: {
        increment: async function() {
          return await updateDoc(doc(firestore, coll, slug), {
            views: increment(1)
          })
          .then(() => ({
            ok: true,
            notFound: () => false
          }))
          .catch(error => ({
            ok: false,
            notFound: () => error.code === 'not-found'
          }))
        },
        data: async function() {
          const snap = await getDoc(doc(firestore, coll, slug))
          return snap.data()?.views || 1
        }
      }
    },
    add: async function() {
      await setDoc(doc(firestore, coll, slug), { views: 1 })
    }
  }
}

export const blog = { post }

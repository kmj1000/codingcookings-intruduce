import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// db 설정
const firebaseConfig = {
  apiKey: "AIzaSyAm6Ag7d4OkES-k8QRQVhtqj9p9dOUHo7I",
  authDomain: "sparta-33d77.firebaseapp.com",
  projectId: "sparta-33d77",
  storageBucket: "sparta-33d77.appspot.com",
  messagingSenderId: "29684425915",
  appId: "1:29684425915:web:d1fe87fa1101d7f973f59e",
  databaseURL:
    "https://sparta-33d77-default-rtdb.asia-southeast1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 댓글 등록
async function submitComment() {
  const commentAuthor = $("#comment-name").val();
  const content = $("#comment-content").val();
  const username = $("#username").val();
  const data = {
    username: "테스트유저",
    commentAuthor: commentAuthor,
    content: content,
  };
  const commentRef = ref(db, "comments");
  const newCommentRef = push(commentRef);
  try {
    await set(newCommentRef, data);
    console.log("comment added");
  } catch (error) {
    console.error("comment add error" + error);
  }
}
$(".comment-submit-button").on("click", submitComment);

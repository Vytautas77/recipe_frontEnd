import React, { useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./commentSend.module.css";
import Button from "../button/Button";
import axios from "axios";
type CommentsSendType = {
  id: string;
};

const CommentSend: React.FC<CommentsSendType> = ({ id }) => {
  const [commentText, setCommentText] = useState("");
  const router = useRouter();

  const onAddComment = async () => {
    try {
      // Validation
      if (!commentText.trim()) {
        alert("Comment text cannot be empty");
        return;
      }
      const { recipeId } = router.query;
      const comment = {
        commentText,
        recipeId: id,
      };

      const headers = {
        authorization: cookie.get("log15152Log"),
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/comments/`,
        comment,
        { headers }
      );

      if (response.status === 201) {
        router.push("#");
        window.location.reload();
      }
    } catch (error) {
      //@ts-ignore
      if (error.response && error.response.status === 401) {
        alert("Error adding comment");
        router.push("/");
        console.error("Error adding comment", error);
      }
    }
  };

  return (
    <div className={styles.commentsWrapper}>
      <h5>Palikti komentarą:</h5>
      <textarea
        style={{ resize: "none", width: "97%", height: "80px" }}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Palikti komentatrą"
        className={styles.textArea}
      ></textarea>
      <Button text="Siųsti" onClick={onAddComment} />
    </div>
  );
};

export default CommentSend;

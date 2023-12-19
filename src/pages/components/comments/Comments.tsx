import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import ok from "../image/ok.png";
import okDown from "../image/ok_down.png";

type CommentType = {
  _id: string;
  commentText: string;
  date: string;
  gainedLikesNumber: number;
  recipeId: string;
};

type CommentsType = {
  comments: CommentType[] | null;
};

const Comments: React.FC<CommentsType> = ({ comments }) => {
  return (
    <div className={styles.wrapper}>
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment._id} className={styles.commentBox}>
            <nav className={styles.commentHeader}>
              <p>{`Data: ${comment.date.substring(0, 15)}`}</p>
              <div className={styles.gainedLikesBar}>
                <p> {comment.gainedLikesNumber}</p>
                <Image
                  src={ok}
                  className={styles.gainedLikes}
                  alt="gainedLikes picture"
                  width={800}
                  height={500}
                />
                <Image
                  src={okDown}
                  className={styles.gainedLikes}
                  alt="gainedLikes picture"
                  width={800}
                  height={500}
                />
              </div>
            </nav>
            <div>{comment.commentText}</div>
          </div>
        ))}
    </div>
  );
};

export default Comments;

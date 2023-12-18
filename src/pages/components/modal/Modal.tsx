import React from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";

type ModalType = {
  onConfirm: () => void;
  onCancel: () => void;
};

const Modal: React.FC<ModalType> = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.exit} onClick={onCancel}>
        <svg
          height="12"
          width="12"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
        >
          <g id="XMLID_1_">
            <path
              id="XMLID_3_"
              d="M317.1,256L499.2,73.9c16.7-16.7,16.7-43.7,0-60.4c-16.7-16.7-43.7-16.7-60.4,0L256.7,195.6L74.6,12.5
		c-16.7-16.7-43.7-16.7-60.4,0c-8.4,8.4-13,19.5-13,30.7c0,11.2,4.6,22.3,13,30.7L196.3,256L13.2,438.1c-8.4,8.4-13,19.5-13,30.7
		c0,11.2,4.6,22.3,13,30.7c16.7,16.7,43.7,16.7,60.4,0l183.1-183.1l182.1,182.1c16.7,16.7,43.7,16.7,60.4,0
		c16.7-16.7,16.7-43.7,0-60.4L317.1,256z"
            />
          </g>
        </svg>
      </div>
      <div className={styles.wrapperContent}>
        <h2>Ar tikrai norite ištrinti?</h2>
        <div className={styles.btn}>
          <Button
            text="IŠTRINTI"
            className={styles.delBtn}
            isLoading={false}
            onClick={onConfirm}
          />
          <Button text="Atšaukti" isLoading={false} onClick={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

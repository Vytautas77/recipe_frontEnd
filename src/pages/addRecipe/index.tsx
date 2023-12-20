import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./addRecipe.module.css";
import PageTemplate from "../template/PageTemplate";
import { useRouter } from "next/router";
import Button from "../components/button/Button";

const AddRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [recipeAuthor, setRecipeAuthor] = useState("");
  const [recipePhotoUrl, setRecipePhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [methodOfPreparation, setMethodOfPreparation] = useState("");
  const [isCategory, setIsCategory] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [isRecipeAuthor, setIsRecipeAuthor] = useState(false);
  const [isRecipePhotoUrl, setIsRecipePhotoUrl] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const [isMethodOfPreparation, setIsMethodOfPreparation] = useState(false);
  const router = useRouter();

  const onAddLocation = async () => {
    try {
      //validacija
      const onlyNonNumericRegex = /^[^0-9]+$/;
      const photoPattern = /\bhttps?:\/\/\S+?\.(png|jpe?g|gif|bmp|webp)\b/;
      if (!title || !onlyNonNumericRegex.test(title)) {
        return setIsTitle(true);
      } else {
        setIsTitle(false);
      }
      if (!category || !onlyNonNumericRegex.test(category)) {
        return setIsCategory(true);
      } else {
        setIsCategory(false);
      }
      if (!recipeAuthor || !onlyNonNumericRegex.test(recipeAuthor)) {
        return setIsRecipeAuthor(true);
      } else {
        setIsRecipeAuthor(false);
      }
      if (!recipePhotoUrl || !photoPattern.test(recipePhotoUrl)) {
        return setIsRecipePhotoUrl(true);
      } else {
        setIsRecipePhotoUrl(false);
      }
      if (!description) {
        return setIsDescription(true);
      } else {
        setIsDescription(false);
      }
      if (!methodOfPreparation) {
        return setIsMethodOfPreparation(true);
      } else {
        setIsMethodOfPreparation(false);
      }

      setIsLoading(true);
      const recipe = {
        category,
        title,
        recipeAuthor,
        recipePhotoUrl,
        description,
        methodOfPreparation,
      };
      const headers = {
        authorization: cookie.get("log15152Log"),
      };
      const response = await axios.post(
        `${process.env.SERVER_URL}/recipes`,
        recipe,
        { headers }
      );
      setIsLoading(false);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 401) {
        //@ts-ignore
        alert("Error adding recipe", error);
        router.push("/");
        console.error("Error adding recipe", error);
      }
    }
  };
  const close = () => {
    router.push("/");
  };
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.exit} onClick={close}>
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
        <h2> Įdėkite receptą</h2>
        <div className={styles.inputsBar}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Pavadinimas"
          />
          <p>
            {isTitle && (
              <span>Įveskite Pavadinimą. Pavadinime negalį būtį skaitmenų</span>
            )}
          </p>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Kategorija"
          />
          <p>
            {isCategory && (
              <span>Įveskite kategoriją. Pavadinime negalį būtį skaitmenų</span>
            )}
          </p>
          <input
            type="text"
            value={recipeAuthor}
            onChange={(e) => setRecipeAuthor(e.target.value)}
            placeholder="Recepto autorius"
          />
          <p>
            {isRecipeAuthor && (
              <span>
                Įveskite recepto autorių. Pavadinime negalį būtį skaitmenų
              </span>
            )}
          </p>
          <input
            type="text"
            value={recipePhotoUrl}
            onChange={(e) => setRecipePhotoUrl(e.target.value)}
            placeholder="Nuotraukos URL"
          />
          <p>
            {isRecipePhotoUrl && (
              <span>Įveskite recepto nuotraukos nuorodą.</span>
            )}
          </p>
          <textarea
            style={{ resize: "none" }}
            className={styles.textArea}
            cols={61}
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Aprašymas"
          />
          <p> {isDescription && <span>Įveskite recepto apibūdinimą.</span>}</p>
          <textarea
            style={{ resize: "none" }}
            className={styles.textArea}
            cols={61}
            rows={5}
            value={methodOfPreparation}
            onChange={(e) => setMethodOfPreparation(e.target.value)}
            placeholder="Paruošimo būdas"
          />
          <p>
            {isMethodOfPreparation && (
              <span>Įveskite gaminio paruošymo būdą.</span>
            )}
          </p>
          <Button text="Įkelti" onClick={onAddLocation} isLoading={isLoading} />
        </div>
      </div>
    </PageTemplate>
  );
};

export default AddRecipe;

import React from "react";
import Link from "next/link";
import SharePage from "./share/page";
import CoummunityPage from "../community/page";

const MealPage = () => {
  return (
    <div>
      <CoummunityPage />
      <h1>MealPage</h1>
      <SharePage />
      <ul>
        <li>
          <Link href="/meals/test">SlugPages</Link>
        </li>
      </ul>
    </div>
  );
};

export default MealPage;

import MealPage from "./meals/page";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <MealPage />
    </main>
  );
}

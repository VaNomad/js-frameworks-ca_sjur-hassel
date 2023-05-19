import Card from "../components/Card";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-around items-center text-4xl text-black font-bold">
      <h1>Home Page</h1>
      <div>searchbar placeholder</div>
      <Card />
    </div>
  );
}

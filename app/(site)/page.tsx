export default async function Page() {
  const data = await fetch("https://rickandmortyapi.com/api/character?page=1");

  const { results } = await data.json();

  console.log(results, "fetch results");
  return <section className="bg-zinc-800"></section>;
}

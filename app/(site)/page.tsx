import { Title } from "@/design-system";

export default async function Page() {
  const data = await fetch("https://rickandmortyapi.com/api/character?page=1");

  const { results } = await data.json();

  console.log(results, "fetch results");
  return (
    <section className="bg-zinc-800">
      <div className="main-wrapper">
        {!results || results?.length == 0 ? (
          <div className="min-h-screen">
            <Title size="xxxlarge" className="pt-20 text-center text-white">
              API seems to be down...
            </Title>
          </div>
        ) : (
          <div>
            <p>Results will be here</p>
          </div>
        )}
      </div>
    </section>
  );
}

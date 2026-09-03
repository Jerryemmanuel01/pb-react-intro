import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const intro = "Introduction to react js";
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis repellendus harum amet, eos a accusantium facere nihil doloribus quam! Repellendus consectetur sapiente earum neque deleniti        expedita facere ex accusamus ad non ab, aliquid maiores nisi vitae        recusandae voluptatem eveniet laboriosam unde distinctio facilis harum        magnam. Voluptatibus sunt aut laudantium adipisci corrupti nihil in ut        libero repudiandae. Aperiam sapiente perspiciatis expedita fugiat, neque        sunt distinctio eligendi voluptatibus, quam laboriosam sed voluptatum!        Quam incidunt voluptatem, eum temporibus nihil illo officia nulla        inventore, asperiores sit error, cupiditate aliquam culpa aut        consequatur iusto dolorem itaque maxime! Quos aut nisi vitae aliquid        fugiat dignissimos?";
  return (
    <div className="bg-[#e0e0e0] min-h-screen">
      <Navbar />

      <Hero intro={intro} subtext={lorem}  />
      <Hero intro={intro} subtext={lorem}  />
      <Hero intro={intro} subtext={lorem}  />
      <Hero intro={intro} subtext={lorem}  />
      <Hero intro={intro} subtext={lorem}  />
      <Hero intro={intro} subtext={lorem}  />
    </div>
  );
}

export default App;

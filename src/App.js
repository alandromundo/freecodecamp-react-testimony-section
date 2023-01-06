import { TestimonioHeader } from "./components/TestimonioHeader";
import { TestimonioCard } from "./components/TestimonioCard";
import "./App.css";

function App() {
  const testimonios = [
    {
      img: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sarah Chima",
      city: "Vancouver",
      job: "Software Engineer",
      company: "Amazon",
      testimony:
        "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
    },
    {
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Emma García",
      city: "Spain",
      job: "Software Engineer",
      company: "Spotify",
      testimony:
        "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
    },
    {
      img: "https://images.pexels.com/photos/14440674/pexels-photo-14440674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Oscar",
      city: "Iran",
      job: "Software Catgineer",
      company: "Petco",
      testimony:
        "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Catgineer. freeCodeCamp changed my nine lifes.",
    },
  ];

  return (
    <>
      <TestimonioHeader />
      {testimonios.map((item) => (
        <TestimonioCard
          key={item.name}
          img={item.img}
          name={item.name}
          city={item.city}
          job={item.job}
          company={item.company}
          testimony={item.testimony}
        />
      ))}
    </>
  );
}

export default App;

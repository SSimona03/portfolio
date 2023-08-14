import "../globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Food APP",
      src: "/food-app.png",
      description:
        "The Food APP, currently in development, suggests suitable foods for Gastritis/Acid Reflux and other issues based on symptoms. Created using Html, CSS, Javascript, React, Node 13, MongoDB, and Tailwind.",
      github: "https://github.com/SSimona03/food-app",
      website: "https://s-food-app.vercel.app",
    },
    {
      id: 2,
      title: "Blog Samy Reads",
      src: "/blog.png",
      description: `A blog site that contains books summaries. I added / changing CSS elements and implemented google analitics. Hosted in Digital Ocean. Theme by Ghost. `,
      github: "https://samyreads.com/",
      website: "https://samyreads.com/",
    },
    {
      id: 3,
      title: "Bookie Mock Website",
      src: "/bookie.png",
      description: "Frontend mock website HTML CSS",
      github: "https://github.com/SSimona03/mock_booking_website",
      website: "https://ssimona03.github.io/mock_booking_website/",
    },
    {
      id: 7,
      title: "Oh-My-Food",
      src: "/menu-rest.png",
      description:
        "Frontend mock website HTML SASS",
      github:
        "https://github.com/SSimona03/ohmyfood-mock-p2",
      website: "https://ssimona03.github.io/ohmyfood-mock-p2/",
    },
    {
      id: 8,
      title: "Chart and Search",
      src: "/chart.png",
      description:
        "Two pages, one for a search through Shakespeare work and the other one is a chart: React Next13, Chart.js/React library",
      github:
        "https://github.com/SSimona03/sanger-pages",
      website: "https://next13-pages.vercel.app",
    },
    {
      id: 9,
      title: "Chart with Highcharts",
      src: "/highcharts.png",
      description:
        " React Next13, Highcharts/React library",
      github:
        "https://github.com/SSimona03/website-display-graphic-data-csv",
      website: "https://website-display-graphic-data-csv.vercel.app/",
    },
    {
      id: 4,
      title: "Travel Journal",
      src: "/travel.png",
      description: "Static page using HTML, CSS, Javascript and React."
      ,
      github:
        "https://github.com/SSimona03/react/tree/main/react-travel-journal-01",
      website: "/",
    },
    {
      id: 5,
      title: "Tenzies Game",
      src: "/game.png",
      description:
        "The objective of the game is to have all the dice with the same number. It was created using HTML, CSS, Javascript and React.",
      github: "https://github.com/SSimona03/react/tree/main/react-game-app04",
      website: "/",
    },
    {
      id: 6,
      title: "Meme Generator",
      src: "/meme.png",
      description:
        " The app is created using HTML, CSS, Javascript and React. It works by randomly selecting a meme image and you can add top and/or bottom text to it.",
      github:
        "https://github.com/SSimona03/react/tree/main/react-memeGenerator-03",
      website: "/",
    },
  ];

  return (
    <div className="prod-box mx-10" id="projects">
      <div className="pb-3">
        <div className="sections-title about-span-line relative">Projects</div>
        <p className="sections-intro">
          {" "}
          {`In this section, you will find a showcase of some of my personal projects that I have completed or I'm currently working on.`}  <br /> <br />
          {`The clickable images have the projects live.`}
        </p>
      </div>

      {projectsData.map((x) => (
        <div key={x.id} className="prod-section mx-auto my-20 flex flex-col justify-center content-center items-center ">
          <div className="prod-img w-[400px]">
            {(x.website == "/") ? <Image src={x.src} alt="project-image" fill={true} className="object-cover border w-full rounded-md hover:drop-shadow-xl"></Image>
              :
              <Link target="_blank" href={x.website} className="">
                {<Image src={x.src} alt="project-image" fill={true} className="object-cover border w-full rounded-md hover:drop-shadow-xl"></Image> /*  */}
              </Link>


            }
          </div>


          <div className="prod-details ">
            <h1 className="text-xl font-bold py-4">{x.title}</h1>
            <p className="">{x.description}</p>
            <div className="hero-btn-section ">
              <Link
                target="_blank"
                href={x.github}
                className="git-btn hero-btn hover:brightness-105"
              >
                {x.github == "https://samyreads.com/"
                  ? "Website"
                  : "Github Code"}{" "}
              </Link>

            </div>
          </div>
        </div>
      ))
      }


    </div >
  );
}
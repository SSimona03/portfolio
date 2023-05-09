import '../globals.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Projects() {

const projectsData = [
    {
        id: 1,
        title: "Food APP",
        src: '/food-app.png',
        description: "Food APP is a work in progress aplication that will show you what foods you can eat based on any of the symptoms for IBS, Gastritis/Acid Reflux and Gallbalder. In the app you can select multiple diets and once you log in you can edit the results. The application is using: Html, CSS, Javascript, React, Node 13, MongoDB, Firebase, Tailwind.",
        github: "https://github.com/SSimona03/food-app",
        website: "https://s-food-app.vercel.app"
    },
    {
        id: 2,
        title: "Meme Generator",
        src : "/meme.png",
        description: " The app is created using HTML, CSS, Javascript and React. It works by randomly selecting a meme image and you can add top and/or bottom text to it.",
        github: "https://github.com/SSimona03/react/tree/main/react-memeGenerator-03",
        website: "/"
    },
    {
        id: 3,
        title: "Travel Journal",
        src: "/travel-journal.png",
        description: "Is a journal website that containes a collection of cities and the travel details. It was created using HTML, CSS, Javascript and React.",
        github: "https://github.com/SSimona03/react/tree/main/react-travel-journal-01",
        website: "/"
    },
    {
        id: 4,
        title: "Tenzies Game",
        src:  "/tenzies-game.png",
        description: "The objective of the game is to have all the dice with the same number. It was created using HTML, CSS, Javascript and React.",
        github: "https://github.com/SSimona03/react/tree/main/react-game-app04",
        website: "/"
    }
]


    return (
        <div className="prod-box " id="projects">
            <div className="pb-3">
                <div className="sections-title about-span-line relative">Projects</div>
                <p className="sections-intro"> {`In this section, you will find a showcase of some of the projects that I have completed or I'm currently working on.`}</p>
            </div>
            

            {(
                projectsData.map(x => (
                    <div key={x.id} className="prod-section"  >
                        <div className="prod-img">
                            <Link target="_blank" href={x.website}> 
                            <Image  className= "test"src={x.src} alt="project-image" width={550}
                            height={200}></Image>
                            </Link>
                        </div>
                        <div className="prod-details pt-10">
                            <h1 className="text-xl font-bold pb-4">{x.title}</h1>
                            <p className="">{x.description}</p>
                                <div className="hero-btn-section pt-10">
                                <Link target="_blank" href={x.github} className="git-btn hero-btn ">Github Code</Link>
                                </div>
                        </div >
                           
                    </div>      
            ))
            )}
        </div>
       
      
    )
}
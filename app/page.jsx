import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    // <></>
    <div className="hero-wallpaper"> 
      <div className="hero-socials">
        <div className="hero-s-linkedin">
          <Link target="_blank" href="https://www.linkedin.com/in/simona-stroe/"><Image src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="linkedin-logo" width={28}
          height={28}></Image></Link>
        </div>
        <div className="hero-s-github">
          <Link target="_blank" href="https://github.com/SSimona03"><Image src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="github-logo" width={28}
          height={28}></Image></Link>
        </div>
      </div>
        <div className="hero-section">
              <h1 className="">{`Hi, I'm Simona `}</h1>
              <div className="hero-text">
                <p >{`As a Frontend Web Developer, I'm enthusiastic about learning and growing my skills in building exceptional user interfaces for websites and web applications.`}</p>
              </div>
               
            <div className="hero-btn-section">
               <Link href='#projects' className="hero-btn">PROJECTS</Link>
            </div>
              
        </div>
        <div className="hero-scroll">
                <div className="mouse"> </div>
            </div>
   </div>
  )
}

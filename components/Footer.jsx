import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
    return (
<footer id="contact" className="main-footer">
    <div className="main-container">
      <div className="main-footer__upper">
            <div className="pb-5">
                <Link href="/" className="font-bold pb-2 text-lg">Bella</Link>
               
            </div>
            <div className="pb-5 main-footer__social-cont">
            <h2 className="font-bold pb-2 text-lg">Social</h2>
                <div className="main-footer__social-icons pt-2 flex">
                        <Link  href="http://linkedin.com/in/simona-stroe"  target="_blank">
                            <Image className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Simona Stroe Linkedin Profile" width={38}
                        height={38}></Image>
                            </Link>

                            <Link  href="https://github.com/SSimona03" target="_blank">
                            <Image className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt=" Github Profile" width={38}
                        height={28}></Image>
                            </Link>

                            <Link  href="https://twitter.com/ssimona92" target="_blank" >
                            <Image className="main-footer__icon" src="/twitter.svg" alt=" Twitter Profile" width={38}
                        height={28}></Image>
                            </Link>
                
                </div>
            </div>
        
      </div>

      <div className="main-footer__lower">
        {`© Copyright 2023`}
      
      </div>
    </div>
</footer>
    )
}
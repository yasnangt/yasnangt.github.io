import bgVideos from '../assets/videos/videos.mp4';
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub,faLinkedinIn  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export default function Main() {
    
    return(
        <div className='h-full flex justify-between flex-col grow bg-[#0d0b0c]'>
        <div className='relative'>
          <div>
            <video src={bgVideos} autoPlay loop muted/>
          </div>
          <div className='absolute top-[35%] flex flex-col w-full items-center text-white cursor-default'>
            <h1 className='text-7xl mb-4  font-semibold font-rock '> Yasin Angıt</h1>
            <p className='my-4'><span style={{ color: '#efbf10', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Frontend', 'ReactJS', 'NextJS']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span> Developper</p>
            <div className='flex '>
              <div>
                <Link to="/career" className='text-white text-xl font-semibold mr-4 hover:text-[#f3ca37]'>Career</Link>
              </div>
              <div>
                <Link to="/projects" className='text-white text-xl font-semibold mr-4 hover:text-[#f3ca37]'>Projects</Link>
              </div>
              <div>
                <Link to="/components" className='text-white text-xl font-semibold mr-4 hover:text-[#f3ca37]'>Components</Link>
              </div>
            </div>
            <div>
              <div className='my-4 flex flex-col items-center'>
                <p className='mb-2'> Sitenizin kodlaması ya da Frontend alanında teknik destek almak için <a href='mailto:yasin_angit78@hotmail.com' className='text-white text-l font-semibold hover:text-[#f3ca37]'>mail</a> ile iletişim'e geçiniz. </p>
                <p> Please contact <a href='mailto:yasin_angit78@hotmail.com' className='text-white text-l font-semibold hover:text-[#f3ca37]'>e-mail</a> for coding your site or for technical support in the Frontend area.</p>
              </div>
            </div>
          </div>
          
        </div>
        <footer className='flex flex-col justify-center items-center'>
        <div className='flex my-3'>
              <div className='relative mr-3 '>
                <div className='loader'>
                </div>
                <div className='w-full h-full absolute top-0 flex justify-center items-center'>
                 <a className='pt-[3px]' title='Instagram/yasin.angtt' href='https://www.instagram.com/yasin.angtt/'> <FontAwesomeIcon className='text-3xl text-white hover:text-[#f3ca37]' icon={faInstagram} /></a>
                </div>
              </div>

              <div className='relative mr-3 '>
                <div className='loader2'>
                </div>
                <div className='w-full h-full absolute top-0 flex justify-center items-center'>
                 <a className='pt-[3px]' title='Twitter/devillopper' href='https://twitter.com/devillopper'> <FontAwesomeIcon className='text-2xl text-white hover:text-[#f3ca37]' icon={faTwitter} /></a>
                </div>
              </div>

              <div className='relative mr-3 '>
                <div className='loader'>
                </div>
                <div className='w-full h-full absolute top-0 flex justify-center items-center'>
                 <a className='pt-[3px]' title='Github/yasnangt' href='https://github.com/yasnangt'> <FontAwesomeIcon className='text-3xl text-white hover:text-[#f3ca37] ' icon={faGithub} /></a>
                </div>
              </div>

              <div className='relative '>
                <div className='loader2'>
                </div>
                <div className='w-full h-full absolute top-0 flex justify-center items-center'>
                 <a className='pt-[3px]' title='LinkedIn/yasnangt' href='https://www.linkedin.com/in/yasnangt/'><FontAwesomeIcon className='text-2xl text-white hover:text-[#f3ca37]' icon={faLinkedinIn} /></a>
                </div>
              </div>
            </div>
          <div className='flex mb-2 text-gray-400'>
            <p> Designed by Yasin ANGIT</p>
          </div>
        </footer>
      
      </div>
    )

}
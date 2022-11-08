import BgVideos from '../assets/videos/videos.mp4';
import { Link } from 'react-router-dom';
export default function Projects() { 
    return (
        <div className='w-full h-full bg-[#0d0b0c]'>
            <div className='relative'>
                <div className='absolute top-0'>
                    <div>
                        <video src={BgVideos} autoPlay loop muted/>
                    </div>
                    <div>
                        <div className='absolute top-0 flex w-full h-full justify-center items-center text-white cursor-default'>
                            <div className='grid grid-cols-3 p-4'>
                                <div className='bg-black/70 p-5 mx-2'>
                                    <div>
                                        <img/>
                                    </div>
                                    <div>
                                        <a href='https://github.com/yasnangt/Cargo-transport-with-drone' className='flex w-full justify-center pb-2 hover:text-[#f3ca37] '>Drone ile Kargo Taşıma</a>
                                        <p>
                                            Kargo firmasından drone ile kargoyu alıp, teslimatın yapılacak adresin koordinatlarını girdikten sonra teslimatı gerçekleştirir.                                        .
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-black/70 p-5 mx-2'>
                                    <div>
                                        <img/>
                                    </div>
                                    <div>
                                        <a href='https://github.com/yasnangt/Fashion-E-Commerce' className='flex w-full justify-center pb-2 hover:text-[#f3ca37] '>E-Ticaret </a>
                                        <p>
                                            LcWaikiki, DeFacto gibi sitelere benzer bir e-ticaret sitesi.
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-black/70 p-5 mx-2'>
                                    <div>
                                        <img/>
                                    </div>
                                    <div>
                                        <a href='https://github.com/yasnangt/InstagramClone' className='flex w-full justify-center pb-2 hover:text-[#f3ca37] '>Instagram Clone</a>
                                        <p>
                                            Instagram'ın ReactJS ile geliştirilen bir kopyası.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className='w-full bg-white/10 absolute top-0 text-white pl-4 text-lg font-semibold'>
                <Link to="/">Back to</Link>
                </div>
            </div>


        </div>
    )


}

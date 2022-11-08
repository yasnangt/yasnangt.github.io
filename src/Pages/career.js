import bgVideos from '../assets/videos/videos.mp4';
import { Link } from 'react-router-dom';
export default function Career(){
    return(
        <div className='h-full w-full'>
            <div className='relative h-full w-full bg-[#0d0b0c]'>
                <div className='absolute top-0'>
                    <div>
                        <video src={bgVideos} autoPlay loop muted/>
                    </div>
                    <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center'>
                        <h1 className='text-white text-4xl p-4'>Career</h1>
                        <div className='text-white w-[1000px] p-5 bg-black/70'>
                            <p>Merhaba, Karabük Üniversitesinde son sınıfım.1.Sınıfın yaz döneminde TrexDCAS adlı firmada IoT üzerine staj gördüm.
                                2. Sınıfta WeWanted adlı community'de mobil programlama geliştirdim. Aynı sene 
                                içerisinde CSCON’19 Introduction to Android eğitimini tamamlayarak sertfika aldım. 3.Sınıfın son döneminde ReactJS eğitimine başladım.
                                Uzun bir süre ReactJS ile devam ettim. 4.Sınıfta tez projesi için Frontend alanını bırakarak, Ekip arkadaşımla Drone ile ilgili bir proje geliştirdik.
                                Tez projesini tamamladıktan sonra bir süre pandemiden dolayı yazılım alanında çalışmadım. Okulumun uzamasından dolayı 2. Staj için başvuruda bulundum.
                                2. Stajımı Magento Teknik adlı firmada yaptım. 2. Stajımda ReactJS ile E-Ticaret üzerine bir Web sitesi geliştirdim. Stajımı tamamladıktan sonra
                                Magento Teknik'te Frontend Developper olarak çalışmaya başladım. Şu an çalıştığım firma ile birlikte Magento ve ReactJS üzerine projeler geliştiriyorum.
                                Bunun yanı sıra NextJS alanında da kendimi geliştirmeye çalışıyorum. 
                                
                                 </p>
                        </div>
                    </div>
                    

                </div>
                <div className='absolute top-0 bg-white/10 w-full pl-4 font-semibold text-lg text-white'>
                    <Link to="/">Back to</Link>
                </div>
               
            </div>
        </div>
    )
}
import { Navigate, Link } from "react-router-dom"
export default function Components() {
    return(
        <div className="bg-[#0d0b0c] w-full h-full">
            <div className='w-full bg-white/10 text-white pl-4 text-lg font-semibold'>
                <Link to="/">Back to</Link>
                    
            </div>
            <div>
                <p className="text-6xl text-white"> Geliştirilme Aşamasındadır.</p>
            </div>
                
        </div> 
    )

}
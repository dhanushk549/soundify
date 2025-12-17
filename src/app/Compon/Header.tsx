import Link from "next/link";

export default function Components() {
    return (
        <>
            
                <header className=" top-0 left-0">

                    <div className=" text-[#ffd700] flex justify-between items-center mx-auto px-4 py-3  ">
                        <h1 className="text-2xl font-extrabold uppercase"> <Link href="/"> Music Player </Link>  </h1>
                        <nav className=" space-x-8 text-[#ffd700] ">
                            <ul className=" gap-6  flex  font-bold">
                                <li><Link href="#home">HOME</Link></li>
                                <li><Link href="#playlist" >PLAYLIST</Link></li>
                                <li><Link href="about">ABOUT</Link></li>
                                <li><Link href="contact" >CONTACT</Link></li>
                            </ul>

                        </nav>
                    </div>
                </header>
            

        </>
    )
}
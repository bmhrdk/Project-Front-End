"use client";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SideBar() {
    const currentRoute = usePathname()

    return (
        <div>
                {/* SideNavBar */}
                <div className='rounded-2xl mx-2 my-2 w-auto drop-shadow-xl h-screen bg-[#be123c] z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                    <div className='flex flex-col justify-start items-center'>

                        {/* Menu */}
                        <div className="my-3 border-secondary justify-start">
                            <Link href="/home">
                                <button
                                    className={`flex max-w-full w-full mb-2 items-center gap-3 px-2 py-2 hover:bg-white rounded-2xl group cursor-pointer hover:shadow-lg m-auto ${currentRoute === "/home" ? 'bg-white ' : ''}`}>
                                    <HomeOutlinedIcon className={`text-white text-4xl group-hover:fill-white group-hover:bg-[#be123c]  p-2 rounded-xl ${currentRoute === "/home" ? 'fill-[#be123c]  bg-white ' : 'fill-[#be123c]  bg-white'}`} />
                                    <h2 className={`text-base text-white group-hover:text-[#be123c] font-bold font-dmsans ${currentRoute === "/home" ? 'text-white' : 'text-white'}`}>
                                        Beranda
                                    </h2>
                                </button>
                            </Link>

                            <Link href="/project">
                                <button
                                    className={`flex max-w-full w-full mb-2 items-center gap-3 px-2 py-2 hover:bg-white rounded-2xl group cursor-pointer hover:shadow-lg m-auto ${currentRoute === "/pesanan" ? 'bg-white ' : ''}`}>
                                    <EditNoteOutlinedIcon className={`text-white text-4xl group-hover:fill-white group-hover:bg-[#be123c]   p-2 rounded-xl ${currentRoute === "/pesanan" ? 'fill-[#be123c]   bg-white ' : 'fill-[#be123c]  bg-white '}`} />
                                    <h2 className={`text-base text-white group-hover:text-[#be123c] font-bold font-dmsans ${currentRoute === "/pesanan" ? 'text-white' : 'text-white'}`}>
                                        Buat Pesanan
                                    </h2>
                                </button>
                            </Link>

                            <Link href="/riwayat">
                                <button
                                    className={`flex max-w-full w-full mb-2 items-center gap-3 px-2 py-2 hover:bg-white rounded-2xl group cursor-pointer hover:shadow-lg m-auto ${currentRoute === "/riwayat" ? 'bg-white ' : ''}`}>
                                    <HistoryOutlinedIcon className={`text-white text-4xl group-hover:fill-white group-hover:bg-[#be123c]   p-2 rounded-xl ${currentRoute === "/riwayat" ? 'fill-[#be123c]   bg-white ' : 'fill-[#be123c]  bg-white '}`} />
                                    <h2 className={`text-base text-white group-hover:text-[#be123c] font-bold font-dmsans ${currentRoute === "/riwayat" ? 'text-white' : 'text-white'}`}>
                                        Riwayat Pesanan
                                    </h2>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div >
    )
}



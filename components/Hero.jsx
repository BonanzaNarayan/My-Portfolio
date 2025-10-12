import { Playwrite_US_Modern, Quicksand, Lexend_Deca } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

const playwrite = Playwrite_US_Modern({
  subsets: ["latin"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className='max-h-screen border rounded-3xl shadow-3xl flex items-start py-4 justify-center dots'>
        <div className="flex flex-col items-center justify-center px-2 gap-4">

            <div className="h-40 w-40">
                <img src="https://i.pinimg.com/1200x/26/5e/48/265e4837c450df15bb2cba012817fbd8.jpg" alt="Profile Picture" className="rounded-full border-4 border-primary" />
            </div>

            <h1 className={`scroll-m-20 text-center text-2xl md:text-4xl font-extrabold tracking-tight text-balance ${quicksand.className}`}>
                Bonanza here 👋,
            </h1>
            <h1 className={`scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-balance ${quicksand.className}`}>
                Full Stack Web App Developer
            </h1>

            <div className="mx-5 md:mx-26 lg:mx-56">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-center text-primary/80 border-l-2 p-1">
                    Specializing in modern SaaS-ready websites, templates, custom landing pages, and business websites.
                </p>
            </div>

            <div className={`scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance flex items-center gap-4 ${playwrite.className}`}>
                <span className='text-purple-600'>Fast</span> • <span className='text-green-600'>Clean</span> • <span className='text-orange-600'>Scalable</span>
            </div>

            <div className="mt-5 flex items-center flex-col gap-2">
                <h3>Let's Work Together</h3>
                <div className="flex items-center gap-3">
                    <Link href={'#contact'}>
                        <Button>
                            Contact
                        </Button>
                    </Link>
                    <Link href={'#services'}>
                        <Button variant={'outline'}>
                            Services
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

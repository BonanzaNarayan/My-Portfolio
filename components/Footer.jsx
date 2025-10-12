import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: '400'
});

export default function Footer() {
  return (
    <footer className='bg-accent p-6'>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-6 md:gap-2">
            <div className="text-sm">
                Built with love💓 by <span className={`${pacifico.className} text-rose-500`}>Bonanza</span>
            </div>

            <div className="text-sm">
              {new Date().getFullYear()}© Bonanza Narayan | ALL RIGHTD RESERVED
            </div>

            <div className="text-sm">
                <a href="http://x.com/svddiin" target="_blank" className="bg-foreground p-2 rounded-full text-secondary">Follow me on X</a>
            </div>
        </div>
    </footer>
  )
}

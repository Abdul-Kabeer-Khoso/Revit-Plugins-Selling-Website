export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-gray-400 text-black">



            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                    {/* Left Section */}
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
                            Contact Us
                        </h2>

                        <p className="text-sm text-black hover:cursor-pointer hover:underline transition">
                            Help Us to Improve
                        </p>
                    </div>

                    {/* Right Section (Emails) */}
                    <div className="space-y-3 text-center md:text-right break-words">

                        <a
                            href="mailto:info@hamstruk.com"
                            className="block text-sm sm:text-base text-black
              hover:underline transition duration-300 hover:translate-x-1"
                        >
                            info@hamstruk.com
                        </a>

                        <a
                            href="mailto:suggestions@hamstruk.com"
                            className="block text-sm sm:text-base text-black
              hover:underline transition duration-300 hover:translate-x-1"
                        >
                            suggestions@hamstruk.com
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom Glow Line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        </footer>
    );
}
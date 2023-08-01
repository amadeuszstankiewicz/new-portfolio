
export default function Contact({contactRef}) {
    return (
        <div ref={contactRef} className="relative min-h-screen flex justify-center py-[64px] gap-5 container mx-auto">
            <div className="flex flex-col gap-3 items-center justify-center overscroll-y-auto max-h-[calc(100vh-68px)]">
                <h2 className="text-4xl font-bold transition ease-linear sm:text-5xl">Contact with me</h2>
                <div className="text-lg font-bold transition ease-linear sm:text-2xl">amadeuszstanek@gmail.com</div>
                <a href="mailto:amadeuszstanek@gmail.com" className="transition ease-linear hover:text-cyan-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 sm:w-24 sm:h-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
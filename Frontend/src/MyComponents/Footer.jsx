// Things remaining here are - 
// 1. Make it responsive
// 2. Add links to the social media icons
// 3. Add the links to the footer to the different sections of the website
export default function Footer(){
    return (
        <div className="bg-black px-9">
            <div className="grid grid-cols-4 gap-1 px-9">
                <div className="m-4 p-3 ">
                    <div className="text-white hover:text-yellow-500 pt-2 pb-2">© pradyumnshirsath.com</div>
                </div>
                <div className="m-4 p-3">
                    <div className="text-white hover:text-yellow-500 font-bold pt-2 pb-2">Current Projects</div>
                    <div className="text-sm text-slate-500 hover:text-yellow-500 p-1">Daily Planner</div>
                    <div className="text-sm text-slate-500 hover:text-yellow-500 p-1">Portfolio</div>
                </div>
                <div className="m-4 p-3">
                    <div className="text-white hover:text-yellow-500 font-bold pt-2 pb-2">Jump to</div>
                    <div className="text-sm text-slate-500 hover:text-yellow-500 p-1">Home</div>          
                    <div className="text-sm text-slate-500 hover:text-yellow-500 p-1">Projects</div>
                    <div className="text-sm text-slate-500 hover:text-yellow-500 p-1">Experience</div>
                </div>
                <div className="m-4 p-3">
                    <div className="text-white hover:text-yellow-500 font-bold pt-2 pb-2">Reach out</div>
                    <div className="flex text-sm text-slate-500 hover:text-yellow-500">
                        <div className="p-1">
                            <img className="h-4 w-4 mr-1" src="resources/linkedin.png" alt="" />
                        </div>
                        <div className="p-1">
                            <a href="https://www.linkedin.com/in/pradyumn-shirsath-863072224/">LinkedIn</a>
                        </div>
                    </div>
                    <div className="flex text-sm text-slate-500 hover:text-yellow-500">
                    <div className="p-1">
                       <img className="h-4 w-4 mr-1" src="resources/twitter_white_final.png" alt="" />
                       </div>
                       <div className="p-1">
                        <a href="https://twitter.com/">Twitter</a>
                        </div>
                    </div>
                    <div className="flex text-sm text-slate-500 hover:text-yellow-500">
                    <div className="p-1">
                        <img className="h-4 w-4 mr-1" src="resources/github_final.png" alt="" />
                        </div>
                        <div className="p-1">
                        <a href="https://github.com/Pradyumn1710">GitHub</a>
                        </div>
                    </div>
                    <div className="flex text-sm text-slate-500 hover:text-yellow-500">
                    <div className="p-1">
                     <img className="h-4 w-4 mr-1" src="resources/gmail.png" alt="" />
                     </div>
                     <div className="p-1">
                       <a href="mailto:pradyumnshirsathiiitn@gmail.com?subject=Subject%20Here&body=Body%20Here" target="_blank" rel="noopener noreferrer">Email</a>
                       </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="resources/my_signature_white.png" alt="" />
            </div>
            <div className="flex justify-center pb-2 text-sm text-slate-500 ">
                Designed, developed, and deployed by Pradyumn Shirsath, driven by a passion and ❤️ for coding and a commitment to excellence ✨.
            </div>
        </div>
    );
}
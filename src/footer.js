function Footer() {
    return (
        <>
            <div className="">
                <img src='ProThom alo/palo_bangla_og.webp' className="w-[20%] h-16 pl-5 rounded-lg" />
            </div>
            <div className="flex h-24 p-5">
                <p className="pl-32">Bangladesh</p>
                <p className="pl-32">International</p>
                <p className="pl-32">Sports</p>
                <p className="pl-32">Business</p>
                <p className="pl-32">Youth</p>
                <p className="pl-32">Entertaiment</p>
                <p className="pl-32">Search</p>
            </div>
            <Social />
        </>
    )
};

function Social() {
    return (
        <div className="flex h-6">
            <div className="w-[25%]">
                <p className="pl-6 ">Follow us</p>
                <div className="flex p-5 flex-row-reverse">
                    <img src="/ProThom alo/alexander-shatov-niUkImZcSP8-unsplash.jpg" className="self-center w-12 h-12 rounded-full mx-3 " />
                    <img src="/ProThom alo/alexander-shatov-k1xf2D7jWUs-unsplash.jpg" className="self-center w-12 h-12 rounded-full mx-3 " />
                    <img src="/ProThom alo/alexander-shatov-_qsuER9xYOY-unsplash.jpg" className="self-center w-12 h-12 rounded-full mx-3 " />
                    <img src="/ProThom alo/instrasgrams.avif" className="self-center w-12 h-12 rounded-full mx-3"/>
                </div>
            </div>
            <div className="w-[50%]"></div>
            <div className="w-[20%]">
                <p className="">Download mobile apps</p>
                <div className="">
                    <img src="/ProThom alo/app-download-buttons.png" className="w-full h-24" />
                </div>
            </div>
        </div>
    )
};


export default Footer;
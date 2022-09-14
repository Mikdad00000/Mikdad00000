function Header() {
    return (
        <div className="w-full h-/6 flex">
            <LeftSide />
            <Logo />
            <RightSide />
        </div>
    )
};

function LeftSide() {
    return (
        <div className="w-2/12">
            <div className="h-2/12"></div>
            <div className="w-3/12 flex p-3 ">
                <img src="ProThom alo/01lefts.jpeg" className="w-[70%] h-[50%] m-2" />
                <img src="ProThom alo/04searchicon.jpeg" className="w-[70%] h-[50%] m-2 pt-1" />
            </div>
            <p className="p-3">শনিবার, ১০ সেপ্টেম্বর ২০২২</p>
            <div className="h-2/12"></div>
        </div>

    )
};
function Logo() {
    return (
        <div className="w-9/12 flex justify-center">
            <img src="ProThom alo/palo-bangla-bb996cdb70d2e0ccec8c.svg" className="w-[50%] h-[%50]" />
        </div>
    )
};

function RightSide() {
    return (
        <div className="w-1/12">
            <div className="h-2/6"></div>
            <div className=" flex pl-2">
                <img src="ProThom alo/01notifacatioicon.jpeg" className="w-[20%] h-[20%]" />
                <button className=" leading-loose border hover:bg-blue-300">Login</button>
            </div>
            <button className="flex text-bold hover:text-black-400">বাংলা
                <li>সংস্করণ</li>
            </button>
            <div className="h-2/6"></div>
        </div>
    )
};
export default Header;
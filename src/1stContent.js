function FirstContent() {
    return (
        <>
            <LetestNews />
            <div className=" flex w-[75%] h-2/6">
                <Newsfeed1 />
                <Newsfeed1 />
                <Newsfeed1 />
            </div>
            <Newsfeed2 />
            <RightNews />
        </>
    )
};

function LetestNews() {
    return (
        <div className="flex">
            <div className="w-[50%] h-2/6 flex">
                <div className="w-[40%] ">
                    <p className="text-bold-3xl"> HSC exam to begin 6 Nov</p>
                    <p className="">The routine of the examination was published on Monday</p>
                    <p className="">8 minutes ago</p>
                </div>
                <div className="w-[60%]">
                    <img src='/ProThom alo/HSC_EXAM11.jpg' alt="Hsc exam" />
                </div>
            </div>
            <div className="w-[25%] h-2/6">
                <p className="">PM's India visit: What was gained and what was not</p>
                <p className="">As always, the Bangladesh prime minister urged for the implementation of the Teesta treaty. Narendra Modi did </p>
                <p className="">1 hour ago</p>
            </div>
        </div>
    )
};

function Newsfeed1() {
    return (
        <div className=" ">
            <p className="">PM's India visit: What was gained and what was not</p>
            <p className="">As always, the Bangladesh prime minister urged for the implementation of the Teesta treaty. Narendra Modi did </p>
            <p className="">6 hours ago</p>
        </div>
    )
};

function Newsfeed2({ headline, pera, time }) {
    return (
        <div className="">
            <p className="">{headline}</p>
            <p className="">{pera}</p>
            <p className="">{time}</p>
        </div>
    )
};
function RightNews() {
    return (
        <></>
    )
};


export default FirstContent;
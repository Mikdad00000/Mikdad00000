import FirstContent from "./1stContent";
import Secondcontent from "./2ndContent";
import Footer from "./footer";
import Header from "./Header";
import TopicBar from "./topicbar";
function Prothomalo1st() {
    return (
        <div className='w-full h-full App flex'>
            <div className='w-[15%]'></div>
            <div className='w-10/12'>
                <Header />
                <hr />
                <p className='text-2xl bg-green-300  text-center'>
                    Bismillah rahmanir rahmanir
                </p>
                <TopicBar />
                <FirstContent />
                <Secondcontent />
                <Footer />
            </div>
            <div className='w-[15%]'></div>
        </div>


    )
};
export default Prothomalo1st;
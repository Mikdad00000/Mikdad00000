import Header from "./Header";
import Footer from "./footer";
function Prothomalo3rd (){
    return(
    <>
    <Header />
    <NewsHeadline/>
    <Footer />
    </>
    )
};

function NewsHeadline(){
    return(
        <div className="">
            <p className="">Bangladesh</p>
            <p className="">Maternal and neonatal healthcare</p>
            <p className="">Maternal and neonatal deaths increase during two years of Covid</p>
            <p className="">Many expectant mothers didn’t go to hospital fearing Covid. Meanwhile, the deaths were high in number as hospitals lacked proper treatment facilities.</p>
        </div>
    )
};

export default Prothomalo3rd;


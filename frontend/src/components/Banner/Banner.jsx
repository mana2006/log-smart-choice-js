import logo from "../../assets/mobile/2175384_m.jpg";
import Search from "../Search/Search";

const Banner = () => {
    return ( 
        <section className="relative">
            <img src={logo} alt="banner-logrenove" className="brightness-60"/>
            <div className="absolute text-white top-16 flex flex-col items-center w-full">
                <p className="text-[30px] tracking-[4px]">都心の高級</p>
                <p className="text-[22px] tracking-[7px]">リノベーションマンション</p>
                <p className="text-[18px]">＜80㎡～200㎡以上の物件サイト＞</p>
            </div>
            <Search/>
        </section>
     );
}
 
export default Banner;
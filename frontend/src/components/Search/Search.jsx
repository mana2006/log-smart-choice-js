import searchIcon from "../../assets/mobile/i_search_white_2.svg"

const Search = () => {
    return (
        <section className="bg-white absolute border left-[55px] bottom-[-125px] rounded-[8px] w-3/4 flex flex-col items-center p-4 shadow-md">
            <p className="pt-4 pb-3 font-semibold text-[14px] text-[#5b5b5b]">専有面積</p>
            <div className="pb-2 flex flex-row">
                <div className="relative before:border-solid before:content-[''] before:border-[#ccc] before:h-10 before:absolute before:left-[83px] before:border">
                    <select className="border-[#ccc] border-solid border-[2px] select-search mr-2 bg-select-down bg-no-repeat right-0 bg-[right_0.45rem_center] appearance-none rounded-sm">
                        <option value="">下限なし</option>
                    </select>
                </div>

                <span className="text-[17px] font-semibold p-[5px] text-[#757272]">〜</span>
                <div className="relative before:border-solid before:content-[''] before:border-[#ccc] before:h-10 before:absolute before:left-[90px] before:border">
                    <select className="border-[#ccc] border-solid border-[2px] select-search ml-2 bg-select-down bg-no-repeat right-0 bg-[right_0.45rem_center] appearance-none rounded-sm">
                        <option value="">下限なし</option>
                    </select>
                </div>
            </div>
            <div className="relative">
                <img src={searchIcon} className="absolute top-[20px] left-[15px]  w-[10%]" alt="icon-search" />
                <button className="py-2 bg-[#ca6407] border-[#ca6407] mt-2 px-4 pl-[35px] rounded-lg text-white font-semibold">この条件で検索</button>
            </div>
        </section>
    );
}

export default Search;
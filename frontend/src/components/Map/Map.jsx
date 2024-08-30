import mapA from '../../assets/map-a.png';
import mapB from '../../assets/map-b.png';
import mapC from '../../assets/map-c.png';

const Map = () => {
    const activeBG = 'bg-[#8C7D5E]';
    const activeText = 'text-white';
    const inActiveBG = 'bg-[#F2F2F2]';
    const handleActiveMap = (event) => {
        const showContent = ['content-a', 'content-b', 'content-c'];
        const active = event.target;
        const inActived = document.getElementsByClassName('tab');
        Object.keys(inActived).forEach((idx) => {
            const inActive = inActived[idx];
            inActive.classList.remove(activeText);
            inActive.classList.remove(activeBG);
            inActive.classList.remove(inActiveBG);
        });
        active.classList.add(activeBG);
        active.classList.add(activeText);
        Object.keys(inActived).forEach((idx) => {
            const inActive = inActived[idx];
            if (!inActive.classList.contains(activeBG)) {
                inActive.classList.add(inActiveBG);
            }
        });

        const contents = document.getElementsByClassName('content');
        Object.keys(contents).forEach((idx) => {
            const content = contents[idx];
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.classList.remove('block')
            }
        });

        showContent.forEach((content) => {
            if (active.classList.contains(content)) {
                const showContentActive = document.getElementsByClassName('content ' + content);
                showContentActive[0].classList.add('block');
            } else {
                const showContentActive = document.getElementsByClassName('content ' + content);
                showContentActive[0].classList.add('hidden');
            }
        });

    };
    return (
        <section className="">
            <div className="pt-36 flex flex-row justify-center ">
                <div className="tab content-a flex flex-col p-3 bg-[#8C7D5E] rounded-t-lg text-[12px] font-semibold m-1 text-white cursor-pointer" onClick={handleActiveMap}>
                    <span className="pointer-events-none">東京都から探す</span>
                </div>
                <div className="tab content-b flex flex-col p-3 bg-[#F2F2F2] rounded-t-lg text-[12px] font-semibold m-1 cursor-pointer" onClick={handleActiveMap}>
                    <span className="pointer-events-none">神奈川県</span>
                </div>
                <div className="tab content-c flex flex-col p-3 bg-[#F2F2F2] rounded-t-lg text-[12px] font-semibold m-1 cursor-pointer" onClick={handleActiveMap}>
                    <span className="pointer-events-none">埼玉県</span>
                </div>
            </div>

            <div className="mt-[-4px] mx-[0.75rem] rounded-[10px] border-[1px] shadow-md border-[#f0f0f0]">
                <div className="content content-a">
                    <img src={mapA} alt="" className='p-[4px] rounded-[30px]' />
                </div>
                <div className="content content-b hidden">
                    <img src={mapB} alt="" className='p-[4px] rounded-[30px]' />
                </div>
                <div className="content content-c hidden">
                    <img src={mapC} alt="" className='p-[4px] rounded-[30px]' />
                </div>
                <div className="p-1">
                    <button className='bg-[#ca6407]  hover:bg-[#794c23] hover:transition-all hover:duration-500 rounded-[6px] text-white font-semibold py-2 px-5 my-4 w-full'>指定したエリアで検索</button>
                </div>
                <p className='text-[#8C7D5E] font-semibold text-center'>物件の特徴から探す</p>
                <div className="flex flex-row flex-wrap justify-center gap-2 py-2 text-[14px]">
                    <div className="bg-[url('assets/4LDK以上_new.png')] relative bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>13</span>
                        <p>ルーフ</p>
                        <p>バルコニー</p>
                    </div>
                    <div className="relative bg-[url('assets/Frame-636-1.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>12</span>
                        <p>専用庭</p>
                    </div>
                    <div className="relative bg-[url('assets/ルーフバルコニー_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>11</span>
                        <p>大型犬飼育可</p>
                    </div>
                    <div className="relative bg-[url('assets/圧巻の眺望_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>10</span>
                        <p>専用使用権付き</p>
                        <p>駐車場</p>
                    </div>
                    <div className="relative bg-[url('assets/大型犬飼育可_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>9</span>
                        <p>平置き駐車場</p>
                    </div>
                    <div className="relative bg-[url('assets/専用使用権付き駐車場_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>8</span>
                        <p>最上階角部屋</p>
                    </div>
                    <div className="relative bg-[url('assets/専用庭_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>7</span>
                        <p>常駐管理</p>
                        <p>（コンシェルジュ有）</p>
                    </div>
                    <div className="relative bg-[url('assets/常駐管理（コンシェルジュ有）_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>6</span>
                        <p>タワー</p>
                        <p>マンション</p>
                    </div>
                    <div className="relative bg-[url('assets/平置き駐車場_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>5</span>
                        <p>圧巻の眺望</p>
                    </div>
                    <div className="relative bg-[url('assets/最上階角部屋（ペントハウス）_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>44</span>
                        <p>4LDK以上</p>
                    </div>
                    <div className="relative bg-[url('assets/駅徒歩3分以内_new.png')] bg-contain bg-no-repeat bg-center bg-[#F2F2F2] p-4 min-h-14 w-28 h-24 text-[#8C7D5E] font-semibold rounded-xl flex flex-col justify-center items-center">
                        <span className='bg-[#ca6407] absolute rounded-full text-white w-9 h-9 flex justify-center items-center text-[14px] top-[-15px] right-0'>3</span>
                        <p>駅徒歩3分以内</p></div>

                </div>
            </div>
            <div className="px-[10px]">
                <button className='bg-[#ca6407] hover:bg-[#794c23] hover:transition-all hover:duration-500  rounded-[6px] text-white font-semibold py-2 px-5 my-4 w-full'>詳細条件を指定して検索</button>
            </div>

            <div className="pt-3">
                <p className='text-[#8C7D5E] font-semibold text-center text-[22px]'>新着物件</p>
            </div>

        </section>
    );
}

export default Map;
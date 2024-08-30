
import { useState } from 'react';
import estate001 from '../../assets/estate001.jpg'
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

const Estate = () => {
    const [favorites, setFavorite] = useState([]);
    const types =
        [
            { type_1: "ペット可", color: "#072AC8" },
            { type_2: "100㎡以上", color: "100㎡以上" },
            { type_3: "角部屋", color: "#BB6BD9" },
            { type_4: "最上階", color: "#0D1821" },
            { type_5: "駅徒歩5分以内", color: "#2D9CDB" },
            { type_6: "ルーフバルコニー", color: "#27AE60" }
        ];
    const estates = [
        {
            'estate_id': 1,
            'type': 'type_1',
            'acres': '92.04',
            'price': '26980',
            'title': '二子玉川ライズタワー＆レジデンスタワーウエスト20階',
            'short_description': '東急田園都市線・大井町線「二子玉川」駅 徒歩6分',
            'floor': '3LDK',
        },
        {
            'estate_id': 2,
            'type': 'type_2',
            'acres': '83.96',
            'price': '6690',
            'title': 'クレッセントバードスクエア2階',
            'short_description': '京急本線「雑色」駅 徒歩8分',
            'floor': '3LDK'
        },
        {
            'estate_id': 3,
            'type': 'type_3',
            'acres': '87.14',
            'price': '8480',
            'title': 'シーアイマンション大岡山5階',
            'short_description': '東急大井町線・目黒線「大岡山」駅 徒歩6分',
            'floor': '3LDK'
        },
        {
            'estate_id': 4,
            'type': 'type_4',
            'acres': '80.98',
            'price': '11990',
            'title': 'ハイホーム駒沢公園13階',
            'short_description': '東急田園都市線「駒沢大学」駅 徒歩13分',
            'floor': '4LDK'
        },
        {
            'estate_id': 5,
            'type': 'type_5',
            'acres': '84.18',
            'price': '7399',
            'title': 'キャッスルマンション戸越公園2階',
            'short_description': '東急大井町線「戸越公園」駅 徒歩5分',
            'floor': '3LDK'
        },
        {
            'estate_id': 6,
            'type': 'type_6',
            'acres': '157.20',
            'price': '36990',
            'title': '東麻布アネックス8階・9階',
            'short_description': '都営大江戸線「赤羽橋」駅 徒歩4分',
            'floor': '3LDK'
        },
    ];

    const handleActiveHeart = (value) => {
        let addArray = true;
        favorites.map((item, key) => {
            if (item === value) {
                favorites.splice(key, 1);
                addArray = false;
            }
        })
        if (addArray) {
            favorites.push(value);
        }
        setFavorite([...favorites]);
    }

    return (
        <section className='p-3'>
            {estates.map((estate, index) => {
                return (
                    <div key={estate.estate_id} className="border border-2 border-slate-200 shadow-md">
                        <div className="relative">
                            <span className='bg-[#FCB0B3] absolute z-10 text-white font-semibold p-[6px] clip-polygon-triangle pr-[20px]'>ペット可</span>
                            <img src={estate001} alt="error images" className="hover:cursor-pointer hover:opacity-75 hover:transition-all hover:delay-100  w-full h-52 " />

                            {/* {
                                favorites.includes(index) ?
                                    <IoIosHeart className="absolute top-2 right-[7px] text-[red]" size={'32px'} onClick={() => handleActiveHeart(index)} />
                                    :
                                    <IoIosHeartEmpty className="absolute top-2 right-[7px] text-[#8C7D5E]" size={'32px'} onClick={() => handleActiveHeart(index)} />
                            } */}
                            {console.log(favorites)}
                            {
                                favorites.includes(estate.title) ?
                                    <IoIosHeart className="absolute top-2 right-[7px] text-[red]" size={'32px'} onClick={() => handleActiveHeart(estate.title)} />
                                    : 
                                    <IoIosHeartEmpty className="absolute top-2 right-[7px] text-[#8C7D5E]" size={'32px'} onClick={() => handleActiveHeart(estate.title)} />
                            }

                        </div>
                        <div className="p-2">
                            <p className="font-semibold text-[20px]">{estate.title}</p>
                            <p className='font-semibold text-[#CA6407] text-[17px]'>{estate.acres}m²/{estate.floor}/{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(estate.price)}万円</p>
                            <p className='font-semibold text-[#5C5B5B] text-[14px]'>{estate.short_description}</p>
                        </div>
                    </div>
                );
            })}

        </section>
    );
}

export default Estate;
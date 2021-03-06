import PageArticle from './PageArticle';
import React, { useEffect } from 'react';
import img_1 from '../images/LargeRoom/img_1.png'
import img_2 from '../images/LargeRoom/img_2.png'
import img_3 from '../images/LargeRoom/img_3.png'
import img_4 from '../images/LargeRoom/img_4.png'
import img_5 from '../images/LargeRoom/img_5.png'
import img_6 from '../images/LargeRoom/img_6.png'
import img_7 from '../images/LargeRoom/img_7.png'
import img_8 from '../images/LargeRoom/img_8.png'
import img_9 from '../images/LargeRoom/img_9.png'
import img_10 from '../images/LargeRoom/img_10.png'

export default function LargeRoom () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <PageArticle
            title="Увеличить пространство помещения"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Как визуально увеличить пространство помещения?</h2>
                <p className="paragraph__text">Существует множество приемов, которыми владеет дизайнер, позволяющие существенно расширить визуально пространство. Используя эти несложные принципы и приемы, можно визуально расширить практически любое тесное пространство. В данной статье мы приводим самые основные.</p>
                <p className="paragraph__text">И так, первый прием и самый широко используемый, - светлые тона.</p>
                <p className="paragraph__text">Белый потолок, светлый пол создают ощущение "растворения в пространстве" границ комнаты. Мозг воспринимает себя находящимся на открытом пространстве, наполненном светом, и, таким образом, создается психологически комфортная обстановка, - мы словно находимся в открытом поле, и можем обозревать пространство со всех сторон. Мы чуть отошли от сути, назвав психологическую причину стремления человека "расширять пространство" в принципе, но будет не лишним знать этот факт при выборе помещения, выборе стилистики и цветовой гаммы.</p>
                <p className="paragraph__text">Так же рекомендуем использовать светлые тона в выборе дверей и текстиля штор.</p>
                <p className="paragraph__text">Еще один интересный факт: холодные тона "расширяют" пространство, а теплые - наоборот, зрительно его уменьшают.</p>
                <p className="paragraph__text">Прием второй, - минимализм.</p>
                <p className="paragraph__text">Отталкиваясь от вышеописанной психологической причины стремления человека располагаться в комфортной среде, мы смело можем так же описать и важность "не захламлять" помещение, если его необходимо визуально расширить. Лучшим советом будет использовать мебель с прямой геометрией, без лишим мелких деталей. Этого же принципа нужно придерживаться и в декорировании помещения аксессуарами: предпочтительней всего будет не заставлять комнату шкафами, - если можно, лучше использовать узкие полочки, а шкафы для одежды лучше делать скрытыми, для этого достаточно просто выкрасить фасады и дверцы шкафов в один тон со стенами. Диваны лучше использовать на ножках, так мы добавим "воздушности" пространству! А при выборе журнального столика рекомендуем отдать свое предпочтение столикам круглой формы.</p>
                <p className="paragraph__text">Прием третий, - зеркала.</p>
                <p className="paragraph__text">Использование зеркальных поверхностей способно не просто увеличить пространство, но и "поломать" геометрию помещения, создавая ощущение продолжение и перехода в другое помещение. А отраженный в зеркале оконный проем будет волшебным образом казаться еще одним дополнительным окном в комнате.</p>
                <p className="paragraph__text">Четвертый прием - высокие дверные проемы. Сейчас в нашей столице это уже тренд. Застройщики приняли на вооружение желание покупателей увеличивать дверные проемы и зачастую стоят жилье с проемами выше 2,2 метра. Если у Вас узкий коридор, то открытые двери пустят больше света и откроют больше пространства в нем.</p>
                <p className="paragraph__text">Прием пятый, - крупногабаритные картины. Картины крупного формата так же создают ощущение большого пространства. Такие картины так же послужат очень стильной "изюминкой" любого помещения!</p>
                <p className="paragraph__text">Шестой, - однотонная отделка. Текстиль обивки мебели, отделка стен и корпусная мебель без геометрического рисунка или узора создают атмосферу "открытости" в помещении.</p>
                <p className="paragraph__text">Седьмой прием - прозрачные и светопропускающие материалы. Можно использовать как минеральное стекло так и оргстекло.</p>
                <p className="paragraph__text">Из этих материалов может быть сделан любой декор и некоторая мебель, - например столики или столешницы столов.</p>
                <p className="paragraph__text">Единственный минус - более сложный уход на такими предметами интерьера.</p>
                <p className="paragraph__text">Восьмой прием - высокие элементы интерьера. Высокие занавески в пол, высокие плинтуса и комоды способны визуально увеличить высоту потолка, а значит и увеличить общее пространство комнаты!</p>
                <p className="paragraph__text">Девятый прием - однотонные и большие ковры. Если Вы хотите постелить ковер или половицу, то желательно использовать максимально большой размер и отдавать предпочтение выбору однотонных изделий.</p>
                <p className="paragraph__text">Прием десятый, - освещение. Оно должно быть максимальным. Приборы освещения должны быть так же не маленькими, - лучше повесить большую стеклянную люстру. Или вовсе от нее отказаться, осветив помещение трековым освещением и спотами.</p>
                <p className="paragraph__text">Наши дизайнеры используют массу других приемов, все зависит от назначения помещения, его габаритов и геометрии.</p>
                <div className="line"></div>
                <ul className='image__box'>
                    <li className="image__cell">
                        <img className="image__item" src={img_1} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_2} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_3} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_4} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_5} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_6} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_7} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_8} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_9} alt="эскиз"/>
                    </li>
                    <li className="image__cell">
                        <img className="image__item" src={img_10} alt="эскиз"/>
                    </li>
                </ul>
        </div>
        </>
    )}
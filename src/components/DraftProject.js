import CapRepair from './CapRepair';
import img_1 from '../images/DraftProject/img_1.jpg'
import img_2 from '../images/DraftProject/img_2.jpg'
import img_3 from '../images/DraftProject/img_3.jpg'
import img_4 from '../images/DraftProject/img_4.jpg'
import img_5 from '../images/DraftProject/img_5.jpg'
import img_6 from '../images/DraftProject/img_6.jpg'
import img_7 from '../images/DraftProject/img_7.jpg'
import img_8 from '../images/DraftProject/img_8.jpg'


export default function DraftProject () {
    return (
        <>
        <CapRepair
            title="ЭСКИЗНЫЙ ПРОЕКТ ОТ DH-STUDIO"
            link="/Эскизный Проект"
        />
        <div className="paragraph">
                <h2 className="paragraph__title">Что включает эскизный проект?</h2>
                <p className="paragraph__text">Хотим представить Вашему вниманию пример Эскизного Проекта для квартиры. Эскизный проект представляет собой альбом из картинок 3д-Визуализации будущего интерьера. Для разработки Эскизного Проекта нам необходимо снять замеры помещения, осмотреть его и проанализировать. После чего мы составляем Техническое Задание на проектирование. На данном этапе для нас важно узнать как можно больше нюансов и пожеланий от Заказчика: количество проживающих членов семьи или количество сотрудников, если это, например офис. Вкусовые особенности каждого, цветовые предпочтения, хобби и основной род деятельности. А так же мы поможем определиться со стилем, если Вы колеблетесь и не определились, какой стиль именно выбрать. Мы так же учтем Ваш бюджет, а следовательно не придумаем то, что Вы откажетесь воплощать по факту реализации ремонтных работ и закупа материалов. Экизный Проект - это гарантия того, что Вы получите действительно потрясающий результат!</p>
                <h2 className="title__smoll">ПРИМЕР ЭСКИЗНОГО ПРОЕКТА ОТ DH-STUDIO</h2>
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
                </ul>
                <h2 className="paragraph__title">Для чего нужен Эскизный Проект?</h2>
                <p className="paragraph__text">Эскизный Проект - это самый важный и определяющий этап работ над дизайном интерьера. На данном этапе мы можем отработать все нюансы дизайна, "примерить" несколько вариантов расстановки и оформления пространства и увидеть то, что получим в итоге. Наша студия дизайна разрабатывает только такие проекты, которые точно можем реализовать в действительности. На основе Эскизного Проекта делаются все рассчеты и чертежи, производится подбор материалов, мебели, декора и освещения.</p>
                <p className="paragraph__text">Наша комнада выполняет все проекты с отточенным за годы мастерством и не делает повторов, и, что самое важное, разрабатывает проекты, которые очень долго будут актуальны, - мы всегда отслеживаем развитие сферы дизайна интерьера и знаем, какие тренды придут к нам в будущем!</p>
        </div>
        </>
    )}
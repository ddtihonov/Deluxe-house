import { Link } from 'react-router-dom';


import design_1 from '../images/commercial/design_1.png'
import design_2 from '../images/commercial/design_2.png'
import design_3 from '../images/commercial/design_3.png'
import design_4 from '../images/commercial/design_4.png'
import design_5 from '../images/commercial/design_5.png'
import design_6 from '../images/commercial/design_6.png'
import design_7 from '../images/portfolio/design_7.png'
import design_8 from '../images/commercial/design_8.png'
import design_9 from '../images/commercial/design_9.png'
import design_10 from '../images/portfolio/design_10.png'
import design_11 from '../images/portfolio/design_11.png'
import design_5_1 from '../images/portfolio/design_5.png'

export default function Commercial () {

    return (
        <>
        <section className="commercial">
        <p className="beginning__text">Мы с высоким уровнем профессионализма подходим к разработке проектов дизайна интерьеров коммерческих помещений. У нас за плечами богатый опыт в создании проектов для объектов общественного назначения: рестораны, гостевые дома, сауны и SPA, бутики и магазины. Мы готовы взяться за любой проект не менее 60 кв.м.</p>
        <p className="beginning__text">Наши работы Вы можете увидеть не только у нас на сайте, но и в живую, посетив одно из общественных мест, которые представлены в нашем портфолио. Мы так же учитываем прогнозируемое развитие тенденций в сфере дизайна. Поэтому наши проекты остаются актуальными очень долгое время!</p>
        </section>
        <section className="portfolio">
            <h2 className="paragraph__title">Наши работы по дизайну коммерческих помещений</h2>
            <div className="line"></div>
            <ul className="table">
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_1} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Помещение для игры в гольф</h3>
                    <p className="table__text">Симулятор для игры в гольф в БЦ «Арман»</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_2} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Помещение паба в Гольф-Клубе “Астана”</h3>
                    <p className="table__text">VIP-здание Гольф-клуба, 2021 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_3} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Интерьер офиса компании KMG</h3>
                    <p className="table__text">Бизнес-Центр на Водно-зеленом бульваре</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_4} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Бутик женской одежды</h3>
                    <p className="table__text">ТРЦ “Евразия, 2019 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_5} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">SPA с банным комплексом</h3>
                    <p className="table__text">ул. Аксу-Аюлы, 2020 год.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_6} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Торговый Зал K-Cell Центра</h3>
                    <p className="table__text">ТРЦ “Абу-Даби Плаза”, 2020 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_7} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Бассейн в гостевом доме</h3>
                    <p className="table__text">Гостевой дом с сауной</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_8} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Терраса ресторана Trattoria Highvill</h3>
                    <p className="table__text">ул. А.Байтурсынова, 2021 г.</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_9} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Офис руководителя компании “Таймас”</h3>
                    <p className="table__text">Дизайн офиса в БЦ «Азия»</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_10} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Стильный бутик</h3>
                    <p className="table__text">Бутик женской одежды в ТРЦ “Азия Парк”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_11} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Дизайн ресторана 51:4</h3>
                    <p className="table__text">Ресторан в ЖК “Премьера”</p>
                </li>
                <li className="table__card">
                    <a className="table__link" href="#">
                        <img className="table__image" src={design_5_1} alt="дизайн интерьера"/>
                        <p className="table__hint" >СМОТРЕТЬ ПРОЕКТ</p>
                    </a>
                    <h3 className="table__title">Комфортная комната отдыха</h3>
                    <p className="table__text">Гостевой дом 3000 кв.м. “Heaven Astana”</p>
                </li>
            </ul>
            <div className="button__box">
                <Link className="link-black" to="/housing">Жилые помещения</Link>
            </div>
        </section>
        <div className="paragraph">
                <h2 className="paragraph__title">Дизайн коммерческих помещений</h2>
                <p className="paragraph__text">Дизайн торговых и общественнных помещений всегда отличается не только сложностью полета творческой фантазии, но ограничивающими ее инженерными и санитарными требованиями. В студии дизайна DELUXE HOUSE вы можете заказать разработку индивидуального дизайн проекта для торговых, медицинских и общественных помещений не только в Астане, но и в абсолютно любом городе Казахстана! В любом крупном городе всегда есть множество объектов общественного назначения: развлекательные центры, кафе и рестораны, SPA и фитнес-центры, гостиницы и офисы, а также прочие места для времяпрепровождения людей. Выбор мест для подобных мероприятий и получения услуг всегда очень большой, так что конкуренция присутствует достаточно большая. Хозяевам подобных заведений нужно не только привлечь внимание посетителей, но и приложить максимальные усилия, что бы остались внутри, получили услугу или приобрели товар и пришли в последующем снова. Хорошо проработанный дизайн проект помещения играет немаловажную, даже одну из самых первых ролей для этой цели! Грамотно созданный дизайн-проект помещения коммерческого назначения помогает не просто привлечь новых клиентов, но и сделать из них постоянных посетителей. С этой целью проектированием дизайна интерьера должен заниматься настоящий профессионал, который хорошо разбирается в тонкостях конкретного направления. Специалисты студии дизайна интерьера "DELUXE HOUSE" помогут создать нужный интерьер коммерческого заведения. Принципы его создания заметно отличаются от стандартных интерьеров жилых помещений. При разработке дизайна интерьера коммерческого помещения много внимания уделяется функциональности пространства, - в таком помещении должно быть удобно всем: как работникам, так и клиентам. При проектировании так же необходимо учитывать нормы и требования к помещению с точки зрения санитарной и пожарной безопасности. Не менее важным фактором является и внешняя привлекательность, а также сохранение актуальности дизайна в последующие годы. Оригинальный стиль оформления, легкость пространства создают простую, комфортную, элегантную и непринужденную атмосферу, к которой хочется вернуться.</p>
            </div>
            <div className="paragraph">
                <h2 className="paragraph__title">Что предлагаем мы?</h2>
                <p className="paragraph__text">Эксперты нашей студии дизайна смогут создать качественный и детальный дизайн проект для Вашего помещения с учетом всех Ваших пожеланий, при этом применяя любые стилистические направления, учитывая возмонжость их реализации, исходя из того, что предлагается на рынке Республики Казахстан и имея возможность заказа материалов из-за ее границ. Одновременно с этим, нами учитываются все технические особенности помещений и соблюдаются модные тенденции, чтобы они соответствовали вкусу современных покупателей и потенциальных постоянных посетителей. Весь дизайн создается и планируется под определенный бюджет, который готов выделить Заказчик. Благодаря всему этому, Вы точно сможете получить качественно разработанный и детально проработанный интерьер, который сделает Ваше заведение уникальным и высококонкурентным!</p>
        </div>
        </>
)
}
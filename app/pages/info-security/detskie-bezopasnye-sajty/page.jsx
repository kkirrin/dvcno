import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Детские безопасные сайты",
    description: "Детские безопасные сайты",
};

const items = [
    {
        link: 'http://www.saferunet.ru',
        description: 'Центр Безопасного Интернета в России. Сайт посвящен проблеме безопасной, корректной и комфортной работы в Интернете. А конкретнее – он занимаемся Интернет-угрозами и эффективным противодействием им в отношении пользователей. Центр был создан в 2008 году под названием «Национальный узел Интернет-безопасности в России».',
    },
    {
        link: 'http://detionline.com/',
        description: 'Линия помощи «Дети онлайн». Оказание психологической и практической помощи детям и подросткам, которые столкнулись с опасностью или негативной ситуацией во время пользования интернетом или мобильной связью. Линия помощи «Дети онлайн» является первым и единственным такого рода проектом в России и реализуется в рамках Года Безопасного Интернета в России.',
    },
    {
        link: 'https://resh.edu.ru/ ',
        description: '«Российская электронная школа» – это интерактивные уроки по всему школьному курсу с 1 по 11 класс от лучших учителей страны, созданные для того, чтобы у каждого ребёнка была возможность получить бесплатное качественное общее образование. Интерактивные уроки «Российской электронной школы» строятся на основе специально разработанных авторских программ, успешно прошедших независимую экспертизу. Эти уроки полностью соответствуют федеральным государственным образовательным стандартам (ФГОС) и примерной основной образовательной программе общего образования',
    },
    {
        link: 'http://www.nedopusti.ru ',
        description: 'Cоциальный проект по защите прав детей «Не допусти» — социальный проект по защите детей от похищений, сексуальной эксплуатации и жестокого обращения реализуется с августа 2009 года. Организаторы проекта: Общественная палата РФ, РОЦИТ (Региональная Общественная Организация «Центр Интернет-технологий»), Межрегиональная правозащитная общественная организация «Сопротивление».',
    },
    {
        link: 'https://урокцифры.рф/',
        description: 'Всероссийский образовательный проект «Урок цифры» — это возможность получить знания от ведущих технологических компаний: Фирмы «1С», Яндекса, «Лаборатории Касперского» и Mail.Ru Group, а также Академии искусственного интеллекта благотворительного фонда Сбербанка.',
    },
    {
        link: 'http://единыйурок.дети/',
        description: 'Портал «Единыйурок.дети» является проектом Экспертного совета по информатизации системы образования и воспитания при Временной комиссии Совета Федерации по развитию информационного общества. На сайте обучающиеся в возрасте от 11 до 21 года могут пройти информационные викторины и дистанционные курсы в рамках тематических уроков и мероприятий Календаря.',
    },
    {
        link: 'http://kids.kremlin.ru/',
        description: 'Сайт «Президент России гражданам школьного возраста» призван кратко, доходчиво и занимательно рассказать учащимся средних классов российских школ (гимназий, лицеев, детских домов): о демократическом институте президентства, о символах и атрибутах нашего государства, о действующем Президенте России, об истории власти в России, о месте работы главы государства – Московском Кремле.',
    },
]

export default function Page() {

    return (
        <div className="container">
            <Breadcrumbs
                slug={'Информационная безопасность'}
                link={'pages/info-security'}
                title={'Детские безопасные сайты'}
            />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>Детские безопасные сайты</h2>
                <Image
                    src="/info-security/image-5.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <ul className={styles.site_list}>
                {items.map((item, index) => (
                    <li className={styles.site_item} key={index}>
                        <div className={styles.site_header}>
                            <Image
                                src="/info-security/wold-icon.svg"
                                alt="Изображение"
                                width={40}
                                height={40}
                                className="dsv-image"
                            />
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                        </div>
                        <div className={styles.site_description}>{item.description}</div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
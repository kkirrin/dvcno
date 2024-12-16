import styles from "./page.module.css";

import { Slider, Awards } from "./components";
import { About, Events, News } from "./sections";

// import { Contacts } from "./sections/Contacts/Contacts";

export const metadata = {
  title: "ДВЦНО | Главная",
  description: "Дальневосточный центр непрерывного образования",
};
export default function Home() {

  return (
    <>

      <h1 className="visually-hidden">Дальневосточный центр непрерывного образования</h1>
      <div className="container">
       
        {/* <Slider /> */}

        <About />
      </div>
      <div className="gray-wrapper">

        {/* <Why /> */}
        {/* <Awards /> */}
      </div>
      {/* <News />  */}
      {/* <Events /> */}


          {/* <Why /> */}
          {/* <Awards /> */}
        <News /> 
        <Events />

        {/* <Contacts /> */}

      {/* <Partners /> */}
      {/* <Gallery /> */}

      {/* <Contacts /> */}



    </>
  );
}

import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { CardReactJs } from "./CardsSkills/Reactjs";
import { CardAngular } from "./CardsSkills/Angularjs";
import { CardVue } from "./CardsSkills/Vuejs";
import { CardNext } from "./CardsSkills/Nextjs";
import { CardNode } from "./CardsSkills/Nodejs";
import { CardRubyOnRails } from "./CardsSkills/RubyonRails";
import { CardAxios } from "./CardsSkills/Axios";
import { CardRedux } from "./CardsSkills/Reduxjs";
import { CardJQuery } from "./CardsSkills/jQueryjs";
import { CardElectron } from "./CardsSkills/Electronjs";
import { CardTailwind } from "./CardsSkills/Tailwind";
import { CardScss } from "./CardsSkills/Sasscss";
import { CardBootstrap } from "./CardsSkills/Bootstrap";
import { CardStyledComponents } from "./CardsSkills/StyledComponents";
import { CardBulma } from "./CardsSkills/Bulma";
import { CardJavascript } from "./CardsSkills/Javascript";
import { CardTypescript } from "./CardsSkills/Typescriptjs";
import { CardCSS } from "./CardsSkills/Css";
import { CardHTML } from "./CardsSkills/Html";
import { CardPHP } from "./CardsSkills/Php";
import { CardDocker } from "./CardsSkills/Docker";
import { CardPrisma } from "./CardsSkills/Prisma";
import { CardMySql } from "./CardsSkills/Mysql";
import { CardFirebase } from "./CardsSkills/Firebase";
import { CardAWS } from "./CardsSkills/Aws";
import { CardGithub } from "./CardsSkills/Github";
import { CardGitbash } from "./CardsSkills/Gitbash";
import { CardNotion } from "./CardsSkills/Notion";
import { CardNPM } from "./CardsSkills/Npm";
import { CardYarn } from "./CardsSkills/Yarn";
import { CardCorelDrawn } from "./CardsSkills/CorelDraw";
import { CardIllustrator } from "./CardsSkills/Illustrator";
import { CardPhotoshop } from "./CardsSkills/Photoshop";
import { CardUiUx } from "./CardsSkills/UiUx";
import { CardFigma } from "./CardsSkills/Figma";

export function SkillsContent() {
  return (
    <section className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={3}
        effect='coverflow'
        navigation
        coverflowEffect={{ slideShadows: false, depth: 120, scale: 0.9, modifier: 1 }}
        pagination={{ clickable: true }}
        >
        <SwiperSlide />
        <SwiperSlide>
          <CardReactJs />
        </SwiperSlide>
        <SwiperSlide>
          <CardAngular />
        </SwiperSlide>
        <SwiperSlide>
          <CardVue />
        </SwiperSlide>
        <SwiperSlide>
          <CardNext />
        </SwiperSlide>
        <SwiperSlide>
          <CardNode />
        </SwiperSlide>
        <SwiperSlide>
          <CardRubyOnRails />
        </SwiperSlide>
        <SwiperSlide>
          <CardAxios />
        </SwiperSlide>
        <SwiperSlide>
          <CardRedux />
        </SwiperSlide>
        <SwiperSlide>
          <CardJQuery />
        </SwiperSlide>
        <SwiperSlide>
          <CardElectron />
        </SwiperSlide>
        <SwiperSlide>
          <CardTailwind />
        </SwiperSlide>
        <SwiperSlide>
          <CardScss />
        </SwiperSlide>
        <SwiperSlide>
          <CardBootstrap />
        </SwiperSlide>
        <SwiperSlide>
          <CardStyledComponents />
        </SwiperSlide>
        <SwiperSlide>
          <CardBulma />
        </SwiperSlide>
        <SwiperSlide>
          <CardJavascript />
        </SwiperSlide>
        <SwiperSlide>
          <CardTypescript />
        </SwiperSlide>
        <SwiperSlide>
          <CardCSS />
        </SwiperSlide>
        <SwiperSlide>
          <CardHTML />
        </SwiperSlide>
        <SwiperSlide>
          <CardPHP />
        </SwiperSlide>
        <SwiperSlide>
          <CardDocker />
        </SwiperSlide>
        <SwiperSlide>
          <CardPrisma />
        </SwiperSlide>
        <SwiperSlide>
          <CardMySql />
        </SwiperSlide>
        <SwiperSlide>
          <CardFirebase />
        </SwiperSlide>
        <SwiperSlide>
          <CardAWS />
        </SwiperSlide>
        <SwiperSlide>
          <CardGithub />
        </SwiperSlide>
        <SwiperSlide>
          <CardGitbash />
        </SwiperSlide>
        <SwiperSlide>
          <CardNotion />
        </SwiperSlide>
        <SwiperSlide>
          <CardNPM />
        </SwiperSlide>
        <SwiperSlide>
          <CardYarn />
        </SwiperSlide>
        <SwiperSlide>
          <CardCorelDrawn />
        </SwiperSlide>
        <SwiperSlide>
          <CardIllustrator />
        </SwiperSlide>
        <SwiperSlide>
          <CardPhotoshop />
        </SwiperSlide>
        <SwiperSlide>
          <CardUiUx />
        </SwiperSlide>
        <SwiperSlide>
          <CardFigma />
        </SwiperSlide>
        <SwiperSlide />
      </Swiper>
    </section>
  );
}

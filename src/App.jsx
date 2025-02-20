// IMAGE
import logo from "./assets/photo_2024-06-19_19-36-28.jpg";
import image3 from "./assets/objects.png";
import narzullo from "./assets/нарзулло.png";
import amir from "./assets/amir.jpg";
import mehrdod from "./assets/mehrdod.jpg";
import madina from "./assets/madina.jpg";
import ismoil from "./assets/ismoil.jpg";
import image4 from "./assets/Group 248.png";
import logoLearnIT from "./assets/photo_2024-11-26_09-52-14 copy.png";
import logo1 from "./assets/КомпГрамм.png";
import logo2 from "./assets/frontend.png";
import logo3 from "./assets/appInventor copy.png";
import logo4 from "./assets/pyton.png";
import logo5 from "./assets/C++.png";
import logo6 from "./assets/Design.jpg";
import logo7 from "./assets/1C.jpg";
import logo8 from "./assets/PHP.png";
import photoweb from "./assets/WEBSITE.png";
import photo1CC from "./assets/ldkdsvmk.jpg";
import m from "./assets/M copy.png"
import tojbis from "./assets/Untitled-1 copy.png"
import fin from "./assets/fingroum copy.png"
import uxui from "./assets/UXUI.jpg"
import consult from "./assets/1-contacto.jpg"
import uxui2 from "./assets/UUXXUII.jpg"


// video
import videos from "./assets/1752187418_714D620C6B9632E207F557849DC535BC_video_dashinit.mp4";
import video2 from "./assets/1752187418_D04107FA528E48A441C2EEB74D5C788A_video_dashinit.mp4";
import video3 from "./assets/IMG_1733.MOV--online-audio-convert.com.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Pagination, Navigation } from "swiper/modules";

// MUI
import CallIcon from "@mui/icons-material/Call";
import TemporaryDrawer from "./components/drawer.jsx";
import VideoPlayer from "./components/video.jsx";
import PersonIcon from "@mui/icons-material/Person";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ComputerIcon from "@mui/icons-material/Computer";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PublicIcon from "@mui/icons-material/Public";
import ExtensionIcon from "@mui/icons-material/Extension";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FAQSection from "./components/FAQ.jsx";
import './App.css'

const App = () => {
  return (
    <div class="divvs">
      {/* headr */}
      <div className="w-[100%] h-[70px] bg-[#1B1B1B] flex justify-evenly items-center fixed z-[100]">
        <TemporaryDrawer />

        <img className="h-[40px]" src={logo} alt="" />

        <div className="sm:hidden md:hidden lg:hidden xl:flex 2xl:flex items-center gap-[20px] text-white">
          <p className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            Главная
          </p>
          <a href="#secions2" className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            О нас
          </a>
          <a href="#secioncours" className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            Курсы
          </a>
          <a href="#secionmentors" className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            Преподаватели
          </a>
          <a href="#secionpartner" className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            Блог
          </a>
          <a href="#secioncontact" className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            Контакты
          </a>
          <p className="hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
            Вход
          </p>
        </div>

        <div className="sm:hidden md:hidden lg:hidden xl:flex 2xl:flex gap-[10px] items-center text-white hover:text-[#dc3545] hover:transition-[10s] hover:cursor-pointer">
          <CallIcon />
          <p>+992 (92)-009-1313</p>
        </div>
      </div>

      {/* body */}
      <div className="w-[100%] pt-[70px] h-[auto] flex flex-col justify-start items-centert gap-[30px] bg-[url('./assets/backgroud_black.png')] bg-cover bg-center bg-[#1B1B1B] bg-blend-multiply">
        {/* secion1 */}
        <div className="w-[100%] flex flex-wrap sm:gap-[10px] md:gap-[20px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] justify-center items-center">
          <div className=" p-[10px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[550px] h-[500px] flex flex-col justify-center gap-[20px]">
            <h1 className="sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[45px] 2xl:text-[45px] text-[white] font-[700] font-serif">
              Добро пожаловать <br />в акадеиию Learn IT
            </h1>
            <p className="sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2x:text-[18px] text-justify text-[#8A8A8A]">
              Мы помогаем вам освоить самые современные технологии и навыки,
              чтобы стать профессионалом в мире информационных технологий.
              Учитесь, развивайтесь и достигайте новых высот вместе с нами!
            </p>
            <div className="flex gap-[20px]">
              <button className="w-[250px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2x:text-[18px] p-[5px] rounded-[10px] bg-[#dc3545] text-white border-[2px] border-[solid] border-[#dc3545] text-[18px] hover:bg-transparent hover:border-[2px] hover:text-[#dc3545] hover:transition-[2s] hover:border-[solid] hover:border-[#dc3545]">
                Получить консультацию
              </button>
              <a href="#secioncours" className="w-[150px] flex justify-center items-center sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2x:text-[18px] p-[10px] bg-transparent text-[#dc3545] border-[2px] text-[18px] rounded-[10px] border-[solid] border-[#dc3545] hover:bg-[#dc3545] hover:text-[white] hover:border-[2px] hover:transition-[2s]">
                Наши курсы
              </a>
            </div>
          </div>
          <img className="w-[600px]" src={logoLearnIT} alt="" />
        </div>

        {/* secion2 */}
        <div id="secions2" className="w-[100%] flex flex-wrap sm:gap-[10px] md:gap-[20px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] justify-center items-center pb-[50px]">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <VideoPlayer video={video3} />
            </SwiperSlide>
            <SwiperSlide>
              <VideoPlayer video={video2} />
            </SwiperSlide>
            <SwiperSlide>
              <VideoPlayer video={videos} />
            </SwiperSlide>
          </Swiper>
          <div className="section2">
            <h1 className="text-[white] font-serif sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px] 2xl:text-[38px]">
              Многолетний опыт
            </h1>
            <p className=" text-[#8A8A8A] sm:w-[300px] md:w-[400px] lg:w-[500px] text-justify xl:w-[600px] 2xl:w-[700px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2x:text-[18px]">
              Добро пожаловать в академию Learn IT – ваш путь к успешной
              карьере! Мы предоставляем курсы, которые помогут вам освоить
              востребованные навыки и найти перспективную работу в будущем.
              Учитесь у профессионалов, развивайте свои таланты и строите свое
              успешное будущее вместе с Learn IT!
            </p>
            <div className="section2-box">
              <div className="section-elems">
                <PersonIcon sx={{ color: "white", fontSize: "48px" }} />
                <p className="text-[18px] font-[600] text-[#8A8A8A]">
                  Сертифицированные учителя
                </p>
              </div>
              <div className="section-elems">
                <AutoStoriesIcon sx={{ color: "white", fontSize: "48px" }} />
                <p className="text-[18px] font-[600] text-[#8A8A8A]">
                  80% практики и 20% теории
                </p>
              </div>

              <div className="section-elems">
                <ComputerIcon sx={{ color: "white", fontSize: "48px" }} />
                <p className="text-[18px] font-[600] text-[#8A8A8A]">
                  Ноутбуки и стабильное интернет-соединение
                </p>
              </div>
              <div className="section-elems">
                <HistoryEduIcon sx={{ color: "white", fontSize: "48px" }} />
                <p className="text-[18px] font-[600] text-[#8A8A8A]">
                  Индивидуальный подход к каждому
                </p>
              </div>
              <div className="section-elems">
                <PublicIcon sx={{ color: "white", fontSize: "48px" }} />
                <p className="text-[18px] font-[600] text-[#8A8A8A]">
                  Регулярные занятия
                </p>
              </div>
              <div className="section-elems">
                <ExtensionIcon sx={{ color: "white", fontSize: "48px" }} />
                <p className="text-[18px] font-[600] text-[#8A8A8A]">
                  Творческие уроки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* secion3 */}
      <div id="secioncours" className="w-[100%] h-auto pt-[100px] pb-[100px]  flex sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center items-center">
        <div className="w-[85%] flex flex-col gap-[20px] justify-center items-start">
          <h1 className=" text-[38px] font-serif">Наши курсы</h1>
          <p className="text-[16px] text-[#8A8A8A] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[800px] text-justify">
            Курсы Learn IT – только самые востребованные навыки! Наши курсы
            охватывают самые популярные и актуальные языки программирования,
            которые востребованы на рынке труда прямо сейчас. Вы получите
            практические знания и навыки, необходимые для успешной карьеры в
            ИТ-индустрии!
          </p>
          <div className="w-[100%] h-auto flex flex-wrap justify-center gap-x-[10px] gap-y-[50px]">
            <div className="w-[310px] h-[500px] flex flex-col justify-between">
              <img className="w-[60%] m-auto" src={logo1} alt="" />
              <div className="flex gap-[20px] items-center">
                <CalendarMonthIcon className="text-[#dc3545]" />
                <p className="text-[16px] font-[650] text-gray-700">3 МЕСЯЦА</p>
              </div>
              <p className="font-sans font-[500] text-[24px]">
                Computer grammary
              </p>
              <p className="text-[16px] text-[#666666] font-[400px]">
                #word #excel #powerpoint #office
              </p>
              <p className="w-[95%] text-justify">
                Курс идеально подходит для освоения Word, Excel и PowerPoint,
                включая 80% практики и 20% теории, что помогает развить навыки
                для работы, учебы и проектов.
              </p>
              <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                Подать заявку
              </a>
            </div>

            <div className="w-[310px] h-[500px] flex flex-col justify-between ">
              <img className="w-[60%] m-auto" src={logo3} alt="" />
              <div className="flex gap-[20px] items-center">
                <CalendarMonthIcon className="text-[#dc3545]" />
                <p className="text-[16px] font-[650] text-gray-700">3 МЕСЯЦА</p>
              </div>
              <p className="font-sans font-[500] text-[24px]">App Inventor</p>
              <p className="text-[16px] text-[#666666] font-[400px]">
                #android #mobile #apk
              </p>
              <p className="w-[95%] text-justify">
                Курс идеально подходит для освоения основ работы в App Inventor,
                включая 80% практики и 20% теории, что поможет в разработке
                мобильных программ для работы.
              </p>
              <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                Подать заявку
              </a>
            </div>

            <div className="w-[310px] h-[500px] flex flex-col justify-between ">
              <img className="w-[60%] m-auto" src={logo2} alt="" />
              <div className="flex gap-[20px] items-center">
                <CalendarMonthIcon className="text-[#dc3545]" />
                <p className="text-[16px] font-[650] text-gray-700">
                  5-7 МЕСЯЦА
                </p>
              </div>
              <p className="font-sans font-[500] text-[24px]">Front End</p>
              <p className="text-[16px] text-[#666666] font-[400px]">
                #html #css #js
              </p>
              <p className="w-[95%] text-justify">
                Курс идеально подходит для освоения основ фронтенд-разработки,
                включая 80% практики и 20% теории, что помогает развить навыки
                для работы.
              </p>
              <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                Подать заявку
              </a>
            </div>



            <div className="w-[310px] h-[500px] flex flex-col justify-between ">
              <img className="w-[60%] m-auto" src={logo4} alt="" />
              <div className="flex gap-[20px] items-center">
                <CalendarMonthIcon className="text-[#dc3545]" />
                <p className="text-[16px] font-[650] text-gray-700">
                  5-7 МЕСЯЦА
                </p>
              </div>
              <p className="font-sans font-[500] text-[24px]">Python</p>
              <p className="text-[16px] text-[#666666] font-[400px]">
                #telegram #bot #server #django
              </p>
              <p className="w-[95%] text-justify">
                Курс идеально подходит для освоения основ Python, включая 80%
                практики и 20% теории, что поможет разработать чат-ботов,
                искусственный интеллект и проекты.
              </p>
              <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                Подать заявку
              </a>
            </div>

           
              <div className="w-[310px] h-[500px] flex flex-col justify-between ">
                <img className="w-[60%] m-auto" src={logo5} alt="" />
                <div className="flex gap-[20px] items-center">
                  <CalendarMonthIcon className="text-[#dc3545]" />
                  <p className="text-[16px] font-[650] text-gray-700">
                    2-3 МЕСЯЦА
                  </p>
                </div>
                <p className="font-sans font-[500] text-[24px]">C++</p>
                <p className="text-[16px] text-[#666666] font-[400px]">
                  #software #gameDev #desktopApp
                </p>
                <p className="w-[95%] text-justify">
                  Курс идеально подходит для освоения основ C++, включая 80%
                  практики и 20% теории, что поможет разработать игры,
                  компьютерные программы.
                </p>
                <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                  Подать заявку
                </a>
              </div>

              <div className="w-[310px] h-[500px] flex flex-col justify-between ">
                <img className="w-[60%] m-auto" src={logo8} alt="" />
                <div className="flex gap-[20px] items-center">
                  <CalendarMonthIcon className="text-[#dc3545]" />
                  <p className="text-[16px] font-[650] text-gray-700">
                    2-3 МЕСЯЦА
                  </p>
                </div>
                <p className="font-sans font-[500] text-[24px]">
                  PHP/SQL/Larawel
                </p>
                <p className="text-[16px] text-[#666666] font-[400px]">
                  #PHP #webDev #backend #serverSide #PHPDevelopment
                </p>
                <p className="w-[95%] text-justify">
                  Курс идеально подходит для освоения основ PHP, включая 80%
                  практики и 20% теории, что поможет создавать веб-сайты,
                  серверные приложения и автоматизировать процессы.
                </p>
                <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                  Подать заявку
                </a>
              </div>

              <div className="w-[310px] h-[500px] flex flex-col justify-between ">
                <img
                  className="w-[60%] m-auto rounded-[50%]"
                  src={logo6}
                  alt=""
                />
                <div className="flex gap-[20px] items-center">
                  <CalendarMonthIcon className="text-[#dc3545]" />
                  <p className="text-[16px] font-[650] text-gray-700">
                    3 МЕСЯЦА
                  </p>
                </div>
                <p className="font-sans font-[500] text-[24px]">Дизайнер</p>
                <p className="text-[16px] text-[#666666] font-[400px]">
                  #graphicDesign #UIUX #CorelDraw #Photoshop #Figma
                </p>
                <p className="w-[95%] text-justify">
                  Курс идеально подходит для освоения основ дизайна, включая 80%
                  практики и 20% теории, что поможет изучить UX/UI, а также
                  освоить CorelDraw, Photoshop и Figma для создания
                  профессиональных дизайнов.
                </p>
                <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                  Подать заявку
                </a>
              </div>

              <div className="w-[310px] h-[500px] flex flex-col justify-between ">
                <img
                  className="w-full max-w-[80%] m-auto object-contain"
                  src={logo7}
                  alt=""
                />
                <div className="flex gap-[20px] items-center">
                  <CalendarMonthIcon className="text-[#dc3545]" />
                  <p className="text-[16px] font-[650] text-gray-700">
                    1-3 МЕСЯЦА
                  </p>
                </div>
                <p className="font-sans font-[500] text-[24px]">
                  1C разработка/бухгалтерия
                </p>
                <p className="text-[16px] text-[#666666] font-[400px]">
                  #1CDevelopment #1CProgramming #ERP #Automation #1CEnterprise
                </p>
                <p className="w-[95%] text-justify">
                  Курс идеально подходит для освоения 1С разработки, включая 80%
                  практики и 20% теории, что поможет изучить создание ERP-систем
                  и освоить 1С:Предприятие для автоматизации процессов.
                </p>
                <a href="#secioncontact" className="w-[150px] flex justify-center items-center pt-[8px] pb-[8px] text-white font-[400px] rounded-[20px] bg-[#dc3545] mt-[20px] hover:bg-[#dc3546d0]">
                  Подать заявку
                </a>
              </div>
            
          </div>
        </div>
      </div>

      {/* secion4 */}
      {/* <div className="w-[100%] h-[auto] pt-[100px] pb-[100px] flex sm:justify-center md:justify-center lg:justify-center xl:justify-end 2xl:justify-end items-center bg-[#DA4533]">
        <div className="w-[85%] flex flex-col gap-[20px] justify-center items-start">
          <h1 className=" text-[38px] text-white font-serif">
            Частые вопросы
          </h1>
          <p className="text-[16px] text-[#ffffff]">
          Часто задаваемые вопросы помогают нашим клиентам быстро находить ответы на основные темы. Мы собрали ключевую информацию, <br /> чтобы сделать сотрудничество удобным и понятным.
          </p>
          <div className="w-[90%] h-[auto] bg-[#1B1B1B] p-[20px] pb-[50px] rounded-[10px] flex flex-col gap-[20px]">
            <h1 className="text-white text-[24px]">
              С какой целью вы обращаетесь?
            </h1>
            <div className="flex flex-wrap gap-[10px] justify-center items-center">
              <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s]">
                <h1 className="text-[16px] text-white">
                  Регистрацию прав на использование полезной модели,
                  промобразца, изобретенния
                </h1>
              </div>

              <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s]">
                <h1 className="text-[16px] text-white">
                  Регистрацию прав на использование полезной модели,
                  промобразца, изобретенния
                </h1>
              </div>

              <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s]">
                <h1 className="text-[16px] text-white">
                  Регистрацию прав на использование полезной модели,
                  промобразца, изобретенния
                </h1>
              </div>

              <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s]">
                <h1 className="text-[16px] text-white">
                  Регистрацию прав на использование полезной модели,
                  промобразца, изобретенния
                </h1>
              </div>

              <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s]">
                <h1 className="text-[16px] text-white">
                  Регистрацию прав на использование полезной модели,
                  промобразца, изобретенния
                </h1>
              </div>

              <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s]">
                <h1 className="text-[16px] text-white">
                  Регистрацию прав на использование полезной модели,
                  промобразца, изобретенния
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <FAQSection/>

      {/* secion5 */}
      <div className="w-[100%] h-[auto] pt-[100px] pb-[100px]  flex sm:justify-center md:justify-center lg:justify-center xl:justify-end 2xl:justify-end items-center flex-col justify-start items-centert gap-[30px] bg-[url('./assets/backgroud_black.png')] bg-cover bg-center bg-[#1B1B1B] bg-blend-multiply">
        <div className="w-[85%] flex flex-col gap-[20px] justify-center items-start">
          <h1 className=" text-[38px] font-serif text-white">Наши услуги</h1>
          <p className="text-[16px] text-[#8A8A8A]">
            Мы предлагаем создание веб-сайтов, автоматизацию бизнеса и настройку
            бухгалтерии в 1С. <br /> Наши решения повышают эффективность и
            упрощают управление.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px]">
            <div className="w-[300px] h-[400px] bg-[#1B1B1B] rounded-[10px] flex flex-col justify-center gap-[10px] items-center p-[20px]">
              <img className="w-[250px]" src={photoweb} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">
                Создание web - сайтов
              </p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#1B1B1B] rounded-[10px] flex flex-col justify-center gap-[60px] items-center p-[20px]">
              <img className="w-[180px] rounded-[50%]" src={photo1CC} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">1С Бухгалтерия</p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#1B1B1B] rounded-[10px] flex flex-col justify-center gap-[80px] items-center p-[20px]">
              <img className="w-[170px] rounded-[50%]" src={uxui2} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">
                Создание UX-UI сайта.
              </p>
            </div>

            <div className="w-[300px] h-[400px] bg-[#1B1B1B] rounded-[10px] flex flex-col justify-center gap-[50px] items-center p-[20px]">
              <img className="w-[180px] rounded-[50%]" src={consult} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">
                Бесплатная консультация.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* secion6 */}
      <div id="secionmentors" className="w-[100%] h-auto pt-[30px] pb-[30px] bg-[url('./assets/backgroud_grey.png')] flex sm:justify-center md:justify-center lg:justify-center xl:justify-end 2xl:justify-end items-center">
        <div className="w-[90%] flex flex-col gap-[20px] justify-center items-start">
          <h1 className=" text-[38px] font-serif">Наша команда</h1>
          <p className="text-[16px] text-[#8A8A8A]">
            Наша команда — это опытные специалисты, которые создают эффективные
            решения для бизнеса. <br /> Мы работаем слаженно, чтобы каждый
            проект был успешным и приносил результат.
          </p>
          <div className="display_flex">
            <div className="w-[240px] h-[400px] rounded-[10px] flex flex-col justify-evenly items-center">
              <img className="w-[240px] rounded-[7px]" src={mehrdod} alt="" />
              <p className="text-[18px] text-center text-[#242424] font-[500]">
              Тохири Мехрдод
              </p>
              <p className="text-[16px] text-center text-[#8A8A8A]">
              СЕО learnITacademy, Ментор и FrontEnd разработчик
              </p>
            </div>

            <div className="w-[240px] h-[400px] rounded-[10px] flex flex-col justify-evenly items-center">
              <img className="w-[240px] rounded-[7px]" src={amir} alt="" />
              <p className="text-[18px] text-center text-[#242424] font-[500]">
              Амир Олимов
              </p>
              <p className="text-[16px] text-center text-[#8A8A8A]">
                Ментор, FullStack-разработчик
              </p>
            </div>

            <div className="w-[240px] h-[400px] rounded-[10px] flex flex-col justify-evenly items-center">
              <img className="w-[240px] rounded-[7px]" src={ismoil} alt="" />
              <p className="text-[18px] text-center text-[#242424] font-[500]">
              Исмоил Олимов
              </p>
              <p className="text-[16px] text-center text-[#8A8A8A]">
                Ментор, Frontend-разработчик
              </p>
            </div>

            <div className="w-[240px] h-[400px] rounded-[10px] flex flex-col justify-evenly items-center">
              <img className="w-[240px] rounded-[7px]" src={madina} alt="" />
              <p className="text-[18px] text-center text-[#242424] font-[500]">
              Кодирова Мадина
              </p>
              <p className="text-[16px] text-center text-[#8A8A8A]">
                Администратор
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* secion7 */}
      <div id="secionpartner" className="w-[100%] h-[auto] pt-[100px] pb-[100px]  flex sm:justify-center md:justify-center lg:justify-center xl:justify-end 2xl:justify-end items-center flex-col justify-start items-centert gap-[30px] bg-[url('./assets/backgroud_black.png')] bg-cover bg-center bg-[#1B1B1B] bg-blend-multiply">
        <div className="w-[85%] flex flex-col gap-[20px] justify-center items-start">
          <h1 className=" text-[38px] font-serif text-white">Наши партнёры</h1>
          <p className="text-[16px] text-[#8A8A8A]">

          Наши партнёры — это надёжные компании, которые помогают нам создавать качественные и эффективные решения. <br /> Вместе мы добиваемся высоких результатов и успешных проектов.
          </p>
          <div className="flex flex-wrap justify-center m-auto gap-[50px]">
            <div className="w-[300px] h-[400px] rounded-[10px] flex flex-col justify-center gap-[30px] items-center p-[20px]">
              <img className="w-[250px]" src={fin} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">
              Fin Group
              </p>
            </div>

            <div className="w-[300px] h-[400px] rounded-[10px] flex flex-col justify-center gap-[30px] items-center p-[20px]">
              <img className="w-[250px]" src={tojbis} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">
                БИЗНЕС-ИНКУБАТОР
              </p>
            </div>

            <div className="w-[300px] h-[400px] rounded-[10px] flex flex-col justify-center gap-[30px] items-center p-[20px]">
              <img className="w-[250px]" src={m} alt="" />
              <p className="text-[18px] text-[#8A8A8A]">
              Oson Market
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* secion8 */}
      <div id="secioncontact" className="w-[100%] h-[auto] pt-[50px] pb-[50px] bg-[#DA4533] flex flex-wrap gap-[50px] items-center justify-center">
        <div className="flex flex-col gap-[30px] items-start p-[10px]">
          <h1 className="sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] 2xl:text-[40px] font-[700] text-white">
            Присоединяйтесь к нам
          </h1>
          <p className="text-white sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-[400]">
            Оставьте заявку, и мы пригласим вас на наш бесплатный <br />{" "}
            мастер-класс
          </p>
          <input
            type="text"
            placeholder="Имя фамилия"
            className="sm:w-[330px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[510px] text-white placeholder:text-white pl-[5px] outline-none border-b-[2px] border-b-[solid] border-b-[#ffffff70] bg-transparent"
            name=""
            id=""
          />
          <div className="flex justify-between sm:gap-[20px] 2xl:gap-[10px] flex-wrap">
            <input
              placeholder="Возраст"
              className="sm:w-[330px] 2xl:w-[250px] placeholder:text-white text-white pl-[5px] outline-none border-b-[2px] border-b-[solid] border-b-[#ffffff70] bg-transparent"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="Телефон"
              className="sm:w-[330px] 2xl:w-[250px] placeholder:text-white text-white pl-[5px] outline-none border-b-[2px] border-b-[solid] border-b-[#ffffff70] bg-transparent"
              type="text"
              name=""
              id=""
            />
          </div>
          <input
            placeholder="Сообщение"
            className="sm:w-[330px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[510px] placeholder:text-white text-white pl-[5px] outline-none border-b-[2px] border-b-[solid] border-b-[#ffffff70] bg-transparent"
            type="text"
            name=""
            id=""
          />
          <button className="pt-[10px] pl-[20px] pb-[10px] pr-[20px] text-white hover:bg-[#ff05055c] rounded-[10px] outline-none text-[16px] font-[600] bg-[#ff0505]">
            Записаться на бесплатный урок
          </button>
        </div>
            <div className="flex flex-col justify-center items-center text-white sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[38px] 2xl:text-[40px] font-[700]">
            <img className="sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]" src={logoLearnIT} alt="" />
            <p>Learn IT Academy</p>
            </div>
      </div>

      {/* footer */}
      <footer className="bg-[#1B1B1B] text-white py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-8">
          <div className="w-full lg:w-1/3">
            <img className="w-[200px]" src={logo} alt="" />
            <!-- <p className="mt-2 text-sm">
              Худжанд, 20-й микрорайон, Кохи Матбуот, 11-й этаж
            </p> -->
          </div>

          <div className="w-full sm:w-1/2 lg:w-auto">
            <h2 className="text-lg font-semibold mb-4">Навигация по сайту:</h2>
            <ul className="text-sm space-y-2">
              <li>Главная</li>
              <li>О нас</li>
              <li>Курсы</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-auto">
            <h2 className="text-lg font-semibold mb-4">Наши контакты:</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">learnit_academy@mail.ru</a></li>
              <li>+992 (92) 009 1313</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-auto">
            <h2 className="text-lg font-semibold mb-4">Мы в соцсетях:</h2>
            <ul className="text-sm space-y-2">
              <a href="https://www.facebook.com/profile.php?id=61560358667207&mibextid=ZbWKwL">Facebook</a>
              <br />
              <a href="https://www.instagram.com/learn_it_academy.tj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="">Instagram</a>
            </ul>
          </div>

          {/* <div className="w-full sm:w-1/2 lg:w-auto">
            <h2 className="text-lg font-semibold mb-4">Как добраться:</h2>
            <ul className="text-sm space-y-2">
              <li>Схема проезда</li>
              <a href="https://maps.app.goo.gl/1QRinioGvpgQKEpk8"><li>Кохи Матбуот</li></a>
            </ul>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default App;

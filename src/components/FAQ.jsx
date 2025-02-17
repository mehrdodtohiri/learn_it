import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQSection = () => {
  const faqData = [
    { 
      question: "Какие направления обучения доступны в IT Academy?", 
      answer: "У нас есть все направления, начиная с самого базового и заканчивая фронт- и бэк-разработкой." 
    },
    { 
      question: "Есть ли предварительные требования для поступления?", 
      answer: "Перед тем как принять на курс, мы приглашаем всех на бесплатный мастер-класс, где тестируем знания и навыки каждого, после чего предлагаем соответствующий уровень для обучения." 
    },
    { 
      question: "Как проходят занятия — онлайн или офлайн?", 
      answer: " Занятия проходят строго по графику: 20% теории и 80% практики." 
    },
    { 
        question: "Какой уровень подготовки можно достичь после завершения курса?", 
        answer: "Сейчас очень много где обещают горы за короткий срок, но реальные программисты знают, что достичь первых результатов за короткий срок очень сложно. В любом случае, после окончания курсов вы получите сертификат уровня джун или, как минимум, интерна." 
    },
    { 
        question: "Есть ли поддержка трудоустройства после окончания?", 
        answer: "Так как у нас акцент в основном на практику, содержание курса включает несколько живых проектов, которые студенты должны подготовить и изучить с нуля. По окончании у каждого студента будет свое портфолио и минимум два готовых проекта." 
    },
    { 
        question: "Какая стоимость обучения и есть ли возможность рассрочки?", 
        answer: "Мы всегда готовы идти навстречу нашим студентам, поэтому предлагаем хорошие скидки как до начала курса, так и во время занятий за хорошие результаты. Полную информацию о ценах мы указали выше на сайте." 
    },
    { 
        question: "Какой преподавательский состав у IT Academy?", 
        answer: "Преподаватели у нас — строго практики с опытом работы и достижениями в сфере программирования и IT." 
    },
    { 
        question: "Есть ли проекты или стажировки во время обучения?", 
        answer: "Тем, кому больше 17 лет, и кто во время курса отличился и показал хороший результат, по окончании определенного курса мы предлагаем стажировки в разных местах." 
    },
  ];

  return (
    <div className="w-[100%] h-[auto] pt-[100px] pb-[100px] flex sm:justify-center md:justify-center lg:justify-center xl:justify-end 2xl:justify-end items-center bg-[#DA4533]">
      <div className="w-[85%] flex flex-col gap-[20px] justify-center items-start">
        <h1 className="text-[38px] text-white font-serif">Частые вопросы</h1>
        <p className="text-[16px] text-[#ffffff]">
          Часто задаваемые вопросы помогают нашим клиентам быстро находить ответы на основные темы. Мы собрали ключевую информацию, <br /> чтобы сделать сотрудничество удобным и понятным.
        </p>
        <div className="w-[90%] h-[auto] bg-[#1B1B1B] p-[20px] pb-[50px] rounded-[10px] flex flex-col gap-[20px]">
          <h1 className="text-white text-[24px]">С какой целью вы обращаетесь?</h1>
          <div className="flex flex-wrap gap-[10px] justify-center items-center">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[48%] m-auto pt-[5px] pb-[10px] rounded-[5px] bg-[#3b3b3bb8] p-[10px] hover:bg-[#DA4533] hover:transition-[2s] cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[16px] text-white">{question}</h1>
        <KeyboardArrowDownIcon sx={{color:"white"}}/>
      </div>
      {isOpen && <p className="text-[14px] text-[#ddd] mt-[10px]">{answer}</p>}
    </div>
  );
};

export default FAQSection;

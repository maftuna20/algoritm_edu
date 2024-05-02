import React from "react";

import img2 from "../../image/Mask group (1).png";
import img3 from "../../image/Mask group (2).png";
import img4 from "../../image/Mask group.png";
import img5 from "../../image/Avatar.png";
import img6 from "../../image/Avatar (3).png";
import img7 from "../../image/Avatar (4).png";
import img8 from "../../image/Rectangle 4.png";
import img9 from "../../image/Rectangle 4 (1).png";
import img10 from "../../image/Rectangle 4 (2).png";
import img11 from "../../image/1 1.png"
import "./about.css";
function About() {
  return (
    <div className="App">
      <div className="texts">
        <h1 className="big-text">
          Обучайся современным профессиям в Algoritm!
        </h1>

        <h2 className="big-text2">
          у одних из лучших программистов страны, построй своё будущее своими
          руками
        </h2>

        <div className="headline">
          <button className="button2">Записаться</button>
        </div>
      </div>

      <div className="banner1">
        <div className="imgs1">
          <img src={img4} alt="" className="img1" />
          <div className="h2-1">
            <h2>Урок №1. Что такое HTML, CSS. Первый сайт с текстом</h2>
          </div>
          <div className="account1">
            <img className="img2" src={img5} alt="" />
            <div className="h2-2">
              <h2>Azamjon Xolikov</h2>
              <p className="p1">Fullstack developer</p>
            </div>
          </div>
        </div>

        <div className="imgs1">
          <img src={img2} alt="" className="img1" />
          <div className="h2-1">
            <h2>Урок №2. Создаём контейнер, разбираем стили в CSS</h2>
          </div>
          <div className="account1">
            <img className="img2" src={img6} alt="" />
            <div className="h2-2">
              <h2>Akmal Toraev</h2>
              <p className="p1">Fullstack developer</p>
            </div>
          </div>
        </div>

        <div className="imgs1">
          <img src={img3} alt="" className="img1" />
          <div className="h2-1">
            <h2>
              Урок №3. Самостоятельная работа. Разработка сайта для оплаты
            </h2>
          </div>
          <div className="account1">
            <img className="img2" src={img7} alt="" />
            <div className="h2-2">
              <h2>Sevara Nasirova</h2>
              <p className="p1">Fullstack developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner2">
        <h1>Результаты</h1>
        <br />
        <div className="carts">
          <div className="card">
            <img src={img8} alt="" />
            <br />
            <br />
            <h3>“Настолько грамотная подача, что поймёт даже ребенок”</h3>
            <br />
            <p className="little">Ubaydullo Betruddinov</p>
            <br />
            <button className="card-button">Читать отзыв</button>
          </div>

          <div className="card">
            <img src={img9} alt="" />
            <br />
            <br />
            <h3>“Мне говорили, что это только для мужчин,но это не так”</h3>
            <br />
            <p className="little">Feruza Otabekovna</p>
            <br />
            <button className="card-button">Читать отзыв</button>
          </div>

          <div className="card">
            <img src={img10} alt="" />
            <br />
            <br />
            <h3>“Обучение легко совместить с работой и развиваться дальше”</h3>
            <br />
            <p className="little">Sherzod Abullayev</p>
            <br />
            <button className="card-button">Читать отзыв</button>
          </div>
        </div>
      </div>

      <div className="banner3">
        <br />
        <h1>Остались вопросы? Давайте их решим!</h1>
        <br />
        <div className="box">
          <div className="email">
            <p>Ваше имя</p>
            <input type="text" placeholder="имя" />

            <p>Номер телефона</p>

            <input type="text" placeholder="+998" />
             <br />
            <button className="b-cls">Отправить</button>
          </div>

          <div className="email2"></div>

          <div className="email3">
            <div className="text-h1-p">
             <br />
            <h2>Могут ли, использовать запись урока несколько людей?</h2>
            <p>Нет, запись предназначена для одного человека. Распространение - запрещено.</p>
            <br />
            <h2>Можно платить частями?</h2>
            <p>Можно, но с обязательной отметкой у администратора</p>
            <br />
            <h2>Когда я могу найти работу?</h2>
            <p>Вы можете найти работу даже во время обучения. Главное, что бы она не мешала вашему обучению.</p>
            <br />
             <h2>Что если я не сдал экзамен?</h2>
             <p>Ваш учитель назовет дату пересдачи. Если и на этом экзамене вы не сдадите - обучение останавливается до след. оплаты.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={img11} alt="" />
      </div>
    </div>
  );
}

export default About;

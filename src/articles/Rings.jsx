import {useState} from "react";
import Footer from "../components/Footer.jsx";

const Rings = () => {
  const [score, setScore] = useState(2374)
  const [liked, setLiked] = useState(false);

  const click = () => {
    if (!liked) {
      setScore(score + 1);
      setLiked(true);
    }
  };

  const fillColor = liked ? '#FF3F3F' : 'none';

  return (
    <>
      <div className={'oneArticle'}>
        <div className="container">
            <div>
                <ul className="logo__list stat"><li className="logo__item"><a href="/" className="logo__link"><h1 className="header__title mb">News Beat</h1></a></li><li className="logo__item"></li></ul>
            </div>
          <div className="oneArticle__img-container">
            <img className={'oneArticle__img'} src="/images/family.jpg" alt=""/>
          </div>
          <div className="oneArticle__container">
            <div className="oneArticle__state-container">
              <div className="oneArticle__category">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 44 44" fill="none">
                  <path d="M20.1667 38.5H38.5" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9549 8.84358C28.4451 6.64367 24.6108 6.87392 22.389 9.35913C22.389 9.35913 11.3462 21.7101 7.517 25.9972C3.68271 30.2819 6.49334 36.201 6.49334 36.201C6.49334 36.201 12.8223 38.1856 16.5985 33.961C20.3771 29.7363 31.4756 17.3253 31.4756 17.3253C33.6974 14.8401 33.4624 11.0435 30.9549 8.84358Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.9941 13.3693L27.3634 20.6783" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="oneArticle__category-name">
                  TopNews
                </p>
              </div>
              <div className="oneArticle__score-category">
                <button onClick={click} className="oneArticle__score-btn">
                  <svg className="like-svg" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 44 44" fill={fillColor}>
                    <path d="M20.3808 6.7152C21.0701 5.41736 22.9299 5.41736 23.6192 6.7152L27.2052 13.4671C27.4701 13.966 27.9505 14.3149 28.5069 14.4128L36.0364 15.7369C37.4838 15.9914 38.0584 17.76 37.037 18.8166L31.7238 24.3137C31.3311 24.7198 31.1478 25.2844 31.2266 25.8438L32.2942 33.414C32.4993 34.8691 30.9947 35.9621 29.6743 35.3173L22.8045 31.9629C22.2968 31.7148 21.7032 31.7148 21.1955 31.9629L14.3257 35.3173C13.0052 35.9621 11.5007 34.8691 11.7059 33.414L12.7734 25.8438C12.8523 25.2844 12.6688 24.7198 12.2762 24.3137L6.96295 18.8166C5.94163 17.76 6.51631 15.9914 7.96364 15.7369L15.4932 14.4128C16.0496 14.3149 16.5298 13.966 16.7948 13.4671L20.3808 6.7152Z" stroke="#1B1B1B" stroke-width="1.5"/>
                  </svg>
                </button>
                <p className="oneArticle__category-score">
                  {score}
                </p>
              </div>
            </div>
            <div className="oneArticle__text-container">
              <h1 className="oneArticle__title">
                  Ученые рассказали, чем опасны обручальные кольца для мужчин
              </h1>
              <p className="oneArticle__text">
                  Обручальные кольца, как и любые другие золотые кольца и украшения в целом, чрезвычайно опасны для мужского здоровья — говорят ученые, которые подвели итоги соответствующего исследования. <br/>
                <br/>
                  Внезапно оказалось, что представители сильного пола, которые постоянно носят на теле золотые украшения, тем самым в значительной степени вредят своему здоровью. Золото, в частности, провоцирует проблемы с потенцией.<br/>
                <br/>
                  "Считается, что золото не окисляется, но на самом деле это не так. Оксиды золота попадают в кровь через кожу и оседают в разных частях организма. В женском организме они не представляют собой какую-то особенную угрозу, а вот в мужском продукты окисления золота могут нарушать работу половых желез",<br/>
                <br/>
                  Нарушения потенции, преждевременная эякуляция, а также в целом сниженный половой тонус — такими последствиями может обернуться ношение даже обыкновенного золотого обручального кольца.<br/>
                <br/>
                  "Производители драгоценностей могут назвать наше исследование чушью, но не верьте им, они всего лишь защищают свой бизнес. Золото очень опасно для здоровья мужчин, помните об этом", — заключают исследователи.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Rings;
import {useState} from "react";
import Footer from "../components/Footer.jsx";

const AppleTree = () => {
  const [score, setScore] = useState(6831)
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
            <img className={'oneArticle__img'} src="/images/aplleTree.jpg" alt=""/>
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
                Чем нужно подкармливать яблоню в конце весны и начале лета: дерево ответит шикарным урожаем
              </h1>
              <p className="oneArticle__text">
                Начался дачный сезон, пришла пора не только сажать растения, но и ухаживать за садом и огородом, в том числе вносить необходимые удобрения. <br/>
                <br/>
                В конце весны - начале лета яблоня начинает цвести и как никогда нуждается в хорошей подкормке.<br/>
                <br/>
                Среди эффективных можно выделить следующие.<br/>
                <br/>
                1. Зольный раствор, можно развести стакан вещества в 10 литрах воды. Желательно вносить по 2 ведра на дерево, заливать раствор нужно в специальные канавки возле яблонь. Некоторые дачники добавляют потом стакан девятипроцентного уксуса, но его польза дискуссионный вопрос, сообщает «Общественная служба новостей».<br/>
                <br/>
                2. Монокалийфосфат. 15-20 г. растворяют в ведре воды, на одно дерево приходится 20 литров раствора.<br/>
                <br/>
                3. Комплекс минеральных удобрений. В 100 л. воды добавляют 400 г. сульфата калия , 500 г. суперфосфата, 250 г. карбамида, а также при необходимости куриный помет (2,5 кг) или коровяк (до 5 кг). Раствор настаивают в течение недели. На одну яблоню нужно четыре ведра такого удобрения.<br/>
                <br/>
                Добавим, что каждый год количество необходимого дереву удобрения увеличивается на 30% до того, как яблоне станет 10 лет, после чего подкормку вносят в одном количестве.<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AppleTree;
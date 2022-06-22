import React from "react";
import "./Cards.css";
import CardItem from "../../components/CardItem/CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://klike.net/uploads/posts/2020-03/1583918457_30.jpg"
              text="Beautiful mountains in 'Ala Archa'"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="https://sputnik.kg/img/102705/40/1027054043_4:0:3990:2242_1920x0_80_0_0_949eb982b4737c12cd15e3fccd9ef575.jpg"
              text="Issyk Kul is a great place for family and friends to relax"
              label="The Pearl of Kyrgyzstan"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://krot.info/uploads/posts/2021-11/1637027546_1-krot-info-p-gori-kirgizii-gori-krasivo-foto-1.jpg"
              text="The entire territory of the republic lies above 500 m above sea level; more than half of it is located at altitudes of 1000 to 3000 m and about a third - at altitudes of 3000 to 4000 m. Mountain ranges occupy about a quarter of the territory and extend in parallel chains mainly in the latitudinal direction. In the east, the main ranges of the Tien Shan converge in the Meridional Range, creating a powerful mountain unit."
              label="Great Mountains"
              path="/products"
            />
            <CardItem
              src="https://travelbar.kg/template/images/listings/725/1.jpg"
              text=" 'Karakol' ski base is located in Kyrgyzstan, 7 km from the town of Karakol (Issyk-Kul region).
              In Soviet times it was used for training of the national Olympic team. In 2004 the base was completely modernized. Today 'Karakol' is an ideal place not only for training athletes but also for outdoor activities."
              label="Karakol ski resort"
              path="/products"
            />
            <CardItem
              src="https://funart.pro/uploads/posts/2021-04/1617238065_36-p-oboi-kirgiziya-issik-kul-39.jpg"
              text="Issyk-Kul is an undrained lake in Kyrgyzstan. It is one of the 30 largest lakes in the world and seventh in the list of the deepest lakes. It is located in the northeastern part of the country between the ranges of the Northern Tien Shan: Kyungy Ala-Too and Terskey Ala-Too at an altitude of 1608 meters above sea level."
              label="Lake"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://ru.unesco.org/silkroad/sites/default/files/styles/silkroad_colorbox/public/photogallery/kyrgyzstan_salbuurun_kyrgyz_traditional_game_world_nomad_games_0.jpg?itok=6rR5pDVP"
              text="Kyrgyzstan is also rich in its animals and unique culture"
              label="Nature"
              path="/products"
            />
            <CardItem
              src="https://travelmy.by/files/images/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9/cocina-original-de-la-india-donostia-san-sebastian.jpg"
              text="There is a rich assortment of food"
              label="Food"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

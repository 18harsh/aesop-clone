import './App.css';
import HeaderTop from './components/HeaderTop';
import Header from './components/Header';
import BrandHome from './components/BrandHome';
import Products from './components/Products';
import Store from './components/Store';
import Footer from './components/Footer';
import DailyRituals from './components/DailyRituals';
import {prodList1,prodList2} from './prodList1';



function App() {
  // console.log(prodList1)
  return (
    <div className="app">
      <HeaderTop />
      <Header />
      <BrandHome />
      <Products prodLists={ prodList1.prod}/>
      <DailyRituals
        name="Daily rituals"
        image="https://www.aesop.com/u1nb1km7t5q7/cDCCbdBmZlxG4ZMPSpm1l/cd25c8694c04f3177ea1d04835ba60f3/Aesop-Generic-Images-Skin-Care-Workshop-1-Mid-Desktop-1690x950px.jpg"
        title="How to cleanse the skin"
        body="Both delicate and resilient, skin requires gentle, routine cleansing. To better understand cleansing and its foundational role in a healthy skin care routine, we invite you to read on."
        button="Explore Cleansing"
      />
      <Products prodLists={prodList2.prod} />
      <DailyRituals
        name="Beyond the bathroom"
        image="https://www.aesop.com/u1nb1km7t5q7/6OuJPjHHSYuNooOKIF4ALv/75d63e87c7106aeb481fade2f5bcf65c/Aesop_Sustainability_Web_Primary_Inset_Tablet_1400x788px.jpg"
        title="Our commitment to sustainability"
        body="As a company founded on steadfast ethics, sustainability has always been at Aesop’s heart. We aim to continuously improve our practices with honesty, sincerity and transparency, and seek to be a progressive presence in the communities in which we operate. "
        button="Learn more about our approach"
      />
      <Store
        title="Store Locator"
        images={["https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg",
        "https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg",
        "https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"
        ]}
        body="Our consultants are available to host you in-store and provide tailored guidance on gift purchases. "
        button="Find a nearby store"
      />

      <div className="quote">
        <p className="quote1">
          ‘It is by acts and not by ideas that people live.’
        </p>
        <p className="quote2">
          Anatole France
        </p>

      </div>
      <Footer/>
    </div>
  );
}

export default App;

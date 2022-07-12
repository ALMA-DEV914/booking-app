import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://lh3.googleusercontent.com/proxy/Ml_PibDCgp3Nsd3FQ8_Zvao-IJOlP8riPJTvlrvJi0ODWzJIj4EKkiPbgkYMHv5XdkIe_fiw3S8MMPmEvIDdrXt3iePkQ2kXijVlQA17aShaEIBUXJM3--azSdP53u2oNqiZzqmnmgN3YrCy7mwTVQjCY69zXHM=w592-h404-n-k-rw-no-v1",
    },
    {
      src: "https://lh5.googleusercontent.com/proxy/j1_5kG1i68TJqiGgTUL_rFNx97_SUX-WlvPab1SrsQXRkwBNbZ0Ab3fDLTB1dEflwCuwpKL1MmqjscGA2IHLMYFVu9oNB717FHc5svQYWDUpqX63sNIV0S0rbKOT0bKYi2CGQicPACLRNiyE9tzTF7jweuBBaa8=w253-h168-k-no",
    },
    {
      src: "https://lh4.googleusercontent.com/proxy/7GZc4Kz1OT_UZ2_F5ta2_xMun3Op9SLbvRH_k4hwcRv5T64g0lRqifKeHxy18qyTB5fEst5o3v_dcXEKzh7gaW6hwEGxosON0PSXDaaX820HkyhLHBUgmFFb76dGbf-Ib79mCgQto5k_YjnCPc8bpV-1nW8vXg=w253-h164-k-no",
    },
    {
      src: "https://lh3.googleusercontent.com/proxy/cUkblMEf-MWN12jv7SuE0_twjYZre5F3ryRnqy-aTlOAZ_xNZYNuBj1b_Ou8XwxyNuM5cGguc9cfbr1T39yWnb2_ombIB4rz3s0mmJyFGWJn1DMSrXyyKl6eve9B98iqacFJi2qHLR51F-OgFgL1I-LN5Btr4TM=w253-h192-k-no",
    },
    {
      src: "https://lh5.googleusercontent.com/p/AF1QipN7nWJTu98SgejCYrJ20UJOyA7ZEo2oPTx9sFHf=w253-h189-k-no",
    },
    {
      src: "https://lh5.googleusercontent.com/p/AF1QipP9BaPlw6jGOvgg5vFB-ciT5FHFxAw1mUC4IB38=w253-h189-k-no",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Resorts and Hotels</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Punta Engaño Rd, Lapu-Lapu City, Cebu, 6015 Cebu, Philippines</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $258 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

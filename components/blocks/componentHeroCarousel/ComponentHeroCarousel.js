import Slider from "react-slick";
import classes from "./ComponentHeroCarousel.module.scss";
import Image from "next/image";
import ComponentCarouselImage from "../../molecules/componentCarouselImage/ComponentCarouselImage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ComponentHeroCarousel({ contentModule }) {
  const { logo, description, carouselImages } = contentModule;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <section className={classes.oHeroCarousel}>
      <div className={classes.oContent}>
        <figure className={classes.mLogo}>
          <Image
            className={`${classes.aImage} a-responsive-image`}
            src={logo.fields.file.url}
            alt={`title`}
            width={logo.fields.file.details.image.width}
            height={logo.fields.file.details.image.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        </figure>

        <div className={`${classes.aSubText} fnt64`}>
          {documentToReactComponents(description)}
        </div>
      </div>
      <div className={`${classes.oCarouselBlock} oCarouselBlock`}>
        <Slider {...settings}>
          {carouselImages.map((item) => (
            <ComponentCarouselImage item={item} key={item.sys.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ComponentHeroCarousel;

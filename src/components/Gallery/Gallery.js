import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import atti1 from "./webp/atti-1.webp";
import atti2 from "./webp/atti-2.webp";
import atti3 from "./webp/atti-3.webp";
import atti4 from "./webp/atti-4.webp";
import atti5 from "./webp/atti-5.webp";
import atti6 from "./webp/atti-6.webp";
import atti7 from "./webp/atti-7.webp";
import atti8 from "./webp/atti-8.webp";
import atti9 from "./webp/atti-9.webp";
import atti10 from "./webp/atti-10.webp";
import atti11 from "./webp/atti-11.webp";
import atti12 from "./webp/atti-12.webp";
import atti13 from "./webp/atti-13.webp";
import atti14 from "./webp/atti-14.webp";
import atti15 from "./webp/atti-15.webp";
import atti16 from "./webp/atti-16.webp";
import atti17 from "./webp/atti-17.webp";
import atti18 from "./webp/atti-18.webp";
import atti19 from "./webp/atti-19.webp";
import atti20 from "./webp/atti-20.webp";
import atti21 from "./webp/atti-21.webp";
import atti22 from "./webp/atti-22.webp";
import atti23 from "./webp/atti-23.webp";
import atti24 from "./webp/atti-24.webp";
import atti26 from "./webp/atti-26.webp";
import atti27 from "./webp/atti-27.webp";
import atti28 from "./webp/atti-28.webp";
import atti29 from "./webp/atti-29.webp";
import atti30 from "./webp/atti-30.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = [
  {
    id: "1",
    imageName: atti1,
    tag: "Outlet",
  },

  {
    id: "2",
    imageName: atti2,
    tag: "Outlet",
  },

  {
    id: "3",
    imageName: atti3,
    tag: "Food",
  },

  {
    id: "4",
    imageName: atti4,
    tag: "Food",
  },
  {
    id: "5",
    imageName: atti5,
    tag: "Food",
  },

  {
    id: "6",
    imageName: atti6,
    tag: "Food",
  },

  {
    id: "7",
    imageName: atti7,
    tag: "Food",
  },

  {
    id: "8",
    imageName: atti8,
    tag: "Food",
  },
  {
    id: "9",
    imageName: atti9,
    tag: "Food",
  },
  {
    id: "10",
    imageName: atti10,
    tag: "Food",
  },
  {
    id: "11",
    imageName: atti11,
    tag: "Food",
  },
  {
    id: "12",
    imageName: atti12,
    tag: "Food",
  },

  {
    id: "13",
    imageName: atti13,
    tag: "Food",
  },
  {
    id: "14",
    imageName: atti14,
    tag: "Outlet",
  },

  {
    id: "15",
    imageName: atti15,
    tag: "Outlet",
  },
  {
    id: "16",
    imageName: atti16,
    tag: "Food",
  },
  {
    id: "17",
    imageName: atti17,
    tag: "Food",
  },
  {
    id: "18",
    imageName: atti18,
    tag: "Food",
  },
  {
    id: "19",
    imageName: atti19,
    tag: "Food",
  },
  {
    id: "20",
    imageName: atti20,
    tag: "Food",
  },
  {
    id: "21",
    imageName: atti21,
    tag: "Food",
  },
  {
    id: "22",
    imageName: atti22,
    tag: "Food",
  },
  {
    id: "23",
    imageName: atti23,
    tag: "Food",
  },
  {
    id: "24",
    imageName: atti24,
    tag: "Food",
  },
  {
    id: "26",
    imageName: atti26,
    tag: "Food",
  },
  {
    id: "27",
    imageName: atti27,
    tag: "Food",
  },
  {
    id: "28",
    imageName: atti28,
    tag: "Food",
  },
  {
    id: "29",
    imageName: atti29,
    tag: "Food",
  },
  {
    id: "30",
    imageName: atti30,
    tag: "Food",
  },
];

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <SimpleReactLightbox>
      <div className="gallery">
        <div className="tags">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="Outlet"
            tagActive={tag === "Outlet" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="Food"
            tagActive={tag === "Food" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="Videos"
            tagActive={tag === "Videos" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <SRLWrapper>
          <div className="container-2">
            {filteredImages.map((image) => {
              return (
                <div key={image.id} className="image-card">
                  {image.tag === "Videos" ? (
                    <iframe
                      width="420"
                      height="250"
                      src={image.imageName}
                      title="Youtube video player"
                    />
                  ) : (
                    <a href={image.imageName}>
                      <LazyLoadImage
                        effect="blur"
                        className="image"
                        src={`${image.imageName}`}
                        alt=""
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;

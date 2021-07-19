import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = [
  {
    id: "1",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-1.webp",
    tag: "Outlet",
  },

  {
    id: "2",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-2.webp",
    tag: "Outlet",
  },

  {
    id: "3",
    imageName:
      "    https://attisquare.s3.amazonaws.com/atti-images/atti-3.webp",
    tag: "Food",
  },

  {
    id: "4",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-4.webp",
    tag: "Food",
  },

  {
    id: "5",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-13.webp",
    tag: "Food",
  },
  {
    id: "6",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-14.webp",
    tag: "Outlet",
  },
  {
    id: "7",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-15.webp",
    tag: "Outlet",
  },
  {
    id: "8",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-16.webp",
    tag: "Food",
  },
  {
    id: "9",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-17.webp",
    tag: "Food",
  },
  {
    id: "10",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-20.webp",
    tag: "Food",
  },
  {
    id: "11",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-21.webp",
    tag: "Food",
  },
  {
    id: "12",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-22.webp",
    tag: "Food",
  },
  {
    id: "13",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-23.webp",
    tag: "Food",
  },
  {
    id: "14",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-24.webp",
    tag: "Food",
  },

  {
    id: "15",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-27.webp",
    tag: "Food",
  },
  {
    id: "16",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-28.webp",
    tag: "Food",
  },
  {
    id: "17",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-29.webp",
    tag: "Food",
  },
  {
    id: "18",
    imageName: "https://attisquare.s3.amazonaws.com/atti-images/atti-30.webp",
    tag: "Food",
  },
  {
    id: "19",
    imageName: "https://www.youtube.com/embed/0VSdf2fECOI",
    tag: "Videos",
  },
  {
    id: "20",
    imageName: "https://www.youtube.com/embed/41RHck26nnY",
    tag: "Videos",
  },
  {
    id: "21",
    imageName: "https://www.youtube.com/embed/u2GjqaBnarw",
    tag: "Videos",
  },
  {
    id: "22",
    imageName: "https://www.youtube.com/embed/1DesRoAmwe0",
    tag: "Videos",
  },
  {
    id: "23",
    imageName: "https://www.youtube.com/embed/Ythx7fKXnd0",
    tag: "Videos",
  },
  {
    id: "24",
    imageName: "https://www.youtube.com/embed/_Q4fgUUS9DA",
    tag: "Videos",
  },
];

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images.filter((image) => image.tag !== "Videos"))
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

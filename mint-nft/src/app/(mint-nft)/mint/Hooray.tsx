"use client";
import bg from "@/public/assets/hooray/bg.png";
import { MintData } from "./MIntCarousel";
import sothballs from "@/public/assets/home/panda_sloth_left2.png";
import unknownSothballs from "@/public/assets/unknow_slothball.png";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
// import CursorImg from "@/public/assets/hooray/cursor.ico";
import { useCommonPageBannerContext } from "@/src/provider/CommonPageBannerProvider";
export const Hooray: React.FC<{
  skipHandler: () => void;
  mintedData: Array<MintData>;
}> = ({ skipHandler, mintedData }) => {
  const { width, height } = useWindowSize();
  const { setNoBanner } = useCommonPageBannerContext();
  setNoBanner && setNoBanner(true);
  console.log("mintedData", mintedData);
  // const mokeMintList: MintData[] = [
  //   { mintID: "666", mintImg: sothballs.src },
  //   { mintID: "667", mintImg: sothballs.src },
  //   { mintID: '0', mintImg: sothballs.src },
  // ];
  const hasNoneNft = mintedData.length <= 0;
  const continueHandler = () => {
    setNoBanner && setNoBanner(false);
    skipHandler();
  };
  return (
    <div
      className="absolute top-0 flex h-full w-full flex-col items-center justify-center overflow-hidden pt-20"
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        backgroundColor: "#494071",
      }}
    >
      <Confetti
        width={width}
        height={height}
        gravity={0.1}
        numberOfPieces={220}
      />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center text-5xl font-bold text-white">
        Hooray!
      </div>

      <div className="carousel carousel-center rounded-box pb-5">
        {/* <div className="carousel-item">
          <div className="h-[108px] w-[100px]" />
        </div> */}
        {hasNoneNft ? (
          <div className="carousel-item flex flex-col">
            <img
              className="mx-auto"
              src={unknownSothballs.src}
              width={205}
              height={219}
              alt="unknow_slothball"
            />
            <div className="flex h-6 w-full justify-center">
              <span className="text-base font-medium" />
            </div>
          </div>
        ) : (
          mintedData.map((mintedDataItem, i) => {
            return (
              <div key={i} className="carousel-item flex flex-col">
                <img
                  className="mx-auto"
                  src={mintedDataItem.mintImg}
                  width={205}
                  height={219}
                  alt="slothball"
                />
                <div className="flex h-6 w-full justify-center">
                  <span className="text-lg font-bold   text-white">
                    Slothball #{mintedDataItem.mintID}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* <img
        src={centerImage.src}
        className="absolute left-1/2 top-1/2 h-auto w-auto -translate-x-1/2 -translate-y-1/2 transform"
        alt=""
      /> */}

      <button
        onClick={continueHandler}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 transform text-center  text-2xl font-bold text-[#62C2C4]"
        // style={{cursor:
        //   `url(${CursorImg.src}) 2 2, pointer`}}
      >
        CONTINUE
      </button>
    </div>
  );
};

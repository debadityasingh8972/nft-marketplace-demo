import React from "react";

//INTERNAL IMPORT
import { NFTDescription, NFTDetailsImg, NFTTabs } from "./NFTDetailsIndex";
import Style from "./NFTDetailsPage.module.css";

// const NFTDetailsPage = ({ nft }) => {
const NFTDetailsPage = () => {
    return (
        <div className={Style.NFTDetailsPage}>
            <div className={Style.NFTDetailsPage_box}>
                {/* <NFTDetailsImg nft={nft} />
                <NFTDescription nft={nft} /> */}
                <NFTDetailsImg />
                <NFTDescription />
            </div>
        </div>
    );
};

export default NFTDetailsPage;
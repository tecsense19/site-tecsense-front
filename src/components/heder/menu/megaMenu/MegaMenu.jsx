import React, { useState } from 'react'

//===Components===//
import SubMenuItems from '../SubMenuItems'


//====Icons====//
import AndroidMenuIcon from "../../../../image/menu-icon1.png"
import AndroidMegaIcon from "../../../../image/mega-icon1.png"
import IOSMenuIcon from "../../../../image/menu-icon2.png"
import IOSMegaIcon from "../../../../image/mega-icon2.png"
import FlutterMenuIcon from "../../../../image/menu-icon3.png"
import FlutterMegaIcon from "../../../../image/mega-icon3.png"
import ReactNativeMenuIcon from "../../../../image/menu-icon4.png"
import ReactNativeMegaIcon from "../../../../image/mega-icon4.png"
import CMSWebsiteMenuIcon from "../../../../image/menu-icon9.png"
import CMSWebsiteMegaIcon from "../../../../image/mega-icon9.png"
import CustomMenuIcon from "../../../../image/menu-icon10.png"
import CustomMegaIcon from "../../../../image/mega-icon10.png"
import SEOMenuIcon from "../../../../image/menu-icon5.png"
import SEOMegaIcon from "../../../../image/mega-icon5.png"
import SocialMediaMarketingMenuIcon from "../../../../image/menu-icon6.png"
import SocialMediaMarketingMegaIcon from "../../../../image/mega-icon6.png"
import PPCManagementMenuIcon from "../../../../image/menu-icon7.png"
import PPCManagementMegaIcon from "../../../../image/mega-icon7.png"
import ContentMarketingMenuIcon from "../../../../image/menu-icon8.png"
import ContentMarketingMegaIcon from "../../../../image/mega-icon8.png"
import UIUXMenuIcon from "../../../../image/menu-icon11.png"
import UIUXMegaIcon from "../../../../image/mega-icon11.png"
import GraphicMenuIcon from "../../../../image/menu-icon12.png"
import GraphicMegaIcon from "../../../../image/mega-icon12.png"

//===Images===//
import SkypeImage from "../../../../image/skype-2.png"
import MailImage from "../../../../image/mail.png"
import Whatsapp from "../../../../image/whatsapp.png"



//===GIFS====//
import AndriodImaG from "../../../../image/Andriod.gif"
import AppleGif from "../../../../image/Gifs/Apple_Gif.gif"
import FlutterGif from "../../../../image/Gifs/Flutter_Gif.gif"
import ReactGif from "../../../../image/Gifs/React_Gif.gif"
import SeoGif from "../../../../image/Gifs/Seo_Gif.gif"
import PPCGif from "../../../../image/Gifs/PPC_Gif.gif"
import ContentGif from "../../../../image/Gifs/Content_marketing_Gif.gif"
import CostomSoftware from "../../../../image/Gifs/Costom_Software_Devlopment_Gif.gif"
import UIUX from "../../../../image/Gifs/UIUX_Gif.gif"
import GraficDesign from "../../../../image/Gifs/Grafic_Design_Gif.gif"
import SocialMediaMArketing from "../../../../image/Gifs/SocialMediaMarketing_Gif.gif"

const MegaMenu = ({ megaMenuActive }) => {

  const [changeIconOnHover, setchangeIconOnHover] = useState(AndriodImaG)

  //=======Functions to change icon on hover==========
  const hoverIconChangeHandler = {
    Deafult: () => setchangeIconOnHover(AndriodImaG),
    Ios: () => setchangeIconOnHover(AppleGif),
    Flutter: () => setchangeIconOnHover(FlutterGif),
    React: () => setchangeIconOnHover(ReactGif),
    Seo: () => setchangeIconOnHover(SeoGif),
    PPC: () => setchangeIconOnHover(PPCGif),
    Content: () => setchangeIconOnHover(ContentGif),
    UIUX: () => setchangeIconOnHover(UIUX),
    CostomSoftware: () => setchangeIconOnHover(CostomSoftware),
    Grafic: () => setchangeIconOnHover(GraficDesign),
    SocialMediaMArketing: () => setchangeIconOnHover(SocialMediaMArketing)
  }




  return (
    <div className={`sub-menu mega-menu mega-menu-column-4 ${megaMenuActive ? 'active' : ''}`}>
      <div className="list-item">
        <h4 className="title">Mobile Development</h4>
        <ul>
          <SubMenuItems title={'Android Application'} imgurl1={AndroidMenuIcon} imgurl2={AndroidMegaIcon} onMouseEnter={hoverIconChangeHandler.Deafult} />
          <SubMenuItems title={'IOS Application'} imgurl1={IOSMenuIcon} imgurl2={IOSMegaIcon} onMouseEnter={hoverIconChangeHandler.Ios} />
          <SubMenuItems title={'Flutter Application'} imgurl1={FlutterMenuIcon} imgurl2={FlutterMegaIcon} onMouseEnter={hoverIconChangeHandler.Flutter} />
          <SubMenuItems title={'React Native Application'} imgurl1={ReactNativeMenuIcon} imgurl2={ReactNativeMegaIcon} onMouseEnter={hoverIconChangeHandler.React} />
        </ul>
        <h4 className="title">Digital Marketing Services</h4>
        <ul>
          <SubMenuItems imgurl1={CMSWebsiteMenuIcon} imgurl2={CMSWebsiteMegaIcon} title={' CMS Website Development'} onMouseEnter={hoverIconChangeHandler.Seo} />
          <SubMenuItems imgurl1={CustomMenuIcon} imgurl2={CustomMegaIcon} title={'Custom software development'} onMouseEnter={hoverIconChangeHandler.CostomSoftware} />

        </ul>
      </div>
      <div className="list-item">
        <h4 className="title">Web Development</h4>
        <ul>
          <SubMenuItems imgurl1={SEOMenuIcon} imgurl2={SEOMegaIcon} title={'SEO Services'} onMouseEnter={hoverIconChangeHandler.Seo} serviceId={1} />
          <SubMenuItems imgurl1={SocialMediaMarketingMenuIcon} imgurl2={SocialMediaMarketingMegaIcon} title={'Social Media Marketing'} onMouseEnter={hoverIconChangeHandler.SocialMediaMArketing} serviceId={2} />
          <SubMenuItems imgurl1={PPCManagementMenuIcon} imgurl2={PPCManagementMegaIcon} title={'PPC Management'} onMouseEnter={hoverIconChangeHandler.PPC} serviceId={3} />
          <SubMenuItems imgurl1={ContentMarketingMenuIcon} imgurl2={ContentMarketingMegaIcon} title={'Content Marketing'} onMouseEnter={hoverIconChangeHandler.Content} serviceId={4} />
        </ul>
        <h4 className="title">Designing</h4>
        <ul>
          <SubMenuItems imgurl1={UIUXMenuIcon} imgurl2={UIUXMegaIcon} title={'UI/UX Design Services'} onMouseEnter={hoverIconChangeHandler.UIUX} />
          <SubMenuItems imgurl1={GraphicMenuIcon} imgurl2={GraphicMegaIcon} title={'Graphic Design'} onMouseEnter={hoverIconChangeHandler.Grafic} />
        </ul>
      </div>
      <div className="list-item software_img">
        <img src={changeIconOnHover} alt="gif" className="img-fluid" />
      </div>
      <div className="list-item contact-list">
        <ul >
          <li>
            <a href="/">
              <span>
                <img src={SkypeImage} alt="img" /> Tec-Sense
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <img src={MailImage} alt="img" /> sales@tec-sense.com
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <img src={Whatsapp} alt="img" /> (+91) 720-301-4145
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MegaMenu
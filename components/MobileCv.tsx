import React from 'react';
import { useState } from 'react';

const Cv = ({ bioText, archive }: { bioText: any; archive: any }) => {
  return (
    <div
      className={
        bioText
          ? 'transition-all duration-200 w-[90%] ml-[10%] mt-[270px] text-justify'
          : 'transition-all duration-200 mt-[125px] w-[95%] ml-[5%] text-justify'
      }
    >
      <div className='cv-born'>
        <p>Born 1998 / Harlingen, Tx.</p>
      </div>
      <div className='cv-text'>
        <h1>EDUCATION</h1>
        <p>
          - 2023 MFA with a Photography concentration, Parsons New School of
          Design, New York, NY, (expected 2023)
        </p>
        <p>
          - 2021 BFA with a Photography and Digital Media concentration,
          Kathrine G. McGovern College of the Arts, University of Houston,
          Houston, TX
        </p>
      </div>

      <div className='cv-text'>
        <h1>EXHIBITIONS</h1>
        <p>- 2022 &apos;Photoville annual festival&apos; Brooklyn, NY</p>
        <p>
          - 2021 ‘UH School of Art Annual Student Exhibition’ Blaffer Art
          Museum, Houston, TX - 2021 ‘Emergence’ Part II, UH Senior Block
          Exhibition, Houston, TX - 2020 ‘Untitled’ For 1100
          Louisiana&apos;s&apos; Video Wall, (pending) Houston, Texas (in
          collaboration with Reggie Tucker, Lisa Bridges, and Dre Negrete)
        </p>
        <p>
          - 2020 ‘Assuming the Pose: Contemporary Takes on Portraiture’, Third
          Space, Fine Arts Building, University of Houston, Houston, Texas
        </p>
        <p>
          - 2019 ‘Disquiet’ Block Review Showing, University of Houston, Fine
          Arts Building, Houston, Texas
        </p>
      </div>

      <div className='cv-text'>
        <h1>PUBLICATIONS</h1>
        <p>
          - 2021 ‘Harlingen AGRI’ Feature, University of Houston’s 2021 Photo
          Digital Media Student Exhibition ‘Emergence’ Part II, Here (2021)
        </p>
        <p>
          - 2021 ‘Onions’ Feature ‘In Parentheses Magazine’, Volume 6, Issue 4,
          Now Available (2021)
        </p>
        <p>
          - 2020 ‘Trenton Teinert,’ Deep Red Press, Month’s Featured Artist Here
          (2020) - 2020 ‘Harlingen’ Self Published Photo Zine, a Reflection of
          My Hometown (2020)
        </p>
      </div>

      <div className='cv-text'>
        <h1>RELATED EXPERIENCE</h1>
        <p>- 2017-20 Freelance, Harlingen/Houston, TX, Creator</p>
        <p>- 2016-18 Fast Signs, Harlingen, TX, Designer</p>
      </div>
      <div className='cv-text'>
        <h1>RESEARCH</h1>
        <p>
          - 2020 Independent Study, Faculty Leadership Professor Delilah
          Montoya; Agriculture study of Harlingen Texas.
        </p>
      </div>
    </div>
  );
};

export default Cv;

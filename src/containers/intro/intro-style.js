import styled from "styled-components";

export const IntroStyle = styled.div`
  height: 100vh;
  background: white;

  .App {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    position: relative;
    top: 0%;
    padding: 105px;

    }

  .logo {
    width: 100px;
    margin-bottom: 30px;

  }
  .title {
    margin-bottom: 30px;
    font-size: 24px;

  }

  .container-buttons  {
     position: absolute;
    margin: 0 auto;
    bottom: 40px;
    display: flex;
    font-size: 12px;
    color: white;
    margin-left: 90px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    background: black;

  }

  .slider-container {
    width: 100%;
    height: 117%;
    position: absolute;
    top: 0;
   
  }
   .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: white;
   
    display: slide;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: black;

  }
  .swiper-button-container {
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  
  }
  .swiper-button-prev{
  
    top: 450%;
    width: 140px;
    left: 10px;
    padding: 10px;
    text-align: auto;
    font-size: 14px;
    color: grey;
    background: white;
    padding-top: black 10px;
    display: slide;
    border-top: 2px solid black;
    text-align: center;
   
   
    
    

  }
  .swiper-button-next{
   
    top: 450%;
    width: 140px;
    left: 160px;
    padding: 10px;
    text-align: auto;
    font-size: 14px;
    color: grey;
    background: white;
    border-top: 2px solid black;
    display: slide;
    text-align: center;
  
  }
  .disabled-swiper-button {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}
  

  .header {
    
    padding: 20px;
    background: white;
    color: black;
    display: flex;
    justify-content: space-between;
    width: 100%;
  

    &.active {
      background: black;
      color: white;
      border: 1px solid white;
      padding: 20px;
      width: 100%;
      height: 100%;
      .mater{
        color: white;
    line-height: 3.0;
    font-size: 18px;
    margin-left: -1480px;
      
     
    }
     .header-menu {
        
        border: 1px solid white ;
        padding: 20px;
        margin-right: 12px;
        height: 9%;
        background: black;
        color: white;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }

  .header-menu {
    border: 1px solid black ;
    padding: 20px;
    margin-right: 12px;
    background: white;
    cursor: pointer;
    font-size: 18px;

  }
  .mater{
    color: black;
    line-height: 3.0;
    font-size: 18px;
    margin-left: -1190px;

  }
  .title {
    margin-bottom: 30px;
    color: black;
    margin-right: 900px;
    padding: 50px;
    margin-top: -10px;

  }
  .title2 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: -160px;

  }
  .title3 {
    font-size: 15px;
    margin-top: 40px;
    vertical-align: center;
    display: inline-block;
    text-align: justify;
    color: grey;
  
  }
  .title4 {
    margin-top: 40px;
    margin-left: -210px;
    color: grey;

  }
  .title5 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: -85px;

  }
  .title6 {
    margin-top: 40px;
    margin-left: -230px;
    color: grey;

  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 10px;
    opacity: 1;
    
  }
  .silla{
    margin-top: -310px;
    margin-left:800px;
    width: 400px;
   
  }
  .swiper-container {
    width: 100%;
    height: 100%;

  }
  .swiper-container {
    overflow: visible;

  }
  $slide: ".swiper-slide";
  .swiper-slide {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1000ms ease-in-out, visibility 1000ms ease-in-out;
    &-active {
      opacity: 1;
      visibility: visible;
  
      @for $i from 1 through 3 {
        & + #{$slide} {
          opacity: 1;
          visibility: visible;
        }
        $slide: "#{$slide} + .swiper-slide";
      }
    }
  }
  .swiper-slide {
    opacity: 0;
    visibility: hidden;
    transition: opacity 500ms ease-in-out, visibility 2000ms ease-in-out;

  }
  .swiper-slide-active {
    opacity: 4;
    visibility: visible;

  }
  .swiper-slide-active + .swiper-slide {
    opacity: 4;
    visibility: visible;

  }
  .swiper-slide-active + .swiper-slide + .swiper-slide {
    opacity: 4;
    visibility: visible;

  }
  .swiper-slide-active + .swiper-slide + .swiper-slide + .swiper-slide {
    opacity: 4;
    visibility: visible;

  }
  .menu {
    
    padding: 20px;
    background: black;
    color: black;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    height: 100%;

    &.active {
      background: black;
      color: white;
      border: 1px solid white;
      padding: 20px;
      cursor:pointer;
      width: 100%;
      height: 100%;
      $slide: ".swiper-slide";
 
     }
  .text-1{
    width: 100%;
    margin-top: 50%;
    margin-left: 10px;
    font-size: 30px;
    color: white;
    text-align: center;

  }
  .menu-button{
    width: 100%;
    height: 20px;
    padding: 20px;
    margin-top: 50%;
    margin-left: 10px;
    font-size: 30px;
    color: white;
    text-align: center;
    background: black;
    decoration: none;
    border: none;

  }
  
  .dropdown-menu {
    position: relative;
    min-width: 160px;
    color: grey;
    display: none;
    flex-direction: column;
    padding: 0px;
    background: black;
    margin-top: 10px;
    
  }
  a{
    float: left;
    clear: both;
    width: 100%;
    height: 60px;
    padding: 10px;
    text-align: center;
    font-size: 13px;
 
  }
  .dropdown-menu a:hover {
   transition: 0.3s;
   color: white;
  
  }
 
  left-menu{
    position: absolute;
    display: block;
    float: left;
    padding: 20px;
    height: 20%;

  }
  .left-menu: hover .dropdown-menu {
    display: block;

  }
  left-menu: hover .menu-button{ 
    background-color: transparent;

  }
  .outer {
    height: 100px;
    width: 100px;
    border: 1px solid #000;

    
  }
  .inner {
    height: 100px;
    width: 100px;
    margin: 45%;
    
  }
  img {
    height: auto;
    width: 600px;
    height: 100%;
    display: none
    
   }
  .inner:hover img {
    display: block;
    
  }
  .imagen {
    top: -50px;
    margin-left: 600px;
    width: 500px;
    height: 500px;
    position: absolute;
    display: none;
    
  }
  .ele {
    animation: 3s fadeIn;
    animation-fill-mode: forwards;
    visibility: hidden;

  }
  
   @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  

 


`;

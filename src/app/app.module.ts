import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoDisplayComponent } from './hero-page/video-display/video-display.component';
import { SliderDisplayComponent } from './hero-page/slider-display/slider-display.component';
import { FullheightDisplayComponent } from './hero-page/fullheight-display/fullheight-display.component';
import { ImageTextoverlayComponent } from './category-grid/image-textoverlay/image-textoverlay.component';
import { ImageTextuderComponent } from './category-grid/image-textuder/image-textuder.component';
import { TextSliderComponent } from './category-grid/text-slider/text-slider.component';
import { ImageTextSliderComponent } from './category-grid/image-text-slider/image-text-slider.component';
import { SwiperDisplayComponent } from './hero-page/swiper-display/swiper-display.component';
import { ImageAmtstarComponent } from './product-grid/image-amtstar/image-amtstar.component';
import { ImgAmtpriceComponent } from './product-grid/img-amtprice/img-amtprice.component';
import { ImgAmtbutonsComponent } from './product-grid/img-amtbutons/img-amtbutons.component';
import { ImgAmtnamestarbtnComponent } from './product-grid/img-amtnamestarbtn/img-amtnamestarbtn.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForYouComponent } from './for-you/for-you.component';
import { VerticalComponent } from './product-details/vertical/vertical.component';
import { HorizontalComponent } from './product-details/horizontal/horizontal.component';
import { FourInoneComponent } from './product-details/four-inone/four-inone.component';
import { SliderComponent } from './product-details/slider/slider.component';
import { Display1Component } from './cart/display1/display1.component';
import { Display2Component } from './cart/display2/display2.component';
import { Display3Component } from './cart/display3/display3.component';
import { Display4Component } from './cart/display4/display4.component';
import { ThreeGridsComponent } from './check-out/three-grids/three-grids.component';
import { DisplayVideoComponent } from './overall-view/display-video/display-video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoDisplayComponent,
    SliderDisplayComponent,
    FullheightDisplayComponent,
    ImageTextoverlayComponent,
    ImageTextuderComponent,
    TextSliderComponent,
    ImageTextSliderComponent,
    SwiperDisplayComponent,
    ImageAmtstarComponent,
    ImgAmtpriceComponent,
    ImgAmtbutonsComponent,
    ImgAmtnamestarbtnComponent,
    ContactUsComponent,
    AboutUsComponent,
    ForYouComponent,
    VerticalComponent,
    HorizontalComponent,
    FourInoneComponent,
    SliderComponent,
    Display1Component,
    Display2Component,
    Display3Component,
    Display4Component,
    ThreeGridsComponent,
    DisplayVideoComponent,
    LandingPageComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

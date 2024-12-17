import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  // { path: '', component: LandingPageComponent }, // Default route
  { path: 'video-display', component: VideoDisplayComponent },
  { path: 'slider-display', component: SliderDisplayComponent },
  { path: 'fullheight-display', component: FullheightDisplayComponent },
  { path: 'image-textoverlay', component: ImageTextoverlayComponent },
  { path: 'image-textuder', component: ImageTextuderComponent },
  { path: 'text-slider', component: TextSliderComponent },
  { path: 'image-text-slider', component: ImageTextSliderComponent },
  { path: 'swiper-display', component: SwiperDisplayComponent },
  { path: 'image-amtstar', component: ImageAmtstarComponent },
  { path: 'img-amtprice', component: ImgAmtpriceComponent },
  { path: 'img-amtbutons', component: ImgAmtbutonsComponent },
  { path: 'img-amtnamestarbtn', component: ImgAmtnamestarbtnComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'for-you', component: ForYouComponent },
  { path: 'product-details/vertical', component: VerticalComponent },
  { path: 'product-details/horizontal', component: HorizontalComponent },
  { path: 'product-details/four-inone', component: FourInoneComponent },
  { path: 'product-details/slider', component: SliderComponent },
  { path: 'cart/display1', component: Display1Component },
  { path: 'cart/display2', component: Display2Component },
  { path: 'cart/display3', component: Display3Component },
  { path: 'cart/display4', component: Display4Component },
  { path: 'check-out/three-grids', component: ThreeGridsComponent },
  { path: 'overall-view/display-video', component: DisplayVideoComponent },
 
  { path: '**', redirectTo: '' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

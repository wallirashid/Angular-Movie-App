import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BannerItemsComponent } from './components/banner-items/banner-items.component';
import { ItemComponent } from './components/item/item.component';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {TabViewModule} from 'primeng/tabview';
import { EmbededVideoComponent } from './components/embeded-video/embeded-video.component';
import {CarouselModule} from 'primeng/carousel';
import { CategoriesComponent } from './components/categories/categories.component';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    BannerItemsComponent,
    ItemComponent,
    MovieDetailComponent,
    EmbededVideoComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    PaginatorModule,
    TabViewModule,
    HttpClientModule,
    CarouselModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

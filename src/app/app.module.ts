import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentManagamentComponent } from './content-management/content-management.component';
import { ContentService } from './content.service';
import { FormsModule } from '@angular/forms';
import { LicenseManagamentComponent } from './license-managament/license-managament.component';
import { VodContentsComponent } from './vod-contents/vod-contents.component';

const routes :Routes=[
  {path:"dealing/content",component:ContentManagamentComponent},
  {path:"dealing/license",component:LicenseManagamentComponent},
  {path:"vodcontent",component:VodContentsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ContentManagamentComponent,
    LicenseManagamentComponent,
    VodContentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

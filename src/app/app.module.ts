import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import{MatIconModule}from'@angular/material/icon'
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigupComponent } from './components/signup/sigup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JoblistPageComponent } from './components/joblist-page/joblist-page.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ApplicationComponent } from './components/application/application.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { ChunkPipe } from './pipes/chunk.pipe';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect'
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SigupComponent,
    JoblistPageComponent,
    CompanyProfileComponent,
    ApplicationComponent,
    DatepickerComponent,
    ChunkPipe,
    PrimengTableComponent,
  ],
  imports: [
    DialogModule,
    ButtonModule,
    SidebarModule,
    StepsModule,
    InputTextModule,
    ContextMenuModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    SocialLoginModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatMomentDateModule,
    TableModule,
    MultiSelectModule
  ],
  providers: [
    DatePipe,
  {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '631365896404-52olctvltaje18j6m0g0ah9ne7ho624l.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

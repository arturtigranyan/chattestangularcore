import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlertComponent } from './_directives/';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


// import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatSelectModule} from '@angular/material/select'; 
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatListModule} from '@angular/material/list';

// import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,    
    LoginComponent, RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent, pathMatch: 'full' },     
    //   { path: 'login', component: LoginComponent },
    // ])

    //  EffectsModule.forFeature([DirectMessagesEffects]),
        // MatListModule,
        // MatIconModule,
        // MatButtonModule,
        // MatToolbarModule,
        // MatMenuModule,
        // MatSelectModule,
        // MatInputModule,
        // MatFormFieldModule,
        // FlexLayoutModule,
        // MatChipsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

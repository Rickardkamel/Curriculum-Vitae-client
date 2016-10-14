// --- AngularImports --- \\
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// --- ProjectImports --- \\
// SourceModules
import { AppComponent } from './app.component';
import { ShellComponent } from './shell.component'

// ComponentModules
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { SkillsModule } from './skills/skills.module';
import { ContactModule } from './contact/contact.module';

// Routing
import { AppRoutingModule } from './routes/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,

    // ComponentModules
    HomeModule,
    HeaderModule,
    AboutModule,
    ResumeModule,
    SkillsModule,
    ContactModule,

    // Routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

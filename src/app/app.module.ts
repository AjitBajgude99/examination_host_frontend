import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HttpClientModule } from '@angular/common/http';
import { TestmgmtComponent } from './trainer/testmgmt/testmgmt.component';
import { QuestionmgmtComponent } from './trainer/questionmgmt/questionmgmt.component';
import { AnswerverificationComponent } from './trainer/answerverification/answerverification.component';
import { AttempttestComponent } from './student/attempttest/attempttest.component';
import { ShowtestsComponent } from './student/showtests/showtests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TrainerComponent,
    TestmgmtComponent,
      QuestionmgmtComponent,
    AnswerverificationComponent,
    AttempttestComponent,
    ShowtestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

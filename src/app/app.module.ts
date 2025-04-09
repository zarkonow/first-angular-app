import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";


@NgModule({
    declarations: [AppComponent], 
    bootstrap: [AppComponent],
    imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppModule {}
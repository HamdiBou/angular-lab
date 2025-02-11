import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB';

  //1. create a bd
  //2. install a backend
  //{json-server} npm install json-server --save-dev(--force)
  //"json-server": "json-server --watch src/assets/db.json --port 3000" in package.json
  //3.MemberComponent => send a geet request
  //4. MemberService => getMembers()
  //5. notify the component
}

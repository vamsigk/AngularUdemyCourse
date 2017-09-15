import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
	
	serverId: number = 10;
	serverStatus: string = 'online';
	serverName = '';
	userName = '';
	isUserNameEmpty: boolean = true;

	onAddServerClick() {
		if(this.serverStatus == 'online') {
			this.serverStatus = 'Offline';
		}else {
			this.serverStatus = 'online';
		}
		
	}

	onTextInput(event: Event) {
		console.log("Event value is : " + (<HTMLInputElement>event.target).value)
		this.serverName = (<HTMLInputElement>event.target).value;
	}

	onTwoWayBindingClick(event: Event) {
		console.log("Username value is : " + (<HTMLInputElement>event.target).value)
		this.userName = (<HTMLInputElement>event.target).value;
		this.checkUserNameEmpty();
	}

	checkUserNameEmpty() {
		if(this.userName == '') {
			this.isUserNameEmpty = true;
		}else {
			this.isUserNameEmpty = false;
		}
	}
}

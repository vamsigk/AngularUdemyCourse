import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {

	serverId = 10;
	serverStatus = '';
	serverName = 'TestServer';
	userName = '';
	isUserNameEmpty = true;
	serverCreated = false;
	servers = [];

	constructor() {
	  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
	  return this.serverStatus === 'online' ? 'green' : 'red';
  }

	onAddServerClick() {
    this.servers.push(this.serverName);
		if(this.serverStatus == 'online') {
			this.serverStatus = 'Offline';
			this.serverCreated = false;
		}else {
			this.serverStatus = 'online';
			this.serverCreated = true;

		}

	}

	onTextInput(event: Event) {
		console.log('Event value is : ' + (<HTMLInputElement>event.target).value);
		this.serverName = (<HTMLInputElement>event.target).value;
	}

	onTwoWayBindingClick(event: Event) {
		console.log('Username value is : ' + (<HTMLInputElement>event.target).value);
		this.userName = (<HTMLInputElement>event.target).value;
		this.checkUserNameEmpty();
	}

	checkUserNameEmpty() {
		if (this.userName == '') {
			this.isUserNameEmpty = true;
		}else {
			this.isUserNameEmpty = false;
		}
	}
}

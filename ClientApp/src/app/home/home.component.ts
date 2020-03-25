﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service'; 
import { HubConnectionBuilder } from '@aspnet/signalr';
  

@Component({ 
    templateUrl: 'home.component.html',
   styleUrls: ['home.component.css']
 })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    chatHistory: any;
    message = '';
    messages: string[] = [];
    selectedUserIdToChat : number[] =  [];
    sendToChat : number;
    toSendUserId : number;
    
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    

    selectUserId(id : number) { 
        this.selectedUserIdToChat.push(id) 
        this.toSendUserId = this.selectedUserIdToChat.pop(); 
    }

   
    ngOnInit() {
        this.loadAllUsers();  

       
        this.userService.getChatHistory(this.currentUser).subscribe(chat => {         
            this.chatHistory = chat;
        })

        const divMessages: HTMLDivElement = document.querySelector("#divMessages");
        const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
        const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
       
        var currentOnlineUser = this.currentUser.username;
        var fromUserId = this.currentUser.id;  
         
       
        const connection = new HubConnectionBuilder()
        .withUrl("/chatHub")
        .build();
        
        connection.on("messageReceived", (fromUserId: number, toUserId: number, username: string,  message: string) => {
           
            let m = document.createElement("div");                   
            m.innerHTML =
            `<div class="message-author">${username}</div><div>${message}</div>`;               
            divMessages.appendChild(m);
            divMessages.scrollTop = divMessages.scrollHeight;
          
        });

        connection.start().catch(err => document.write(err));

        tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                send();
                console.log(this)
            }
        });
        var send = () => {
            
            connection.send("newMessage", currentOnlineUser, fromUserId, this.toSendUserId, tbMessage.value)
            .then(() => tbMessage.value = ""); 
            console.log(this.toSendUserId)
        }      
    }
     
    onSelectionChange(id) {
        console.log(id)
        this.toSendUserId = id
    }
  

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

 
}
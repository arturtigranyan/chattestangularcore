using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatService.Entities;
using ChatService.Models;
using ChatService.Perisitence;
using Microsoft.AspNetCore.SignalR;

namespace ChatService
{
    public class MessageHub : Hub
    {
        private readonly ChatServiceDBContext _context;

        public MessageHub(ChatServiceDBContext context)
        {
            _context = context;
        }

        public async Task NewMessage(string username, int fromUserId, int ToUserId, string message)
        {
             UserEntity user = _context.Users.SingleOrDefault(x => x.UserName == username);           

            _context.UserMessages.Add(new UserMessage {                
                Message = message,
                FromUserId = fromUserId,
                ToMessageId = ToUserId

            });;
            _context.SaveChanges();

            await Clients.All.SendAsync("messageReceived", fromUserId, ToUserId, username, message);
        }
    }
}

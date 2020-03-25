using ChatService.Entities;
using ChatService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatService.Perisitence
{
    public class ChatServiceDBContext : DbContext
    {
        public ChatServiceDBContext()
        {
        }

        public ChatServiceDBContext(DbContextOptions<ChatServiceDBContext> options) : base (options)
        {

        }
        //public DbSet<User> Users { get; set; }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserMessage> UserMessages { get; set; }
        //public DbSet<Comment> Comments { get; set; }
        //public DbSet<Reply> Replies { get; set; }
    }
}

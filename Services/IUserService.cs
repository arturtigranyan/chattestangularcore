using ChatService.Entities;
using ChatService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatService.Services
{
    public interface IUserService
    {
        UserEntity Authenticate(string username, string password);
        IEnumerable<UserEntity> GetAll();
        UserEntity GetById(int id);
        UserEntity Create(UserEntity user, string password);
        void Update(UserEntity user, string password = null);
        void Delete(int id);
        void Update(UserEntity user, object password);
    }
}

 
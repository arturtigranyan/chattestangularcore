using AutoMapper;
using ChatService.Entities;
using ChatService.Models;
using ChatService.Perisitence;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;



namespace ChatService.Controllers
{

    public class AccountController : Controller
    {

        private ChatServiceDBContext _context;
        private readonly IMapper _mapper;
        
        public AccountController(IMapper mapper, ChatServiceDBContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public IEnumerable<UserEntity> GetAll()
        {
            return _context.Users;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            IOrderedQueryable<UserEntity> users = _context.Users.OrderBy(a => a.FirstName);//repostory pattern 
            return Ok(users);
        }

        [HttpGet]
        [Route("GetAllChatUser")]
        public IActionResult GetAllChatUser(int id)
        {
            List<UserMessage> allChatUsers = _context.UserMessages.Where(x => x.ToMessageId == id).ToList();
            return Ok(allChatUsers);
        }

        public void DeleteUser(int id)
        {
            UserEntity user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }
 
    }
}

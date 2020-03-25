using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace ChatService.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
       
        public ICollection<UserMessage> Message { get; set; }

        public User()
        {
            Message = new Collection<UserMessage>();

        }
    }
}

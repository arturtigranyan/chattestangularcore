using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatService.Entities
{
    public class MessageEntity
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public int UserEntityId { get; set; }
    }
}

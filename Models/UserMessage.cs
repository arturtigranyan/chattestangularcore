using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatService.Models
{
    public class UserMessage
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public int ToMessageId { get; set; }
        public int FromUserId { get; set; }
    }
}

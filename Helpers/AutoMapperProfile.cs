using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatService.Models;
using ChatService.Entities;

namespace ChatService.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserEntity>();
            //CreateMap<Comment, CommentEnt>();
            //CreateMap<Reply, Reply>();
        }
    }
}

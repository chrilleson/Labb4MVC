using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Labb4MVC.Models
{
    public class User
    {
        public string Username { get; set; }
        public HighScore Score { get; set; }
        //public Quiz Quiz { get; set; }
    }
}

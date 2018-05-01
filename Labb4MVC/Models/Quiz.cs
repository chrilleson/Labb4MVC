using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Labb4MVC.Models
{
    public class Quiz
    {
        public string Question { get; set; }
        public string Alternativ { get; set; }
        public HighScore Score { get; set; }
    }
}

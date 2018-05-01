using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Labb4MVC.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string CorrectAnswer { get; set; }
        public string Alternativ1 { get; set; }
        public string Alternativ2 { get; set; }
        public string Alternativ3 { get; set; }
        public string Alternativ4 { get; set; }

        public HighScore Score { get; set; }
    }
}

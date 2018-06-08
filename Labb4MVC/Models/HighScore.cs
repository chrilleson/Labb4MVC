using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Labb4MVC.Models
{
    public class HighScore : StandardEntity
    {
        public HighScore()
        { }

        [Required]
        public int Score { get; set; }

        [Required]
        public string User { get; set; }

        [Required]
        public DateTime Date { get; set; }
    }
}

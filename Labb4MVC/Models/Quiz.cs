using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Labb4MVC.Models
{
    public class Quiz : StandardEntity
    {
        public Quiz() { }

        [Required]
        public string Question { get; set; }

        [Required]
        public string CorrectAnswer { get; set; }

        [Required]
        public string Alternativ1 { get; set; }
        [Required]
        public string Alternativ2 { get; set; }
        [Required]
        public string Alternativ3 { get; set; }
        [Required]
        public string Alternativ4 { get; set; }
    }
}

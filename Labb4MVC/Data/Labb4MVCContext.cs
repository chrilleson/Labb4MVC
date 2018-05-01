using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Labb4MVC.Models
{
    public class Labb4MVCContext : DbContext
    {
        public Labb4MVCContext (DbContextOptions<Labb4MVCContext> options)
            : base(options)
        {
        }

        public DbSet<Labb4MVC.Models.Quiz> Quiz { get; set; }
    }
}

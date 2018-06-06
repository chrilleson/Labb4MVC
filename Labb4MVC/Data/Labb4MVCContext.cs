using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Labb4MVC.Models;

namespace Labb4MVC.Data
{
    public class Labb4MVCContext : IdentityDbContext
    {
        public Labb4MVCContext (DbContextOptions<Labb4MVCContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Quiz> Quiz { get; set; }
        public new DbSet<User> Users { get; set; }
        public DbSet<HighScore> HighScores { get; set; }
    }
}

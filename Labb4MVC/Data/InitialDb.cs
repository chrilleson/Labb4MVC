using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Labb4MVC.Models;

namespace Labb4MVC.Data
{
    public class InitialDb
    {
        public static void Initialize(Labb4MVCContext context)
        {
            if (context.Quiz.Any())
            {
                return;
            }

            var quiz = new Quiz[]
            {
                new Quiz{ Question="Vem har skrivit boken 'The silmarillion'?", CorrectAnswer="J.R.R Tolkien", Alternativ1="C.S Lewis", Alternativ2="J.K Rowling", Alternativ3="George R.R. Martin", Alternativ4="J.R.R Tolkien",
                 Id = Guid.NewGuid()},
                new Quiz{ Question="Vilket havs djur har tre hjärtan?", CorrectAnswer="Bläckfisk", Alternativ1="Bläckfisk", Alternativ2="Blåval", Alternativ3="Torsk", Alternativ4="Sjöstjärna", Id = Guid.NewGuid()},
                new Quiz{ Question="Hur många ben har en vuxen människa?", CorrectAnswer="206", Alternativ1="2", Alternativ2="330", Alternativ3="206", Alternativ4="210", Id = Guid.NewGuid()},
                new Quiz{Question="På vilken temperaturskala kokar vatten vid 212 grader?", CorrectAnswer="Fahrenheit", Alternativ1="Kelvin", Alternativ2="Rankine", Alternativ3="Fahrenheit", Alternativ4="Celsius",
                Id=Guid.NewGuid()},
                new Quiz{Question="Vad är den kände konstnären och skulptören Michelangelos fulla namn?", CorrectAnswer="Michelangelo di Lodovico Buonarroti Simoni", Alternativ1="Michelangelo Merisi da Caravaggio",
                 Alternativ2="Michelangelo di Lodovico Buonarroti Simoni", Alternativ3="Michelangelo di Boccaccio Boccaccino", Alternativ4="Michelangelo di Felice della Rovere", Id= Guid.NewGuid()}
            };

            foreach(Quiz q in quiz)
            {
                context.Quiz.Add(q);
            }

            context.SaveChanges();

            var scores = new HighScore[] {
                new HighScore {Id = Guid.NewGuid(), User = "AAA", DateTime = DateTime.Now, Score = 4},
                new HighScore{Id = Guid.NewGuid(), User = "BBB", DateTime= DateTime.Now, Score= 5},
                new HighScore{Id = Guid.NewGuid(), User = "CCC", DateTime= DateTime.Now, Score = 0},
                new HighScore {Id = Guid.NewGuid(), User = "DDD", DateTime = DateTime.Now, Score = 1},
            };

            foreach(HighScore s in scores)
            {
                context.HighScores.Add(s);
            }
            context.SaveChanges();
        }
    }
}

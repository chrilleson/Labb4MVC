using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Labb4MVC.Models;
using Labb4MVC.Data;

namespace Labb4MVC.Controllers
{
    [Produces("application/json")]
    [Route("api/Score")]
    public class ScoreController : Controller
    {
        private readonly Labb4MVCContext _context;

        public ScoreController(Labb4MVCContext context)
        {
            _context = context;
        }

        //Get: api/Score
        [HttpGet]
        public IEnumerable<HighScore> GetScores()
        {
            return _context.HighScores;
        }

        // Get: api/Score/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetScore([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var score = await _context.HighScores.SingleOrDefaultAsync(m => m.Id == id);

            if (score == null)
            {
                return NotFound();
            }

            return Ok(score);
        }

        //Post new score
        [HttpPost]
        [Route("CreateScore")]
        public IActionResult CreateScore(string user, int result)
        {
            if (user == null)
            {
                return BadRequest();
            }

            var score = new HighScore
            {
                Id = Guid.NewGuid(),
                Date = DateTime.Now,
                Score = result,
                User = user
            };

            if (score == null)
            {
                return NotFound();
            }

            //Check if the user already have a score
            var UserGotScore = _context.HighScores.SingleOrDefault(u => u.User == score.User);

            if(UserGotScore != null)
            {
                if (UserGotScore.Score < score.Score)
                {
                    _context.Remove(UserGotScore);
                    _context.HighScores.Add(score);
                    _context.SaveChanges();
                    return Ok(score);
                }
                else
                {
                    return Ok(UserGotScore);
                }
            }

            _context.HighScores.Add(score);
            _context.SaveChanges();

            return Ok(score);
        }

        private bool ScoreExists(Guid id)
        {
            return _context.HighScores.Any(s => s.Id == id);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FudbSezone.Domain.Models;

namespace FudbSezone.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FootballMatchController : ControllerBase
    {
        private readonly StatistikaFudbalskihSezonaContext _context;

        public FootballMatchController(StatistikaFudbalskihSezonaContext context)
        {
            _context = context;
        }

        // GET: api/FootballMatch
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FootballMatch>>> GetFootballMatch()
        {
            return await _context.FootballMatch.ToListAsync();
        }

        // GET: api/FootballMatch/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FootballMatch>> GetFootballMatch(int id)
        {
            var footballMatch = await _context.FootballMatch.FindAsync(id);

            if (footballMatch == null)
            {
                return NotFound();
            }

            return footballMatch;
        }

        // PUT: api/FootballMatch/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFootballMatch(int id, FootballMatch footballMatch)
        {
            if (id != footballMatch.IdfootballMatch)
            {
                return BadRequest();
            }

            _context.Entry(footballMatch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FootballMatchExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FootballMatch
        [HttpPost]
        public async Task<ActionResult<FootballMatch>> PostFootballMatch(FootballMatch footballMatch)
        {
            _context.FootballMatch.Add(footballMatch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFootballMatch", new { id = footballMatch.IdfootballMatch }, footballMatch);
        }

        // DELETE: api/FootballMatch/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FootballMatch>> DeleteFootballMatch(int id)
        {
            var footballMatch = await _context.FootballMatch.FindAsync(id);
            if (footballMatch == null)
            {
                return NotFound();
            }

            _context.FootballMatch.Remove(footballMatch);
            await _context.SaveChangesAsync();

            return footballMatch;
        }

        private bool FootballMatchExists(int id)
        {
            return _context.FootballMatch.Any(e => e.IdfootballMatch == id);
        }
    }
}

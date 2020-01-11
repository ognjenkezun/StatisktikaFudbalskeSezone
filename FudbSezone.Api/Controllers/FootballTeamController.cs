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
    public class FootballTeamController : ControllerBase
    {
        private readonly StatistikaFudbalskihSezonaContext _context;

        public FootballTeamController(StatistikaFudbalskihSezonaContext context)
        {
            _context = context;
        }

        // GET: api/FootballTeam
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FootballTeam>>> GetFootballTeam()
        {
            return await _context.FootballTeam.ToListAsync();
        }

        // GET: api/FootballTeam/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FootballTeam>> GetFootballTeam(int id)
        {
            var footballTeam = await _context.FootballTeam.FindAsync(id);

            if (footballTeam == null)
            {
                return NotFound();
            }

            return footballTeam;
        }

        // PUT: api/FootballTeam/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFootballTeam(int id, FootballTeam footballTeam)
        {
            if (id != footballTeam.IdfootballTeam)
            {
                return BadRequest();
            }

            _context.Entry(footballTeam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FootballTeamExists(id))
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

        // POST: api/FootballTeam
        [HttpPost]
        public async Task<ActionResult<FootballTeam>> PostFootballTeam(FootballTeam footballTeam)
        {
            _context.FootballTeam.Add(footballTeam);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFootballTeam", new { id = footballTeam.IdfootballTeam }, footballTeam);
        }

        // DELETE: api/FootballTeam/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FootballTeam>> DeleteFootballTeam(int id)
        {
            var footballTeam = await _context.FootballTeam.FindAsync(id);
            if (footballTeam == null)
            {
                return NotFound();
            }

            _context.FootballTeam.Remove(footballTeam);
            await _context.SaveChangesAsync();

            return footballTeam;
        }

        private bool FootballTeamExists(int id)
        {
            return _context.FootballTeam.Any(e => e.IdfootballTeam == id);
        }
    }
}

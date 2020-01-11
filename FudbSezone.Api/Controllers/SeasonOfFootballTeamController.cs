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
    public class SeasonOfFootballTeamController : ControllerBase
    {
        private readonly StatistikaFudbalskihSezonaContext _context;

        public SeasonOfFootballTeamController(StatistikaFudbalskihSezonaContext context)
        {
            _context = context;
        }

        // GET: api/SeasonOfFootballTeam
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SeasonOfFootballTeam>>> GetSeasonOfFootballTeam()
        {
            return await _context.SeasonOfFootballTeam.ToListAsync();
        }

        // GET: api/SeasonOfFootballTeam/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SeasonOfFootballTeam>> GetSeasonOfFootballTeam(int id)
        {
            var seasonOfFootballTeam = await _context.SeasonOfFootballTeam.FindAsync(id);

            if (seasonOfFootballTeam == null)
            {
                return NotFound();
            }

            return seasonOfFootballTeam;
        }

        // PUT: api/SeasonOfFootballTeam/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSeasonOfFootballTeam(int id, SeasonOfFootballTeam seasonOfFootballTeam)
        {
            if (id != seasonOfFootballTeam.IdsezoneFudbalskogTima)
            {
                return BadRequest();
            }

            _context.Entry(seasonOfFootballTeam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SeasonOfFootballTeamExists(id))
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

        // POST: api/SeasonOfFootballTeam
        [HttpPost]
        public async Task<ActionResult<SeasonOfFootballTeam>> PostSeasonOfFootballTeam(SeasonOfFootballTeam seasonOfFootballTeam)
        {
            _context.SeasonOfFootballTeam.Add(seasonOfFootballTeam);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSeasonOfFootballTeam", new { id = seasonOfFootballTeam.IdsezoneFudbalskogTima }, seasonOfFootballTeam);
        }

        // DELETE: api/SeasonOfFootballTeam/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SeasonOfFootballTeam>> DeleteSeasonOfFootballTeam(int id)
        {
            var seasonOfFootballTeam = await _context.SeasonOfFootballTeam.FindAsync(id);
            if (seasonOfFootballTeam == null)
            {
                return NotFound();
            }

            _context.SeasonOfFootballTeam.Remove(seasonOfFootballTeam);
            await _context.SaveChangesAsync();

            return seasonOfFootballTeam;
        }

        private bool SeasonOfFootballTeamExists(int id)
        {
            return _context.SeasonOfFootballTeam.Any(e => e.IdsezoneFudbalskogTima == id);
        }
    }
}

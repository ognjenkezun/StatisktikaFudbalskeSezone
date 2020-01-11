using System;
using System.Collections.Generic;

namespace FudbSezone.Domain.Models
{
    public partial class Season
    {
        public Season()
        {
            SeasonOfFootballTeam = new HashSet<SeasonOfFootballTeam>();
        }

        public int Idseason { get; set; }
        public string YearOfSeason { get; set; }

        public virtual ICollection<SeasonOfFootballTeam> SeasonOfFootballTeam { get; set; }
    }
}

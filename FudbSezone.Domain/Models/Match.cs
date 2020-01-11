using System;
using System.Collections.Generic;

namespace FudbSezone.Domain.Models
{
    public partial class Match
    {
        public Match()
        {
            FootballMatch = new HashSet<FootballMatch>();
        }

        public int Idmatch { get; set; }
        public string HomeTeam { get; set; }
        public string AwayTeam { get; set; }
        public int NumberOfGoalsHomeTeam { get; set; }
        public int NumberOfGoalsAwayTeam { get; set; }
        public string ResultOfMatch { get; set; }

        public virtual ICollection<FootballMatch> FootballMatch { get; set; }
    }
}

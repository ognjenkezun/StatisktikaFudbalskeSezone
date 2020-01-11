using System;
using System.Collections.Generic;

namespace FudbSezone.Domain.Models
{
    public partial class FootballTeam
    {
        public FootballTeam()
        {
            FootballMatch = new HashSet<FootballMatch>();
            SeasonOfFootballTeam = new HashSet<SeasonOfFootballTeam>();
        }

        public int IdfootballTeam { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int NumberOfPoints { get; set; }

        public virtual ICollection<FootballMatch> FootballMatch { get; set; }
        public virtual ICollection<SeasonOfFootballTeam> SeasonOfFootballTeam { get; set; }
    }
}

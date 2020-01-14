using FudbSezone.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FudbSezone.Domain.CustomModels
{
    public class SeasonDetails
    {
        public int Idseason { get; set; }
        public string YearOfSeason { get; set; }

        public int IdfootballTeam { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int NumberOfPoints { get; set; }

        public virtual ICollection<FootballMatch> FootballMatch { get; set; }
        public virtual ICollection<SeasonOfFootballTeam> SeasonOfFootballTeam { get; set; }
    }
}

using FudbSezone.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FudbSezone.Domain.CustomModels
{
    class FootballMatchDetails
    {
        public int IdfootballTeam { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int NumberOfPoints { get; set; }

        public int Idmatch { get; set; }
        public string HomeTeam { get; set; }
        public string AwayTeam { get; set; }
        public int NumberOfGoalsHomeTeam { get; set; }
        public int NumberOfGoalsAwayTeam { get; set; }
        public string ResultOfMatch { get; set; }

        public virtual ICollection<FootballMatch> FootballMatch { get; set; }
        public virtual ICollection<SeasonOfFootballTeam> SeasonOfFootballTeam { get; set; }
    }
}

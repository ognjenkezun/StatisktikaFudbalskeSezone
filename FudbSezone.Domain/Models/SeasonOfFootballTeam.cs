using System;
using System.Collections.Generic;

namespace FudbSezone.Domain.Models
{
    public partial class SeasonOfFootballTeam
    {
        public int IdsezoneFudbalskogTima { get; set; }
        public int Idseason { get; set; }
        public int IdfootballTeam { get; set; }

        public virtual FootballTeam IdfootballTeamNavigation { get; set; }
        public virtual Season IdseasonNavigation { get; set; }
    }
}

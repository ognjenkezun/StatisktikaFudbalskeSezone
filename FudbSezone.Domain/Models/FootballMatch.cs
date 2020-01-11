using System;
using System.Collections.Generic;

namespace FudbSezone.Domain.Models
{
    public partial class FootballMatch
    {
        public int IdfootballMatch { get; set; }
        public int IdfootballTeam { get; set; }
        public int Idmatch { get; set; }

        public virtual FootballTeam IdfootballTeamNavigation { get; set; }
        public virtual Match IdmatchNavigation { get; set; }
    }
}

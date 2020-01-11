using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FudbSezone.Domain.Models
{
    public partial class StatistikaFudbalskihSezonaContext : DbContext
    {
        public StatistikaFudbalskihSezonaContext()
        {
        }

        public StatistikaFudbalskihSezonaContext(DbContextOptions<StatistikaFudbalskihSezonaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<FootballMatch> FootballMatch { get; set; }
        public virtual DbSet<FootballTeam> FootballTeam { get; set; }
        public virtual DbSet<Match> Match { get; set; }
        public virtual DbSet<Season> Season { get; set; }
        public virtual DbSet<SeasonOfFootballTeam> SeasonOfFootballTeam { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-71ITJPA\\SQLEXPRESS;Database=StatistikaFudbalskihSezona;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<FootballMatch>(entity =>
            {
                entity.HasKey(e => e.IdfootballMatch)
                    .HasName("PK_FudbalskiMec");

                entity.Property(e => e.IdfootballMatch).HasColumnName("IDFootballMatch");

                entity.Property(e => e.IdfootballTeam).HasColumnName("IDFootballTeam");

                entity.Property(e => e.Idmatch).HasColumnName("IDMatch");

                entity.HasOne(d => d.IdfootballTeamNavigation)
                    .WithMany(p => p.FootballMatch)
                    .HasForeignKey(d => d.IdfootballTeam)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_FudbalskiMec_FudbalskiTim");

                entity.HasOne(d => d.IdmatchNavigation)
                    .WithMany(p => p.FootballMatch)
                    .HasForeignKey(d => d.Idmatch)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_FudbalskiMec_Mec");
            });

            modelBuilder.Entity<FootballTeam>(entity =>
            {
                entity.HasKey(e => e.IdfootballTeam)
                    .HasName("PK_FudbalskiTim");

                entity.Property(e => e.IdfootballTeam).HasColumnName("IDFootballTeam");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Match>(entity =>
            {
                entity.HasKey(e => e.Idmatch)
                    .HasName("PK_Mec");

                entity.Property(e => e.Idmatch).HasColumnName("IDMatch");

                entity.Property(e => e.AwayTeam)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.HomeTeam)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ResultOfMatch)
                    .IsRequired()
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<Season>(entity =>
            {
                entity.HasKey(e => e.Idseason)
                    .HasName("PK_Sezona");

                entity.Property(e => e.Idseason).HasColumnName("IDSeason");

                entity.Property(e => e.YearOfSeason)
                    .IsRequired()
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<SeasonOfFootballTeam>(entity =>
            {
                entity.HasKey(e => e.IdsezoneFudbalskogTima)
                    .HasName("PK_SezonaFudbalskogTima");

                entity.Property(e => e.IdsezoneFudbalskogTima).HasColumnName("IDSezoneFudbalskogTima");

                entity.Property(e => e.IdfootballTeam).HasColumnName("IDFootballTeam");

                entity.Property(e => e.Idseason).HasColumnName("IDSeason");

                entity.HasOne(d => d.IdfootballTeamNavigation)
                    .WithMany(p => p.SeasonOfFootballTeam)
                    .HasForeignKey(d => d.IdfootballTeam)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SezonaFudbalskogTima_FudbalskiTim");

                entity.HasOne(d => d.IdseasonNavigation)
                    .WithMany(p => p.SeasonOfFootballTeam)
                    .HasForeignKey(d => d.Idseason)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SezonaFudbalskogTima_Sezona");
            });
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MoviePop.Models
{
    public partial class MovieDbContext : DbContext
    {
        public MovieDbContext()
        {
        }

        public MovieDbContext(DbContextOptions<MovieDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<comments> comments { get; set; }
        public virtual DbSet<movies> movies { get; set; }
        public virtual DbSet<rating> rating { get; set; }
        public virtual DbSet<reviews> reviews { get; set; }
        public virtual DbSet<userProfile> userProfile { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlite("Data Source=moviePOP.db");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<comments>(entity =>
            {
                entity.HasIndex(e => e.commentsID)
                    .IsUnique();

                entity.Property(e => e.commentsID).ValueGeneratedNever();

                entity.Property(e => e.comments1)
                    .IsRequired()
                    .HasColumnName("comments");
            });

            modelBuilder.Entity<movies>(entity =>
            {
                entity.HasKey(e => e.movieID);

                entity.HasIndex(e => e.movieID)
                    .IsUnique();

                entity.Property(e => e.movieID).ValueGeneratedNever();

                entity.Property(e => e.title).IsRequired();
            });

            modelBuilder.Entity<rating>(entity =>
            {
                entity.HasIndex(e => e.ratingID)
                    .IsUnique();

                entity.Property(e => e.ratingID).ValueGeneratedNever();

                entity.Property(e => e.rating1).HasColumnName("rating");
            });

            modelBuilder.Entity<reviews>(entity =>
            {
                entity.HasIndex(e => e.reviewsID)
                    .IsUnique();

                entity.Property(e => e.reviewsID).ValueGeneratedNever();

                entity.Property(e => e.movieReview).IsRequired();

                entity.Property(e => e.userID).HasColumnType("INT");
            });

            modelBuilder.Entity<userProfile>(entity =>
            {
                entity.HasKey(e => e.userID);

                entity.HasIndex(e => e.userID)
                    .IsUnique();

                entity.Property(e => e.userID).ValueGeneratedNever();

                entity.Property(e => e.email).IsRequired();

                entity.Property(e => e.firstName).IsRequired();

                entity.Property(e => e.lastName).IsRequired();

                entity.Property(e => e.userName).IsRequired();

                entity.Property(e => e.userPassword).IsRequired();
            });
        }
    }
}

using Microsoft.EntityFrameworkCore;
using UniEat.Models;

public class AppDbContext : DbContext
{
    
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
        
    }

    public DbSet<Students> Student { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Students>()
            .HasIndex(s => s.Student_ID)
            .IsUnique();
    }



}
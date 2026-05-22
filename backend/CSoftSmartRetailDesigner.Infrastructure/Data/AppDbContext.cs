using CSoftSmartRetailDesigner.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CSoftSmartRetailDesigner.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Project> Projects => Set<Project>();
}

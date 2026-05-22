using CSoftSmartRetailDesigner.Application.Interfaces;
using CSoftSmartRetailDesigner.Domain.Entities;
using CSoftSmartRetailDesigner.Infrastructure.Data;

namespace CSoftSmartRetailDesigner.Infrastructure.Repositories;

public class ProjectRepository : IProjectRepository
{
    private readonly AppDbContext _context;

    public ProjectRepository(AppDbContext context)
    {
        _context = context;
    }

    public void Add(Project project)
    {
        _context.Projects.Add(project);
        _context.SaveChanges();
    }
}

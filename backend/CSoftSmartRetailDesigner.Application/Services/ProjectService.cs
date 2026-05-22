using CSoftSmartRetailDesigner.Application.DTOs;
using CSoftSmartRetailDesigner.Application.Interfaces;
using CSoftSmartRetailDesigner.Domain.Entities;

namespace CSoftSmartRetailDesigner.Application.Services;

public class ProjectService : IProjectService
{
    private readonly IProjectRepository _repository;

    public ProjectService(IProjectRepository repository)
    {
        _repository = repository;
    }

    public void CreateProject(CreateProjectDto dto)
    {
        var project = new Project
        {
            Name = dto.Name,
            StoreType = dto.StoreType,
            Area = dto.Area,
            TotalCost = (decimal)(dto.Area * 1200.0), // Automatic estimation: $1200 per m2
            CreatedAt = DateTime.UtcNow
        };

        _repository.Add(project);
    }
}
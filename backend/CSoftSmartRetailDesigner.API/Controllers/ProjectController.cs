using Microsoft.AspNetCore.Mvc;
using CSoftSmartRetailDesigner.Application.Interfaces;
using CSoftSmartRetailDesigner.Application.DTOs;

namespace CSoftSmartRetailDesigner.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : ControllerBase
{
    private readonly IProjectService _service;

    public ProjectController(IProjectService service)
    {
        _service = service;
    }

    [HttpPost]
    public IActionResult Create(CreateProjectDto dto)
    {
        _service.CreateProject(dto);
        return Ok("Proyecto registrado correctamente.");
    }
}
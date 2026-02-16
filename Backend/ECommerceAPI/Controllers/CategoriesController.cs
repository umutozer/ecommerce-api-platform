using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerceAPI.Data;
using ECommerceAPI.Models;

namespace ECommerceAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CategoriesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var categories = await _context.Categories.Where(c => c.IsActive).ToListAsync();
        return Ok(categories);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        
        if (category == null)
            return NotFound();

        return Ok(category);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CategoryDto dto)
    {
        var category = new Category
        {
            Name = dto.Name,
            Description = dto.Description
        };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = category.Id }, category);
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CategoryDto dto)
    {
        var category = await _context.Categories.FindAsync(id);
        
        if (category == null)
            return NotFound();

        category.Name = dto.Name;
        category.Description = dto.Description;

        await _context.SaveChangesAsync();
        return Ok(category);
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        
        if (category == null)
            return NotFound();

        category.IsActive = false;
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

public record CategoryDto(string Name, string Description);
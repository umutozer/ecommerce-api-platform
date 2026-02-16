using System.ComponentModel.DataAnnotations;

namespace ECommerceAPI.Models;

public class Product
{
    public int Id { get; set; }
    
    [Required]
    [MaxLength(200)]
    public string Name { get; set; } = string.Empty;
    
    [MaxLength(1000)]
    public string Description { get; set; } = string.Empty;
    
    [Required]
    public decimal Price { get; set; }
    
    public int Stock { get; set; }
    
    [MaxLength(500)]
    public string? ImageUrl { get; set; }
    
    public int CategoryId { get; set; }
    public Category? Category { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool IsActive { get; set; } = true;
}
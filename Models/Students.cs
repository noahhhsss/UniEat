using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace UniEat.Models;


public class Students
{  
    [Key]
    public int ID { get; set; }

    [Required]
    public int Student_ID { get; set; }

    [Required]
    [StringLength(50)]
    public required string First_Name { get; set; }

    [StringLength(50)]
    public string? Middle_Name { get; set; } 

    [Required]
    [StringLength(50)]
    public required string Last_Name { get; set; }

    [Required]
    public required string Password { get; set; }

    public int Points { get; set; } = 0;
    public bool Is_Suspended { get; set; } = false;
    public bool Is_Logged_In { get; set; } = false;
    public DateTime Created_at { get; set; } = DateTime.UtcNow;
}
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class AplicationDbcontex : DbContext
    {
        public AplicationDbcontex(DbContextOptions<AplicationDbcontex> options) : base(options)
        {
        }
        public DbSet<Tarea> Tareas { get; set; }
    }
}        

    


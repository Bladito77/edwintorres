namespace backend.Models
{
    public class Tarea 
    {
        public int Id { get; set; }
        public string user { get; set; }
        public string linea { get; set; }
        public string concepto { get; set; }
        public string hora { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}

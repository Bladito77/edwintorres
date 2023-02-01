using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Data;
using System.Security.Cryptography.X509Certificates;
//using backend.Data;
//using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareaController : ControllerBase
    {
        private readonly AplicationDbcontex _context;
        public TareaController(AplicationDbcontex context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                Thread.Sleep(2000);
                var ListTarea = await _context.Tareas.ToListAsync();
                return Ok(ListTarea);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {

            try
            {
                var tarea = await _context.Tareas.FindAsync(id);
                if (tarea == null)
                {
                    return NotFound();
                }
                return Ok(tarea);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var tarea = await _context.Tareas.FindAsync(id);
                if (tarea == null)
                {
                    return NotFound();
                }
                _context.Tareas.Remove(tarea);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Tarea tarea)
        {
            try
            {
                tarea.FechaCreacion = DateTime.Now;
                _context.Add(tarea);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { id=tarea.Id}, tarea);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id ,Tarea tarea )
        {
            try
            {
                if (id!= tarea.Id)
                {
                    return BadRequest();
                }

                var tareaItem = await _context.Tareas.FindAsync(id);
                

                if (tareaItem == null)
                {
                    return NotFound();
                }
                tareaItem.user = tarea.user;
                tareaItem.linea = tarea.linea;
                tareaItem.concepto = tarea.concepto;
                tareaItem.hora = tarea.hora;

                await _context.SaveChangesAsync();
                return NotFound();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        //[HttpGet]
        //public async Task<IActionResult> Index()
        //{
        //    try
        //    {
        //        var ListTarea = await _context.Tareas.ToListAsync();
        //        return Ok(ListTarea);
        //    }
        //    catch (Exception ex) 
        //    {

        //        return BadRequest(ex.Message);
        //    } 
        //}
        //public async Task<IActionResult> Details(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }
        //    var Tarea = await _context.Tareas
        //        .FirstOrDefaultAsync(m=> m.Id == id);   
        //    if (Tarea == null)
        //    {
        //        return NotFound();
        //    }   
        //    return View(Tarea); //View no me corre

        //}
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //[HttpPost]
        //[ValidateAntiForgeryToken]

        //public async Task<IActionResult> Create([Bind("id,linea,concepto,hora")] Tarea tarea)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.Add(Tarea);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(Tarea);
        //}
        //public async Task<IActionResult> Edit(int? id)
        //{
        //    if(id == null)
        //    {
        //        return NotFound();
        //    }
        //    var tarea = await _context.Tareas.FindAsync(id);
        //    if (tarea == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(tarea);
        //}
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("id,linea,concepto,hora")] Tarea tarea)
        //{
        //    if(id != tarea.Id)
        //    {
        //        return NotFound();
        //    }
        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(tarea);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DBConcurrencyException)
        //        {
        //            if (!TareaExists(tarea id))
        //            {

        //            }
        //            return BadRequest(ex.Message);
        //        }

        //    }

        //}
        //public async Task<IActionResult> Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }
        //    var tarea = await _context.Tareas.
        //            FirstOrDefaultAsync(m => m.Id == id);
        //    if (tarea == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(tarea);
        //}
        //[HttpPost,ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    var tarea = await _context.Tareas.FindAsync(id);
        //    _context.Tareas.Remove(tarea);
        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}
        //private bool TareaExists(int id)
        //{
        //    return _context.Tareas.Any(e=> e.Id == id);
        //}

    }
    
    
}

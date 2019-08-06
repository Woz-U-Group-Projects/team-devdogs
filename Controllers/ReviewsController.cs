using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviePop.Models;

namespace MoviePop.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ReviewsController : ControllerBase
  {

    private readonly MovieDbContext _context;

    public ReviewsController(MovieDbContext context)
    {
      _context = context;
    }

    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<reviews>> Get()
    {
      return _context.reviews;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody] reviews value)
    {
      _context.reviews.Add(value);
      _context.SaveChanges();
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
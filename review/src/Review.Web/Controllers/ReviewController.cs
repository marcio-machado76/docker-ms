using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Review.Web.Model;

namespace Review.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {

        public ReviewController(ApplicationContext context)
        {
            this.context = context;
        }

        private ApplicationContext context;

        // GET: api/Review
        [HttpGet]
        public IEnumerable<Model.Review> Get()
        {
            return context.Reviews;
        }

        // GET: api/Review/5
        [HttpGet("{id}", Name = "Get")]
        public IEnumerable<Model.Review> Get(string id)
        {
            return this.context.Reviews.Where(o => o.Reviewed.Equals(id) );
        }

        // POST: api/Review
        [HttpPost]
        public void Post([FromBody] Model.Review review)
        {
            context.Reviews.Add(review);
            context.SaveChanges();
            return;
        }

        // PUT: api/Review/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Model.Review review)
        {
            Model.Review oReview = context.Reviews.Where(o => o.Id == id).SingleOrDefault();

            if (oReview != null)
            {
                oReview.Description = review.Description;
                oReview.Reviewer = review.Reviewer;
                context.Update(oReview);
                context.SaveChanges();
            }
            return;
        }

        // DELETE: api/Review/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            context.Remove(context.Reviews.Where(o => o.Id == id).SingleOrDefault());
        }
    }
}
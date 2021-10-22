using Microsoft.EntityFrameworkCore;

namespace Review.Web.Model
{
    public class ApplicationContext: DbContext
    {   
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }
        public DbSet<Review> Reviews { get; set; }
    }
}
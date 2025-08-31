using Microsoft.EntityFrameworkCore;
using TodoListAPI.Models;

namespace TodoListAPI
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Todo> Todos => Set<Todo>();
    }
}

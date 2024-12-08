using Microsoft.EntityFrameworkCore;
using PlanCards.API.Models;

namespace PlanCards.API.Db
{
    public class PlanCardsContext : DbContext
    {
        public PlanCardsContext(DbContextOptions<PlanCardsContext> options) : base(options)
        {
        }
        public DbSet<Room> Rooms { get; set; }
    }
}

namespace PlanCards.API.Models
{
    public class Room
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string Name { get; set; }

        // This property will be not null
        // once user infromation is captured
        // It is kept nullable for now as temporary
        public Guid? CreatedBy { get; set; }
        public bool IsActive { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using PlanCards.API.Db;
using PlanCards.API.Models;
using System;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddDbContext<PlanCardsContext>(options =>
        options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseSwagger();


app.MapSwagger();
app.UseSwaggerUI();
//app.MapGet("/", () => "Welcome to PlanCards!");
app.MapGet("/rooms", async (PlanCardsContext dbContext) =>
{
    var rooms = await dbContext.Rooms.ToListAsync();
    return Results.Ok(rooms);
});

app.MapPost("/rooms", async (PlanCardsContext dbContext, Room room) =>
{
    dbContext.Rooms.Add(room);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/rooms/{room.Id}", room);
});

app.MapGet("/rooms/{id}", async (PlanCardsContext dbContext, Guid id) =>
{
    var room = await dbContext.Rooms.FindAsync(id);
    if (room == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(room);
});

app.MapPut("/rooms/{id}", async (PlanCardsContext dbContext, Guid id, Room room) =>
{
    if (id != room.Id)
    {
        return Results.BadRequest();
    }

    dbContext.Entry(room).State = EntityState.Modified;

    try
    {
        await dbContext.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (await dbContext.Rooms.FindAsync(id) == null)
        {
            return Results.NotFound();
        }
        throw;
    }

    return Results.NoContent();
});

app.MapDelete("/rooms/{id}", async (PlanCardsContext dbContext, Guid id) =>
{
    var room = await dbContext.Rooms.FindAsync(id);
    if (room == null)
    {
        return Results.NotFound();
    }

    dbContext.Rooms.Remove(room);
    await dbContext.SaveChangesAsync();

    return Results.NoContent();
});


app.Run();

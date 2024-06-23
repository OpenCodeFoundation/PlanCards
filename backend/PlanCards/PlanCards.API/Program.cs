using Microsoft.EntityFrameworkCore;
using PlanCards.API.Db;
using System;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddDbContext<PlanCardsContext>(options =>
        options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serve static files from wwwroot (index.html, css, js, images)
app.UseDefaultFiles();
app.UseStaticFiles();

// Simple health endpoint
app.MapGet("/health", () => Results.Ok("Healthy"));

// Fallback to index.html for SPA-style routing or direct file access
app.MapFallbackToFile("index.html");

app.Run();

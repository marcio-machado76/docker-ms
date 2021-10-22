using Microsoft.EntityFrameworkCore.Migrations;

namespace Review.Web.Migrations
{
    public partial class Reviewed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Reviewed",
                table: "Reviews",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Reviewed",
                table: "Reviews");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class v01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "User",
                table: "Tareas",
                newName: "user");

            migrationBuilder.RenameColumn(
                name: "Linea",
                table: "Tareas",
                newName: "linea");

            migrationBuilder.RenameColumn(
                name: "Hora",
                table: "Tareas",
                newName: "hora");

            migrationBuilder.RenameColumn(
                name: "Concepto",
                table: "Tareas",
                newName: "concepto");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "user",
                table: "Tareas",
                newName: "User");

            migrationBuilder.RenameColumn(
                name: "linea",
                table: "Tareas",
                newName: "Linea");

            migrationBuilder.RenameColumn(
                name: "hora",
                table: "Tareas",
                newName: "Hora");

            migrationBuilder.RenameColumn(
                name: "concepto",
                table: "Tareas",
                newName: "Concepto");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Labb4MVC.Migrations
{
    public partial class Addedoptionstoquiz : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Alternativ",
                table: "Quiz",
                newName: "CorrectAnswer");

            migrationBuilder.AddColumn<string>(
                name: "Alternativ1",
                table: "Quiz",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Alternativ2",
                table: "Quiz",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Alternativ3",
                table: "Quiz",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Alternativ4",
                table: "Quiz",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Alternativ1",
                table: "Quiz");

            migrationBuilder.DropColumn(
                name: "Alternativ2",
                table: "Quiz");

            migrationBuilder.DropColumn(
                name: "Alternativ3",
                table: "Quiz");

            migrationBuilder.DropColumn(
                name: "Alternativ4",
                table: "Quiz");

            migrationBuilder.RenameColumn(
                name: "CorrectAnswer",
                table: "Quiz",
                newName: "Alternativ");
        }
    }
}
